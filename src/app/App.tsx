import { useState, useRef } from "react";
import AllContentToolTipToStartWhichVideoToWatch from "../imports/AllContentToolTipToStartWhichVideoToWatch/AllContentToolTipToStartWhichVideoToWatch";
import WaitlistBottomSheet from "../imports/JoinWaitlistBottomSheet/WaitlistBottomSheet";
import WaitlistSnackbar from "../imports/WaitlistSnackbar/WaitlistSnackbar";
import StartHereTooltip from "../imports/AllContentToolTipToStartWhichVideoToWatch/StartHereTooltip";

export default function App() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const phoneFrameRef = useRef<HTMLDivElement>(null);
  const firstRowRef = useRef<HTMLDivElement>(null);

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
            onJoinWaitlist={() => setShowWaitlist(true)}
            firstRowRef={firstRowRef}
          />
        </div>

        {/* Overlay layer — contained within the phone frame */}
        <StartHereTooltip anchorRef={firstRowRef} frameRef={phoneFrameRef} />
        {showWaitlist && (
          <WaitlistBottomSheet
            onClose={() => setShowWaitlist(false)}
            onJoinWaitlist={() => { setShowWaitlist(false); setShowSnackbar(true); }}
          />
        )}
        {showSnackbar && (
          <WaitlistSnackbar
            message="You've been added to the waitlist!"
            actionLabel="Undo"
            onAction={() => setShowSnackbar(false)}
            onDismiss={() => setShowSnackbar(false)}
          />
        )}
      </div>
    </div>
  );
}
