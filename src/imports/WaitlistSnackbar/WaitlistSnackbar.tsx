import React from "react";

interface WaitlistSnackbarProps {
  message: string;
  actionLabel: string;
  onAction: () => void;
  onDismiss: () => void;
}

export default function WaitlistSnackbar({
  message,
  actionLabel,
  onAction,
  onDismiss,
}: WaitlistSnackbarProps) {
  React.useEffect(() => {
    const timer = setTimeout(onDismiss, 4000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <>
      <style>{`
        @keyframes snackSlideUp {
          from { transform: translateX(-50%) translateY(100%); opacity: 0; }
          to   { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
      `}</style>
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          width: 328,
          minHeight: 48,
          height: "auto",
          background: "#121212",
          borderRadius: 4,
          zIndex: 200,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "12px 12px 12px 16px",
          gap: 16,
          boxShadow: "0px 6px 10px rgba(0,0,0,0.08), 0px 1px 18px rgba(0,0,0,0.06), 0px 3px 5px rgba(0,0,0,0.1)",
          animation: "snackSlideUp 0.25s ease-out",
        }}
      >
        <p
          style={{
            flex: 1,
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            color: "#f0f0f0",
            letterSpacing: "0.25px",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          {message}
        </p>
        <button
          onClick={onAction}
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: 14,
            color: "#8ac9ff",
            letterSpacing: "0.5px",
            lineHeight: 1.15,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            whiteSpace: "nowrap",
          }}
        >
          {actionLabel}
        </button>
      </div>
    </>
  );
}
