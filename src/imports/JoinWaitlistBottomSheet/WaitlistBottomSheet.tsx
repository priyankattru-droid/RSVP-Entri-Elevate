import React from "react";

interface WaitlistBottomSheetProps {
  onClose: () => void;
  onJoinWaitlist: () => void;
}

const imgCalendar = "/waitlist-calendar.png";
const imgClock = "/waitlist-clock.png";
const imgPrereqThumb = "/prereq-video-thumb.png";

const WaitlistBottomSheet: React.FC<WaitlistBottomSheetProps> = ({
  onClose,
  onJoinWaitlist,
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
          maxHeight: "90%",
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

        {/* Close button row */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: 24,
            paddingTop: 16,
            paddingBottom: 4,
            flexShrink: 0,
          }}
        >
          <button
            onClick={onClose}
            style={{
              width: 40,
              height: 40,
              border: "none",
              background: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z" fill="#F6F6F6"/>
              <g clipPath="url(#clip0_16578_5397)">
                <path d="M26.3 13.71C25.91 13.32 25.28 13.32 24.89 13.71L20 18.59L15.11 13.7C14.72 13.31 14.09 13.31 13.7 13.7C13.31 14.09 13.31 14.72 13.7 15.11L18.59 20L13.7 24.89C13.31 25.28 13.31 25.91 13.7 26.3C14.09 26.69 14.72 26.69 15.11 26.3L20 21.41L24.89 26.3C25.28 26.69 25.91 26.69 26.3 26.3C26.69 25.91 26.69 25.28 26.3 24.89L21.41 20L26.3 15.11C26.68 14.73 26.68 14.09 26.3 13.71Z" fill="#212121"/>
              </g>
              <defs>
                <clipPath id="clip0_16578_5397">
                  <rect width="24" height="24" fill="white" transform="translate(8 8)"/>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div
          style={{
            padding: "0 24px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            overflowY: "auto",
            flex: 1,
          }}
        >
          {/* Title block */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <p
              style={{
                margin: 0,
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: "#212121",
                lineHeight: 1.25,
                letterSpacing: "0.15px",
              }}
            >
              Get access to the live class
            </p>
            <p
              style={{
                margin: 0,
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                color: "#616161",
                lineHeight: 1.6,
                letterSpacing: "0.25px",
              }}
            >
              To access the live class you need to join the waitlist.
            </p>
          </div>

          {/* RSVP card */}
          <div
            style={{
              backgroundColor: "#e6f3ff",
              borderRadius: 16,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {/* Class info + date/time */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#212121",
                  lineHeight: 1.6,
                  letterSpacing: "0.25px",
                }}
              >
                Introduction to HTML &amp; content tags with code
              </p>

              {/* Date + Time pills */}
              <div style={{ display: "flex", gap: 12 }}>
                {/* Date pill */}
                <div
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    padding: 8,
                    gap: 8,
                    flex: 1,
                    height: 48,
                    backgroundColor: "#ffffff",
                    border: "1px solid #f0f0f0",
                    borderRadius: 8,
                  }}
                >
                  <img alt="" src={imgCalendar} style={{ width: 32, height: 32, flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: "120%",
                      letterSpacing: "0.25px",
                      color: "#212121",
                    }}
                  >
                    30 Apr
                  </span>
                </div>

                {/* Time pill */}
                <div
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    padding: 8,
                    gap: 8,
                    flex: 1,
                    height: 48,
                    backgroundColor: "#ffffff",
                    border: "1px solid #f0f0f0",
                    borderRadius: 8,
                  }}
                >
                  <img alt="" src={imgClock} style={{ width: 32, height: 32, flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: "120%",
                      letterSpacing: "0.25px",
                      color: "#212121",
                    }}
                  >
                    10 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Seat count + progress bar */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                  <path d="M1.66651 13.3333C1.11422 13.3333 0.666504 12.8856 0.666504 12.3333V11.4666C0.666504 11.0888 0.763726 10.7416 0.958171 10.425C1.15262 10.1083 1.41095 9.86663 1.73317 9.69996C2.42206 9.35552 3.12206 9.09718 3.83317 8.92496C4.54428 8.75274 5.2665 8.66663 5.99984 8.66663C6.73317 8.66663 7.45539 8.75274 8.1665 8.92496C8.87761 9.09718 9.57762 9.35552 10.2665 9.69996C10.5887 9.86663 10.8471 10.1083 11.0415 10.425C11.2359 10.7416 11.3332 11.0888 11.3332 11.4666V12.3333C11.3332 12.8856 10.8855 13.3333 10.3332 13.3333H1.66651ZM12.9165 13.3333C12.7784 13.3333 12.6665 13.2214 12.6665 13.0833V11.3333C12.6665 10.8444 12.5304 10.375 12.2582 9.92496C11.9859 9.47496 11.5998 9.08885 11.0998 8.76663C11.6665 8.83329 12.1998 8.94718 12.6998 9.10829C13.1998 9.2694 13.6665 9.46663 14.0998 9.69996C14.4998 9.92218 14.8054 10.1694 15.0165 10.4416C15.2276 10.7138 15.3332 11.0111 15.3332 11.3333V12.3333C15.3332 12.8856 14.8855 13.3333 14.3332 13.3333H12.9165ZM5.99984 7.99996C5.2665 7.99996 4.63873 7.73885 4.1165 7.21663C3.59428 6.6944 3.33317 6.06663 3.33317 5.33329C3.33317 4.59996 3.59428 3.97218 4.1165 3.44996C4.63873 2.92774 5.2665 2.66663 5.99984 2.66663C6.73317 2.66663 7.36095 2.92774 7.88317 3.44996C8.40539 3.97218 8.6665 4.59996 8.6665 5.33329C8.6665 6.06663 8.40539 6.6944 7.88317 7.21663C7.36095 7.73885 6.73317 7.99996 5.99984 7.99996ZM12.6665 5.33329C12.6665 6.06663 12.4054 6.6944 11.8832 7.21663C11.3609 7.73885 10.7332 7.99996 9.99984 7.99996C9.87761 7.99996 9.72206 7.98607 9.53317 7.95829C9.34428 7.93051 9.18873 7.89996 9.0665 7.86663C9.3665 7.51107 9.59706 7.11663 9.75817 6.68329C9.91928 6.24996 9.99984 5.79996 9.99984 5.33329C9.99984 4.86663 9.91928 4.41663 9.75817 3.98329C9.59706 3.54996 9.3665 3.15551 9.0665 2.79996C9.22206 2.7444 9.37761 2.70829 9.53317 2.69163C9.68873 2.67496 9.84428 2.66663 9.99984 2.66663C10.7332 2.66663 11.3609 2.92774 11.8832 3.44996C12.4054 3.97218 12.6665 4.59996 12.6665 5.33329Z" fill="#0089FF"/>
                </svg>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    color: "#212121",
                    letterSpacing: "0.25px",
                    lineHeight: 1.2,
                  }}
                >
                  <span style={{ fontWeight: 400 }}>Only </span>
                  <span style={{ fontWeight: 600 }}>15 seats</span>
                  <span style={{ fontWeight: 400 }}> left for this live class</span>
                </span>
              </div>
              {/* Progress bar — two equal segments */}
              <div style={{ display: "flex", gap: 4, height: 4 }}>
                <div style={{ flex: 1, backgroundColor: "#0061b5", borderRadius: 4 }} />
                <div style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 4 }} />
              </div>
            </div>
          </div>

          {/* CTA button */}
          <button
            onClick={() => { onJoinWaitlist(); onClose(); }}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px 16px",
              gap: 2,
              width: 312,
              height: 48,
              backgroundColor: "#0061b5",
              borderRadius: 200,
              border: "none",
              cursor: "pointer",
              alignSelf: "stretch",
              flexGrow: 0,
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              color: "white",
              letterSpacing: "0.5px",
            }}
          >
            Join the waitlist
          </button>

          {/* Prerequisites section */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
            <p
              style={{
                margin: 0,
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 16,
                color: "#212121",
                lineHeight: 1.25,
                letterSpacing: 0,
              }}
            >
              Lessons to complete before your live class starts
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

              {/* Video prereq 1 */}
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 100, height: 58, borderRadius: 4, overflow: "hidden", flexShrink: 0, position: "relative" }}>
                  <div style={{ position: "absolute", inset: 0, border: "1px solid #f0f0f0" }}>
                    <img alt="" src={imgPrereqThumb} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#playclip)">
                        <path d="M19.9987 3.3335C10.7987 3.3335 3.33203 10.8002 3.33203 20.0002C3.33203 29.2002 10.7987 36.6668 19.9987 36.6668C29.1987 36.6668 36.6654 29.2002 36.6654 20.0002C36.6654 10.8002 29.1987 3.3335 19.9987 3.3335ZM15.832 24.4502V15.5502C15.832 14.2335 17.2987 13.4335 18.3987 14.1502L25.3154 18.6002C26.332 19.2502 26.332 20.7502 25.3154 21.4002L18.3987 25.8502C17.2987 26.5668 15.832 25.7668 15.832 24.4502Z" fill="black" fillOpacity="0.8"/>
                        <path d="M15.832 24.4668V15.5668C15.832 14.2502 17.2987 13.4502 18.3987 14.1668L25.3154 18.6168C26.332 19.2668 26.332 20.7668 25.3154 21.4168L18.3987 25.8668C17.2987 26.5835 15.832 25.7835 15.832 24.4668Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="playclip">
                          <rect width="40" height="40" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, height: 4, width: "99.429px", backgroundColor: "rgba(0,0,0,0.4)" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 14, color: "#212121", letterSpacing: "0.25px", lineHeight: 1.2 }}>HTML - 01 FSD</p>
                  <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 12, color: "#616161", letterSpacing: "0.25px", lineHeight: 1.2 }}>Video  •  06:05 mins</p>
                </div>
              </div>

              {/* Video prereq 2 */}
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 100, height: 58, borderRadius: 4, overflow: "hidden", flexShrink: 0, position: "relative" }}>
                  <div style={{ position: "absolute", inset: 0, border: "1px solid #f0f0f0" }}>
                    <img alt="" src={imgPrereqThumb} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#playclip)">
                        <path d="M19.9987 3.3335C10.7987 3.3335 3.33203 10.8002 3.33203 20.0002C3.33203 29.2002 10.7987 36.6668 19.9987 36.6668C29.1987 36.6668 36.6654 29.2002 36.6654 20.0002C36.6654 10.8002 29.1987 3.3335 19.9987 3.3335ZM15.832 24.4502V15.5502C15.832 14.2335 17.2987 13.4335 18.3987 14.1502L25.3154 18.6002C26.332 19.2502 26.332 20.7502 25.3154 21.4002L18.3987 25.8502C17.2987 26.5668 15.832 25.7668 15.832 24.4502Z" fill="black" fillOpacity="0.8"/>
                        <path d="M15.832 24.4668V15.5668C15.832 14.2502 17.2987 13.4502 18.3987 14.1668L25.3154 18.6168C26.332 19.2668 26.332 20.7668 25.3154 21.4168L18.3987 25.8668C17.2987 26.5835 15.832 25.7835 15.832 24.4668Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="playclip">
                          <rect width="40" height="40" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, height: 4, width: "99.429px", backgroundColor: "rgba(0,0,0,0.4)" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 14, color: "#212121", letterSpacing: "0.25px", lineHeight: 1.2 }}>HTML5 Content Tags - h1-h6, p, span, images, lists</p>
                  <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 12, color: "#616161", letterSpacing: "0.25px", lineHeight: 1.2 }}>Video  •  06:05 mins</p>
                </div>
              </div>

              {/* Quiz prereq */}
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 100, height: 58, borderRadius: 4, overflow: "hidden", flexShrink: 0, position: "relative", backgroundColor: "#fff6e6", border: "1px solid #f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6.71875" y="5.85938" width="26.5625" height="30.7812" rx="3.125" fill="#FFA000"/>
                    <rect x="14.1406" y="3.35938" width="11.7188" height="5" rx="1.25" fill="#F99091"/>
                    <rect x="11.7969" y="11.875" width="14.0625" height="1.875" rx="0.9375" fill="#FFD38A"/>
                    <rect x="27.1094" y="11.875" width="1.875" height="1.875" rx="0.9375" fill="#FFD38A"/>
                    <rect x="11.7969" y="17.5" width="14.0625" height="1.875" rx="0.9375" fill="#FFD38A"/>
                    <rect x="27.1094" y="17.5" width="1.875" height="1.875" rx="0.9375" fill="#FFD38A"/>
                    <rect x="11.7969" y="23.125" width="14.0625" height="1.875" rx="0.9375" fill="#FFD38A"/>
                    <rect x="27.1094" y="23.125" width="1.875" height="1.875" rx="0.9375" fill="#FFD38A"/>
                    <rect x="11.7969" y="28.75" width="14.0625" height="1.875" rx="0.9375" fill="#FFD38A"/>
                    <rect x="27.1094" y="28.75" width="1.875" height="1.875" rx="0.9375" fill="#FFD38A"/>
                    <path d="M14.1406 5.85938H25.8594V7.10938C25.8594 7.79973 25.2997 8.35938 24.6094 8.35938H15.3906C14.7003 8.35938 14.1406 7.79973 14.1406 7.10938V5.85938Z" fill="#F65A5B"/>
                  </svg>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 14, color: "#212121", letterSpacing: "0.25px", lineHeight: 1.2 }}>HTML Quiz</p>
                  <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 12, color: "#616161", letterSpacing: "0.25px", lineHeight: 1.2 }}>Quiz  •  10 questions</p>
                </div>
              </div>

            </div>
          </div>

          {/* Top #1 live recording */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <p
              style={{
                margin: 0,
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 16,
                color: "#212121",
                lineHeight: 1.5,
                letterSpacing: 0,
              }}
            >
              Top #1 live recording
            </p>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ width: 100, height: 58, borderRadius: 4, overflow: "hidden", flexShrink: 0, backgroundColor: "#e6f2ef", border: "1px solid #f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
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

        </div>
      </div>
    </>
  );
};

export default WaitlistBottomSheet;
