import React from "react";

interface StateSwitcherMenuProps {
  currentState: string;
  onSelectState: (state: string) => void;
  onClose: () => void;
}

const STATES = [
  { id: "join_waitlist",    label: "Join the waitlist",         description: "Waitlist is open, user hasn't joined yet" },
  { id: "learn_prereqs",   label: "Learn the prerequisites",   description: "User joined waitlist, needs to complete lessons" },
  { id: "leave_waitlist",  label: "Leave the waitlist",        description: "User is on the waitlist, can leave" },
  { id: "ongoing_live",        label: "On-going live (RSVPed)",       description: "You're on the waitlist, class is live now" },
  { id: "ongoing_live_no_rsvp", label: "On-going live (No RSVP)",    description: "Didn't RSVP — few seats still available" },
  { id: "after_live",          label: "After the live class",         description: "Live class has ended, recording available" },
  { id: "waitlist_not_open", label: "Waitlist not yet open",   description: "Too early, waitlist hasn't opened" },
];

const StateSwitcherMenu: React.FC<StateSwitcherMenuProps> = ({
  currentState,
  onSelectState,
  onClose,
}) => {
  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { transform: translateX(-50%) translateY(100%); opacity: 0; }
          to   { transform: translateX(-50%) translateY(0);    opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 100,
          animation: "fadeIn 0.3s ease-out forwards",
        }}
      />

      {/* Sheet */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          animation: "slideUp 0.3s ease-out",
          width: 360,
          height: "auto",
          backgroundColor: "#ffffff",
          borderTop: "4px solid #f0f0f0",
          borderRadius: "20px 20px 0 0",
          zIndex: 101,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 24px 8px 24px",
          }}
        >
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 18, color: "#212121", margin: 0 }}>
            Switch prototype state
          </p>
          {/* Close button */}
          <div
            onClick={onClose}
            style={{
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              borderRadius: 8,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15" stroke="#212121" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M5 5L15 15" stroke="#212121" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Description */}
        <p style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 12,
          fontWeight: 400,
          color: "#616161",
          lineHeight: 1.5,
          letterSpacing: "0.25px",
          margin: 0,
          padding: "0 24px 16px 24px",
        }}>
          This prototype demonstrates different RSVP states for the live class experience. Tap any state below to preview how the screen changes. Look for highlighted elements after switching.
        </p>

        {/* State list */}
        <div style={{ padding: "0 24px 24px 24px", overflowY: "auto" }}>
          {STATES.map((state, index) => {
            const isActive = state.id === currentState;
            const isLast = index === STATES.length - 1;
            return (
              <div
                key={state.id}
                onClick={() => onSelectState(state.id)}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 0",
                  borderBottom: isLast ? "none" : "1px solid #f0f0f0",
                  cursor: "pointer",
                }}
              >
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: isActive ? "#0061B5" : "#212121",
                    lineHeight: 1.4,
                    margin: 0,
                  }}>
                    {state.label}
                  </p>
                  <p style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 12,
                    fontWeight: 400,
                    color: "#616161",
                    lineHeight: 1.4,
                    marginTop: 2,
                    marginBottom: 0,
                  }}>
                    {state.description}
                  </p>
                </div>
                {isActive && (
                  <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "#0061B5",
                    flexShrink: 0,
                    marginLeft: 12,
                  }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StateSwitcherMenu;
