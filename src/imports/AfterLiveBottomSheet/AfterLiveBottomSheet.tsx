import React from "react";

interface AfterLiveBottomSheetProps {
  onClose: () => void;
}

const AfterLiveBottomSheet: React.FC<AfterLiveBottomSheetProps> = ({ onClose }) => {
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
        {/* Close button */}
        <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: 24, paddingTop: 16, paddingBottom: 4, flexShrink: 0 }}>
          <button
            onClick={onClose}
            style={{ width: 40, height: 40, border: "none", background: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z" fill="#F6F6F6"/>
              <g clipPath="url(#alfClose)">
                <path d="M26.3 13.71C25.91 13.32 25.28 13.32 24.89 13.71L20 18.59L15.11 13.7C14.72 13.31 14.09 13.31 13.7 13.7C13.31 14.09 13.31 14.72 13.7 15.11L18.59 20L13.7 24.89C13.31 25.28 13.31 25.91 13.7 26.3C14.09 26.69 14.72 26.69 15.11 26.3L20 21.41L24.89 26.3C25.28 26.69 25.91 26.69 26.3 26.3C26.69 25.91 26.69 25.28 26.3 24.89L21.41 20L26.3 15.11C26.68 14.73 26.68 14.09 26.3 13.71Z" fill="#212121"/>
              </g>
              <defs>
                <clipPath id="alfClose"><rect width="24" height="24" fill="white" transform="translate(8 8)"/></clipPath>
              </defs>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: "0 24px 24px 24px", display: "flex", flexDirection: "column" }}>

          {/* Title */}
          <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 18, color: "#212121", letterSpacing: "0.15px", lineHeight: 1.25 }}>
            Recorded live session
          </p>

          {/* Section 1 — Top #1 live recording */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
            <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 16, color: "#212121", lineHeight: 1.5 }}>
              Top #1 live recording
            </p>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ width: 100, height: 58, borderRadius: 4, flexShrink: 0, backgroundColor: "#e6f2ef", border: "1px solid #f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="30" r="8.35938" fill="#FFB333"/>
                  <path d="M8.33333 36.6671C7.41667 36.6671 6.63194 36.3407 5.97917 35.6879C5.32639 35.0351 5 34.2504 5 33.3337V6.66707C5 5.75041 5.32639 4.96568 5.97917 4.31291C6.63194 3.66013 7.41667 3.33374 8.33333 3.33374H28.3333C29.25 3.33374 30.0347 3.66013 30.6875 4.31291C31.3403 4.96568 31.6667 5.75041 31.6667 6.66707V17.2125C31.6667 17.5433 31.5486 17.821 31.3125 18.0454C31.0764 18.2701 30.7917 18.3825 30.4583 18.3825C28.7917 18.3544 27.2361 18.5929 25.7917 19.0979C24.3472 19.6032 23 20.4874 21.75 21.7504C20.6944 22.8093 19.8611 24.0422 19.25 25.4492C18.6389 26.8564 18.3333 28.3679 18.3333 29.9837C18.3333 30.7918 18.4236 31.5929 18.6042 32.3871C18.7847 33.1812 19.0278 33.9405 19.3333 34.665C19.5556 35.1386 19.5417 35.5907 19.2917 36.0212C19.0417 36.4518 18.6667 36.6671 18.1667 36.6671H8.33333Z" fill="#00805C"/>
                  <path d="M30 21.6406C30.5708 21.6406 31.1283 21.6976 31.667 21.8066V33.334C31.6669 34.2504 31.3401 35.0348 30.6875 35.6875C30.0347 36.3403 29.2497 36.667 28.333 36.667H24.958C22.9429 35.1407 21.6406 32.7228 21.6406 30C21.6406 25.3832 25.3832 21.6406 30 21.6406Z" fill="#B57200"/>
                  <path d="M33.2031 29.1881C33.8281 29.5489 33.8281 30.4511 33.2031 30.8119L29.3359 33.0446C28.7109 33.4055 27.9297 32.9544 27.9297 32.2327L27.9297 27.7673C27.9297 27.0456 28.7109 26.5945 29.3359 26.9554L33.2031 29.1881Z" fill="white"/>
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1, paddingTop: 2 }}>
                <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 14, color: "#212121", letterSpacing: "0.25px", lineHeight: 1.2 }}>Introduction to HTML</p>
                <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 12, color: "#616161", letterSpacing: "0.25px", lineHeight: 1.2 }}>Recorded Live • 57:15 mins</p>
              </div>
            </div>
          </div>

          {/* Section 2 — Live recorded on date */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
            <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 16, color: "#212121", lineHeight: 1.6, letterSpacing: "0.25px" }}>
              Live recorded on 30 Apr 2026
            </p>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ width: 100, height: 58, borderRadius: 4, flexShrink: 0, backgroundColor: "#f6f6f6", border: "1px solid #f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4">
                    <circle cx="30" cy="30" r="8.35938" fill="#CFCFCF"/>
                    <path d="M8.33333 36.6671C7.41667 36.6671 6.63194 36.3407 5.97917 35.6879C5.32639 35.0351 5 34.2504 5 33.3337V6.66707C5 5.75041 5.32639 4.96568 5.97917 4.31291C6.63194 3.66013 7.41667 3.33374 8.33333 3.33374H28.3333C29.25 3.33374 30.0347 3.66013 30.6875 4.31291C31.3403 4.96568 31.6667 5.75041 31.6667 6.66707V17.2125C31.6667 17.5433 31.5486 17.821 31.3125 18.0454C31.0764 18.2701 30.7917 18.3825 30.4583 18.3825C28.7917 18.3544 27.2361 18.5929 25.7917 19.0979C24.3472 19.6032 23 20.4874 21.75 21.7504C20.6944 22.8093 19.8611 24.0422 19.25 25.4492C18.6389 26.8564 18.3333 28.3679 18.3333 29.9837C18.3333 30.7918 18.4236 31.5929 18.6042 32.3871C18.7847 33.1812 19.0278 33.9405 19.3333 34.665C19.5556 35.1386 19.5417 35.5907 19.2917 36.0212C19.0417 36.4518 18.6667 36.6671 18.1667 36.6671H8.33333Z" fill="#CFCFCF"/>
                    <path d="M30 21.6406C30.5708 21.6406 31.1283 21.6976 31.667 21.8066V33.334C31.6669 34.2504 31.3401 35.0348 30.6875 35.6875C30.0347 36.3403 29.2497 36.667 28.333 36.667H24.958C22.9429 35.1407 21.6406 32.7228 21.6406 30C21.6406 25.3832 25.3832 21.6406 30 21.6406Z" fill="#B2B2B2"/>
                    <path d="M33.2031 29.1881C33.8281 29.5489 33.8281 30.4511 33.2031 30.8119L29.3359 33.0446C28.7109 33.4055 27.9297 32.9544 27.9297 32.2327L27.9297 27.7673C27.9297 27.0456 28.7109 26.5945 29.3359 26.9554L33.2031 29.1881Z" fill="#FAFAFA"/>
                  </g>
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1, paddingTop: 2 }}>
                <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 14, color: "#212121", letterSpacing: "0.25px", lineHeight: 1.2 }}>Introduction to HTML</p>
                <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 12, color: "#616161", letterSpacing: "0.25px", lineHeight: 1.2 }}>Recording available in 24 hours</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AfterLiveBottomSheet;
