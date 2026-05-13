import { useState, useRef } from "react";
import AllContentToolTipToStartWhichVideoToWatch from "../imports/AllContentToolTipToStartWhichVideoToWatch/AllContentToolTipToStartWhichVideoToWatch";
import WaitlistBottomSheet from "../imports/JoinWaitlistBottomSheet/WaitlistBottomSheet";
import LearnPrereqsBottomSheet from "../imports/LearnPrereqsBottomSheet/LearnPrereqsBottomSheet";
import WaitlistSnackbar from "../imports/WaitlistSnackbar/WaitlistSnackbar";
import StartHereTooltip from "../imports/AllContentToolTipToStartWhichVideoToWatch/StartHereTooltip";
import StateSwitcherMenu from "../imports/StateSwitcherMenu/StateSwitcherMenu";
import AfterLiveBottomSheet from "../imports/AfterLiveBottomSheet/AfterLiveBottomSheet";
import WaitlistNotOpenBottomSheet from "../imports/WaitlistNotOpenBottomSheet/WaitlistNotOpenBottomSheet";

const STATE_LABELS: Record<string, string> = {
  join_waitlist:        "Join the waitlist",
  learn_prereqs:        "Learn the prerequisites",
  leave_waitlist:       "Leave the waitlist",
  ongoing_live:         "On-going live (RSVPed)",
  ongoing_live_no_rsvp: "On-going live (No RSVP)",
  after_live:           "After the live class",
  waitlist_not_open:    "Waitlist not yet open",
  waitlist_full:        "Waitlist full",
  nth_time_joining:     "Returning to live class",
};

export default function App() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [showLearnPrereqs, setShowLearnPrereqs] = useState(false);
  const [showAfterLive, setShowAfterLive] = useState(false);
  const [showWaitlistFull, setShowWaitlistFull] = useState(false);
  const [showWaitlistNotOpen, setShowWaitlistNotOpen] = useState(false);
  const [showStateSwitcher, setShowStateSwitcher] = useState(false);
  const [appState, setAppState] = useState<string>("join_waitlist");
  // Join confirmation snackbar (Undo)
  const [joinSnackbar, setJoinSnackbar] = useState(false);
  // Leave waitlist snackbar (Undo → back to learn_prereqs)
  const [leaveSnackbar, setLeaveSnackbar] = useState(false);
  // State-switch confirmation snackbar (OK)
  const [switchSnackbar, setSwitchSnackbar] = useState<string | null>(null);
  // Guard-rail snackbar (Switch → opens state switcher)
  const [guardSnackbar, setGuardSnackbar] = useState<string | null>(null);
  // "Opening live class…" info snackbar (auto-dismiss, no real action)
  const [liveOpenSnackbar, setLiveOpenSnackbar] = useState(false);

  const phoneFrameRef = useRef<HTMLDivElement>(null);
  const firstRowRef = useRef<HTMLDivElement>(null);

  // Derived — no separate boolean state
  const waitlistJoined = appState === "learn_prereqs";

  // ── CTA handlers with guard-rail logic ──────────────────────

  const handleJoinWaitlistTap = () => {
    if (appState === "join_waitlist") {
      setShowWaitlist(true);
    } else {
      setGuardSnackbar("Switch to 'Join the waitlist' from the ☰ menu");
    }
  };

  const handleViewRecordedSession = () => {
    if (appState === "after_live") {
      setShowAfterLive(true);
    } else if (appState === "waitlist_not_open") {
      setShowWaitlistNotOpen(true);
    } else {
      setGuardSnackbar("Switch to 'After the live class' from the ☰ menu");
    }
  };

  const handleLiveClassTap = () => {
    if (appState === "ongoing_live" || appState === "ongoing_live_no_rsvp") {
      setLiveOpenSnackbar(true);
    } else {
      setGuardSnackbar("Switch to 'On-going live' from the ☰ menu");
    }
  };

  const handleLearnCTATap = () => {
    if (appState === "learn_prereqs") {
      setShowLearnPrereqs(true);
    } else {
      setGuardSnackbar("Switch to 'Learn the prerequisites' from the ☰ menu");
    }
  };

  // ── Flow transitions ─────────────────────────────────────────

  const handleJoinWaitlist = () => {
    setShowWaitlist(false);
    setAppState("learn_prereqs");
    setJoinSnackbar(true);
  };

  const handleLeaveWaitlist = () => {
    setShowLearnPrereqs(false);
    setAppState("join_waitlist");
    setSwitchSnackbar(null);
    setLeaveSnackbar(true);
  };

  const handleStateSwitch = (newState: string) => {
    setShowStateSwitcher(false);
    if (newState === "leave_waitlist") {
      // Leave waitlist is a transition, not a resting state
      setAppState("join_waitlist");
      setLeaveSnackbar(true);
    } else {
      setAppState(newState);
      setSwitchSnackbar(`Switched to: ${STATE_LABELS[newState]}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        ref={phoneFrameRef}
        style={{ position: "relative", width: 360, height: 800, overflow: "hidden" }}
        className="bg-white shadow-2xl"
      >
        {/* Scrollable content layer */}
        <div style={{ position: "absolute", inset: 0, overflowY: "auto" }}>
          <AllContentToolTipToStartWhichVideoToWatch
            onJoinWaitlist={handleJoinWaitlistTap}
            onLearnCTA={handleLearnCTATap}
            onLiveClassTap={handleLiveClassTap}
            onViewRecording={handleViewRecordedSession}
            firstRowRef={firstRowRef}
            waitlistJoined={waitlistJoined}
            lessonsRemaining={3}
            appState={appState}
            onMenuPress={() => setShowStateSwitcher(true)}
          />
        </div>

        {/* Overlay layer — contained within the phone frame */}
        <StartHereTooltip anchorRef={firstRowRef} frameRef={phoneFrameRef} />

        {showWaitlist && (
          <WaitlistBottomSheet
            onClose={() => setShowWaitlist(false)}
            onJoinWaitlist={handleJoinWaitlist}
          />
        )}

        {showAfterLive && (
          <AfterLiveBottomSheet onClose={() => setShowAfterLive(false)} />
        )}

        {showWaitlistNotOpen && (
          <WaitlistNotOpenBottomSheet onClose={() => setShowWaitlistNotOpen(false)} />
        )}

        {showLearnPrereqs && (
          <LearnPrereqsBottomSheet
            onClose={() => setShowLearnPrereqs(false)}
            onLeaveWaitlist={handleLeaveWaitlist}
          />
        )}

        {showStateSwitcher && (
          <StateSwitcherMenu
            currentState={appState}
            onSelectState={handleStateSwitch}
            onClose={() => setShowStateSwitcher(false)}
          />
        )}

        {/* Join confirmation snackbar */}
        {joinSnackbar && (
          <WaitlistSnackbar
            message="You've been added to the waitlist!"
            actionLabel="Undo"
            onAction={() => { setJoinSnackbar(false); setAppState("join_waitlist"); }}
            onDismiss={() => setJoinSnackbar(false)}
          />
        )}

        {/* "Opening live class…" info snackbar */}
        {liveOpenSnackbar && (
          <WaitlistSnackbar
            message="Opening live class…"
            actionLabel="OK"
            onAction={() => setLiveOpenSnackbar(false)}
            onDismiss={() => setLiveOpenSnackbar(false)}
          />
        )}

        {/* Snackbar priority: leave > switch > guard */}
        {leaveSnackbar ? (
          <WaitlistSnackbar
            message="You have opted out of the live class waitlist."
            actionLabel="Undo"
            onAction={() => { setLeaveSnackbar(false); setAppState("learn_prereqs"); }}
            onDismiss={() => setLeaveSnackbar(false)}
          />
        ) : switchSnackbar ? (
          <WaitlistSnackbar
            message={switchSnackbar}
            actionLabel="OK"
            onAction={() => setSwitchSnackbar(null)}
            onDismiss={() => setSwitchSnackbar(null)}
          />
        ) : guardSnackbar ? (
          <WaitlistSnackbar
            message={guardSnackbar}
            actionLabel="Switch"
            onAction={() => {
              setGuardSnackbar(null);
              setShowStateSwitcher(true);
            }}
            onDismiss={() => setGuardSnackbar(null)}
          />
        ) : null}
      </div>
    </div>
  );
}
