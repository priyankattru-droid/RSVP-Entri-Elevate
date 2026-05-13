import React from "react";
import svgPaths from "./svg-vh9tqy82t3";
const imgEntriElevateFullStackWebDevelopment1 = "/a5d7005dafd61cc9eb434ffe52d42cd9b4b9b22c.png";
const imgVideoThumbnail = "/ee3ba5daace8f1e90a116b640177442ae674610f.png";
const imgTestPlatform1 = "/bd49b152f1633c72e1664d3f3ed1f06cf41f1216.png";
const imgImage = "/9a5440c44a9fb4f392324a1a89dfafcfc8aba267.png";
import AppStatusBar from "../AppStatusBar-1/AppStatusBar-1-13247";
import Chips from "../Chips/Chips";

// ─────────────────────────────────────────────
// Course Header
// ─────────────────────────────────────────────

function CourseTitleText() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0 w-[360px]" data-name="Course Title Section">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[18px] tracking-[0.15px] w-full">
        <p className="font-bold text-[#212121] text-[18px] leading-[1.25] tracking-[0.15px]" style={{ fontWeight: 700, fontSize: '18px' }}>
  Full Stack Web Development Course
</p>
      </div>
    </div>
  );
}

function CourseTitleAndThumbnail() {
  return (
    <div className="flex flex-col gap-[12px] items-start w-full pt-[40px]" data-name="Course Title and Thumbnail">
      <div className="h-[202px] relative w-full" data-name="Course Banner">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEntriElevateFullStackWebDevelopment1} />
      </div>
      <CourseTitleText />
    </div>
  );
}

// ─────────────────────────────────────────────
// Live Class Card (carousel item)
// ─────────────────────────────────────────────

function CourseIllustrationGroup1() {
  return (
    <div className="relative size-full">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2237 2.50001">
        <g id="Group 3233" opacity="0.78">
          <path d={svgPaths.pfdf4c00} fill="var(--fill-0, #4A4A4A)" id="Rectangle 2046" />
        </g>
      </svg>
    </div>
  );
}

function CourseIllustrationGroup2() {
  return (
    <div className="absolute inset-[58.59%_12.22%_7.7%_61.13%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3203 26.9671">
        <g id="Group 3234">
          <g id="Group 3230">
            <path d={svgPaths.p172efb00} fill="var(--fill-0, #F0F0F0)" id="Polygon 4" />
            <path d={svgPaths.p2a7710c0} fill="var(--fill-0, #F0F0F0)" id="Polygon 5" />
          </g>
          <path d={svgPaths.p151d6700} fill="var(--fill-0, #B2B2B2)" id="Intersect" />
        </g>
      </svg>
    </div>
  );
}

function LiveClassCardTitleMeta({ waitlistJoined }: { waitlistJoined?: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 tracking-[0.25px] w-full" data-name="Title + Subtitle">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-ellipsis w-full">Introduction to HTML</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] overflow-hidden relative shrink-0 text-[#616161] text-[12px] text-ellipsis w-full whitespace-pre-wrap">{waitlistJoined ? `Live Class • 10 PM • 30 Apr  Learn lessons before the class` : `Live Class • 10 PM • 30 Apr`}</p>
    </div>
  );
}

function LiveClassCardCTA({ onJoinWaitlist, onLearnCTA, waitlistJoined }: { onJoinWaitlist?: () => void; onLearnCTA?: () => void; waitlistJoined?: boolean }) {
  return (
    <div className="content-center flex flex-wrap gap-[24px] items-center relative shrink-0 w-full" data-name="CTA">
      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Primary CTA" onClick={waitlistJoined ? onLearnCTA : onJoinWaitlist} style={{ cursor: 'pointer' }}>
        <p
        style={{ fontWeight: 700, fontSize: 14, color: '#004B8C', letterSpacing: '0.5px' }}>
          {waitlistJoined ? 'Learn now' : 'Join the waitlist'}
        </p>
      </div>
    </div>
  );
}

function LiveClassCardContent({ onJoinWaitlist, onLearnCTA, waitlistJoined }: { onJoinWaitlist?: () => void; onLearnCTA?: () => void; waitlistJoined?: boolean }) {
  return (
    <div className="flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px pb-[4px] relative" data-name="Content">
      <div style={{ backgroundColor: '#121212', display: 'inline-flex', alignItems: 'center', padding: '2px 4px', borderRadius: '2px' }}>
  <p style={{ fontSize: '8px', fontWeight: 700, color: 'white', letterSpacing: '1px', textTransform: 'uppercase', lineHeight: 1, margin: 0 }}>UPCOMING</p>
</div>
      <LiveClassCardTitleMeta waitlistJoined={waitlistJoined} />
      <LiveClassCardCTA onJoinWaitlist={onJoinWaitlist} onLearnCTA={onLearnCTA} waitlistJoined={waitlistJoined} />
    </div>
  );
}

function CarouselDotInactive() {
  return (
    <div className="bg-[#f6f6f6] relative rounded-[200px] shrink-0 size-[6px]">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[200px]" />
    </div>
  );
}

function CarouselDotActive() {
  return <div className="-translate-y-1/2 absolute bg-[#ffd428] right-[181px] rounded-[200px] size-[6px] top-1/2" data-name="Active dot" />;
}

function LiveClassCard({ onJoinWaitlist, onLearnCTA, waitlistJoined, appState, onLiveClassTap }: { onJoinWaitlist?: () => void; onLearnCTA?: () => void; waitlistJoined?: boolean; appState?: string; onLiveClassTap?: () => void }) {
  const isOngoing = appState === "ongoing_live" || appState === "ongoing_live_no_rsvp";
  const isAfterLive = appState === "after_live" || appState === "waitlist_not_open";
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center pt-[8px] relative shrink-0 w-[360px]">
      <div
        style={{ backgroundColor: isOngoing ? "#e6f2ef" : undefined, alignItems: isOngoing ? "flex-start" : undefined }}
        className={`${isOngoing ? "" : "bg-[#f6f6f6]"} content-stretch flex gap-[16px] items-center min-h-[152px] min-w-[312px] p-[16px] relative rounded-[16px] shrink-0 w-[328px]`}
        data-name="Live Class Card"
      >
        {isOngoing ? (
          <>
            {/* Ongoing live illustration */}
            <div style={{ width: 72, height: 72, borderRadius: 12, overflow: "hidden", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="72" height="72" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10.0005" y="10" width="60" height="60" rx="4.78125" fill="#00805C"/>
                <path d="M36.2907 34.1983C36.3725 33.6468 36.8459 33.2385 37.4034 33.2385L55.4751 33.2385C56.4332 33.2385 56.9528 34.3598 56.3334 35.0908L34.4226 60.9494C33.6908 61.8131 32.2853 61.1767 32.4516 60.0569L36.2907 34.1983Z" fill="#FFB333"/>
                <path d="M43.7748 45.8422C43.6929 46.3937 43.2195 46.802 42.662 46.802L24.5904 46.802C23.6322 46.802 23.1127 45.6807 23.7321 44.9497L45.6428 19.0911C46.3746 18.2274 47.7801 18.8639 47.6139 19.9837L43.7748 45.8422Z" fill="#FFB333"/>
                <path d="M43.2212 43.627C43.1393 44.1784 42.6654 44.5869 42.1079 44.5869H35.6313L36.8521 36.3613C36.934 35.81 37.4079 35.4014 37.9653 35.4014H44.4419L43.2212 43.627Z" fill="#B57200"/>
              </svg>
            </div>
            {/* Ongoing content */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8, alignSelf: "center" }}>
              {/* LIVE tag */}
              <div style={{ display: "flex", alignItems: "center", gap: 2, backgroundColor: "#af4041", border: "0.5px solid rgba(0,0,0,0.4)", borderRadius: 2, padding: "2px 4px", alignSelf: "flex-start" }}>
                <div style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "white" }} />
                <span style={{ fontSize: 8, fontWeight: 700, color: "white", letterSpacing: 1, textTransform: "uppercase" as const, lineHeight: 1 }}>LIVE</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#212121", lineHeight: 1.2 }}>Introduction to HTML</p>
                <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 400, color: "#616161", lineHeight: 1.5 }}>
                  {appState === "ongoing_live" ? "Ongoing live" : "Ongoing • few seats available"}
                </p>
              </div>
              <p onClick={onLiveClassTap} style={{ margin: 0, fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 700, color: "#004633", letterSpacing: "0.5px", cursor: "pointer" }}>Watch live now</p>
            </div>
          </>
        ) : isAfterLive ? (
          <>
            {/* After-live illustration — hourglass/upcoming */}
            <div style={{ width: 72, height: 72, borderRadius: 12, overflow: "hidden", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="72" height="72" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.2812 68.5781C13.2812 67.4649 14.1837 66.5625 15.2969 66.5625H37.6562C38.5506 69.2945 39.2244 70.7887 40.8594 73.3594L15.2912 73.2869C14.1802 73.2838 13.2812 72.3823 13.2812 71.2713V68.5781Z" fill="#949494"/>
                <rect x="13.2812" y="6.5625" width="53.2812" height="6.71875" rx="2.01562" fill="#949494"/>
                <circle cx="60" cy="60" r="16.7188" fill="#949494"/>
                <path d="M20 12.0312C20 11.3409 20.5596 10.7812 21.25 10.7812H58.75C59.4404 10.7812 60 11.3409 60 12.0312C60 12.7216 59.4404 13.2812 58.75 13.2812H21.25C20.5596 13.2812 20 12.7216 20 12.0312Z" fill="#616161"/>
                <path d="M20 67.8125C20 67.1221 20.5596 66.5625 21.25 66.5625H36.7686C37.3001 66.5625 37.7736 66.8987 37.9487 67.4006C38.2323 68.2132 37.6291 69.0625 36.7686 69.0625H21.25C20.5596 69.0625 20 68.5029 20 67.8125Z" fill="#616161"/>
                <path d="M55.3926 43.9246C56.1827 44.8888 56.8816 45.9402 57.4883 47.0798C59.072 50.0549 59.8642 53.2385 59.8643 56.6306V66.6404C57.6363 66.6404 51.6076 66.6404 44.6523 66.6404C43.7704 64.6049 43.2812 62.3594 43.2812 59.9998C43.2813 52.3645 48.3998 45.925 55.3926 43.9246Z" fill="#616161"/>
                <path d="M37.6386 66.5625C36.9161 64.2825 36.6503 62.3844 36.6503 59.9932C36.6503 57.324 37.081 54.7659 37.9423 52.3191C38.8037 49.8723 40.0123 47.6479 41.5683 45.646C43.1242 43.644 44.9719 41.9341 47.1113 40.516C49.2508 39.098 51.6264 38.0553 54.2382 37.388C56.072 35.5529 57.489 33.4119 58.4893 30.9651C59.4895 28.5183 59.9896 25.9602 59.9896 23.291V13.2812C85.0957 13.2812 10.0153 13.2812 19.9794 13.2812V23.291C19.9794 26.6831 20.7713 29.8668 22.355 32.8419C23.9388 35.817 26.1477 38.1943 28.9817 39.9738C26.1477 41.7533 23.9388 44.1306 22.355 47.1057C20.7713 50.0808 19.9794 53.2645 19.9794 56.6567V66.5625C26.7764 66.5625 31.1525 66.5625 37.6386 66.5625Z" fill="#949494"/>
                <path d="M64.5474 66.6406C65.6604 66.6408 66.563 67.5432 66.563 68.6562V71.3438C66.563 72.4568 65.6604 73.3592 64.5474 73.3594H49.9468C47.6482 71.6269 45.8115 69.3149 44.6528 66.6406H64.5474Z" fill="#616161"/>
                <g opacity="0.78">
                  <path d="M59.8438 69.0625H45.9375C45.3815 68.1249 45.089 67.5815 44.62 66.5625L59.8438 66.5625L59.8438 69.0625Z" fill="#4A4A4A"/>
                </g>
                <path d="M57.6155 58.6195C57.6694 58.257 57.9806 57.9886 58.347 57.9886L67.1931 57.9886C67.8229 57.9886 68.1644 58.7257 67.7573 59.2062L57.0319 71.8637C56.5509 72.4314 55.627 72.0131 55.7363 71.277L57.6155 58.6195Z" fill="#F0F0F0"/>
                <path d="M61.5173 62.0978C61.4634 62.4603 61.1523 62.7287 60.7858 62.7287L51.9397 62.7286C51.3099 62.7286 50.9684 61.9916 51.3756 61.5111L62.1009 48.8536C62.5819 48.2859 63.5058 48.7042 63.3965 49.4403L61.5173 62.0978Z" fill="#F0F0F0"/>
                <path d="M61.5317 62.0767C61.4778 62.439 61.1666 62.7075 60.8003 62.7075H57.019L57.6294 58.5981C57.6834 58.2358 57.9945 57.9673 58.3608 57.9673H62.1421L61.5317 62.0767Z" fill="#B2B2B2"/>
              </svg>
            </div>
            {/* After-live content */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#212121", lineHeight: 1.2 }}>{appState === "waitlist_not_open" ? "Introduction to HTML" : "Introduction to HTML content tags"}</p>
                <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 400, color: "#616161", lineHeight: 1.5, whiteSpace: "nowrap" }}>Live Class • 10 PM • 03 May</p>
              </div>
              <p onClick={onJoinWaitlist} style={{ margin: 0, fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 700, color: "#004b8c", letterSpacing: "0.5px", cursor: "pointer" }}>Join the waitlist</p>
            </div>
          </>
        ) : (
          <>
            <div className="content-stretch flex h-[120px] items-start relative shrink-0" data-name="Card Image">
              <div className="relative shrink-0 size-[80px]" data-name="Illustration wrapper">
                <div className="absolute inset-0 overflow-clip" data-name="Illustration">
                  <div className="absolute inset-[83.2%_48.93%_8.3%_16.6%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.5781 6.79688">
                      <path d={svgPaths.p901f780} fill="var(--fill-0, #949494)" id="Rectangle 2041" />
                    </svg>
                  </div>
                  <div className="absolute bg-[#949494] inset-[8.2%_16.8%_83.4%_16.6%] rounded-[2.016px]" />
                  <div className="absolute inset-[54.1%_4.1%_4.1%_54.1%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.4375 33.4375">
                      <circle cx="16.7188" cy="16.7188" fill="var(--fill-0, #949494)" id="Ellipse 2163" r="16.7188" />
                    </svg>
                  </div>
                  <div className="absolute bg-[#616161] bottom-[83.4%] left-1/4 right-1/4 rounded-[4px] top-[13.48%]" />
                  <div className="absolute bottom-[13.67%] left-1/4 right-[51.84%] top-[83.2%]">
                    <div className="absolute inset-[0_2.75%_0_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0196 2.5">
                        <path d={svgPaths.p1ebb00} fill="var(--fill-0, #616161)" id="Rectangle 2043" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[54.91%_25.17%_16.7%_54.1%]" data-name="Intersect">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.583 22.7158">
                      <path d={svgPaths.pbe54880} fill="var(--fill-0, #616161)" id="Intersect" />
                    </svg>
                  </div>
                  <div className="absolute inset-[16.6%_18.55%_16.8%_23.83%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.0938 53.2812">
                      <path d={svgPaths.p1439b000} fill="var(--fill-0, #949494)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[83.3%_16.8%_8.3%_55.82%]" data-name="Intersect">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9102 6.71875">
                      <path d={svgPaths.p26399400} fill="var(--fill-0, #616161)" id="Intersect" />
                    </svg>
                  </div>
                  <div className="absolute flex inset-[83.2%_25.2%_13.67%_55.78%] items-center justify-center" style={{ containerType: "size" } as React.CSSProperties & { containerType: string }}>
                    <div className="flex-none h-[99.9999cqh] rotate-180 w-[100cqw]">
                      <CourseIllustrationGroup1 />
                    </div>
                  </div>
                  <CourseIllustrationGroup2 />
                </div>
              </div>
            </div>
            <LiveClassCardContent onJoinWaitlist={onJoinWaitlist} onLearnCTA={onLearnCTA} waitlistJoined={waitlistJoined} />
          </>
        )}
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-[328px]" data-name="Carousel Dots">
        <CarouselDotInactive />
        <CarouselDotInactive />
        <CarouselDotInactive />
        <CarouselDotActive />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Course Navigation (Tabs + Week Chips + Quick Filter)
// ─────────────────────────────────────────────

function TabBar() {
  return (
    <div className="relative shrink-0 w-[360px]" data-name="Tabs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <div className="bg-white flex-[1_0_0] h-[45px] min-w-[120px] relative" data-name="Tab - Content (Active)">
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] p-[8px] relative size-full">
              <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] min-w-px not-italic relative text-[#212121] text-[14px] text-center tracking-[0.25px]">Content</p>
            </div>
          </div>
        </div>
        <div className="bg-white flex-[1_0_0] h-[45px] min-w-[120px] relative" data-name="Tab - Course Info (Inactive)">
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] p-[8px] relative size-full">
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.2] min-w-px not-italic relative text-[#757575] text-[14px] text-center tracking-[0.25px]">Course Info</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModuleDropdownIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Expand more icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_13134)" id="expand more black 1">
          <g id="Vector" opacity="0.87" />
          <path d={svgPaths.p3775f000} fill="var(--fill-0, #212121)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_13134">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ModuleDropdown() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Module Dropdown">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[12px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[0.25px] whitespace-nowrap">
            <p className="leading-[1.2]">Module 1</p>
          </div>
          <ModuleDropdownIcon />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function ModuleSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Module Section">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <ModuleDropdown />
      </div>
    </div>
  );
}

function TabsWithIndicator() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Tabs With Indicator">
      <div className="bg-white content-stretch flex flex-col items-start justify-end pb-px relative shrink-0" data-name="Secondary Tab">
        <div aria-hidden="true" className="absolute border-[#f0f0f0] border-b border-solid inset-0 pointer-events-none" />
        <TabBar />
        <div className="bg-[#0089ff] h-[2px] shrink-0 w-[180px]" data-name="Tab Indicator" />
      </div>
      <ModuleSection />
    </div>
  );
}

function WeekChips() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[360px]" data-name="Week Chips">
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', overflowX: 'auto', width: '100%', paddingLeft: 16, scrollbarWidth: 'none' }}>
        <div className="h-[32px] shrink-0" style={{ flexShrink: 0 }}>
          <Chips />
        </div>
        {["Week 2", "Week 3", "Week 4"].map((week) => (
          <div key={week} className="relative" style={{ backgroundColor: 'white', display: 'flex', height: 32, alignItems: 'center', justifyContent: 'center', padding: '8px 16px', borderRadius: 8, border: '1px solid #f0f0f0', flexShrink: 0, whiteSpace: 'nowrap' }}>
            <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.2] min-w-px not-italic relative text-[#212121] text-[12px] text-center tracking-[0.25px]" style={{ whiteSpace: 'nowrap' }}>{week}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuickFilter() {
  const filters = ["Videos", "Recorded Live", "Assignment", "Study Cards", "PDF Notes"];
  return (
    <div className="bg-[#f0f0f0] relative shrink-0 w-[360px]" data-name="Quick Filter">
      <div className="content-stretch flex gap-[8px] items-center overflow-x-auto overflow-y-clip pl-[16px] py-[12px] relative size-full">
        {filters.map((filter) => (
          <div key={filter} className="bg-white content-stretch flex h-[32px] items-center justify-center min-w-[80px] px-[16px] py-[8px] relative rounded-[8px] shrink-0">
            <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative text-[#212121] text-[12px] text-center tracking-[0.25px] whitespace-nowrap">{filter}</p>
          </div>
        ))}
        <div className="bg-[#f0f0f0] h-[24px] shrink-0 w-[8px]" data-name="Spacer" />
      </div>
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CourseNavigation() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Course Navigation">
      <TabsWithIndicator />
      <WeekChips />
      <QuickFilter />
    </div>
  );
}

// ─────────────────────────────────────────────
// Content List Item Thumbnails
// ─────────────────────────────────────────────

function VideoThumbnailWithPlay() {
  return (
    <div className="h-[58px] relative rounded-[4px] shrink-0 w-[100px]" data-name="Video Thumbnail">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[58px] left-0 top-0 w-[100px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVideoThumbnail} />
          <div style={{ position: 'absolute', bottom: '8px', left: '4px', backgroundColor: '#00805c', display: 'inline-flex', alignItems: 'center', padding: '2px 4px', borderRadius: '2px' }}>
            <p style={{ fontSize: '8px', fontWeight: 700, color: '#f0f0f0', letterSpacing: '1px', textTransform: 'uppercase', lineHeight: 1, margin: 0 }}>FREE</p>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[40px] top-1/2">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <g id="playIcon">
              <path d={svgPaths.p23ba300} fill="var(--fill-0, black)" fillOpacity="0.8" id="Vector" />
              <path d={svgPaths.p38258100} fill="var(--fill-0, white)" id="Vector_2" />
            </g>
          </svg>
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.4)] h-[4px] left-0 top-[54px] w-[99.429px]" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}

function StudyCardThumbnail() {
  return (
    <div className="h-[58px] overflow-clip relative rounded-[4px] shrink-0 w-[100px]" data-name="Study Card Thumbnail">
      <div className="absolute bg-[#f2ecf5] h-[58px] left-0 rounded-[4px] top-0 w-[100px]">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[15.52%_30%] overflow-clip">
            <div className="absolute contents h-[30px] left-[3.36px] top-[5px] w-[33.594px]">
              <div className="absolute flex h-[21.406px] items-center justify-center left-[3.36px] top-[9.53px] w-[8.75px]">
                <div className="flex-none rotate-90">
                  <div className="bg-[#c4a6d0] h-[8.75px] rounded-[3.125px] w-[21.406px]" />
                </div>
              </div>
              <div className="absolute flex h-[21.406px] items-center justify-center left-[27.97px] top-[9.61px] w-[8.984px]">
                <div className="flex-none rotate-90">
                  <div className="bg-[#c4a6d0] h-[8.984px] rounded-[3.125px] w-[21.406px]" />
                </div>
              </div>
              <div className="absolute flex h-[30px] items-center justify-center left-[9.14px] top-[5px] w-[21.797px]">
                <div className="flex-none rotate-90">
                  <div className="bg-[#9965ad] h-[21.797px] rounded-[3.125px] w-[30px]" />
                </div>
              </div>
            </div>
            <div className="absolute bg-[#74388a] h-[21.406px] left-[9.14px] rounded-br-[3.125px] rounded-tr-[3.125px] top-[9.53px] w-[2.969px]" />
            <div className="absolute flex h-[21.406px] items-center justify-center left-[27.97px] top-[9.61px] w-[2.969px]">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="bg-[#74388a] h-[21.406px] rounded-br-[3.125px] rounded-tr-[3.125px] w-[2.969px]" />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function QuizThumbnail() {
  return (
    <div className="h-[58px] overflow-clip relative rounded-[4px] shrink-0 w-[100px]" data-name="Quiz Thumbnail">
      <div className="absolute bg-[#fff6e6] h-[58px] left-0 rounded-[4px] top-0 w-[100px]">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[15.52%_30%] overflow-clip">
            <div className="absolute bg-[#ffa000] h-[30.781px] left-[6.72px] rounded-[3.125px] top-[5.86px] w-[26.563px]" />
            <div className="absolute bg-[#f99091] h-[5px] left-[14.14px] rounded-[1.25px] top-[3.36px] w-[11.719px]" />
            <div className="absolute content-stretch flex flex-col gap-[3.75px] items-start leading-[0] left-[11.8px] top-[11.88px] w-[17.188px]">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                  <div className="bg-[#ffd38a] col-1 h-[1.875px] ml-0 mt-0 rounded-[1.25px] row-1 w-[14.063px]" />
                  <div className="bg-[#ffd38a] col-1 ml-[15.31px] mt-0 rounded-[1.25px] row-1 size-[1.875px]" />
                </div>
              ))}
            </div>
            <div className="absolute bg-[#f65a5b] h-[2.5px] left-[14.14px] rounded-bl-[1.25px] rounded-br-[1.25px] top-[5.86px] w-[11.719px]" />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function RevisionQuizThumbnail() {
  return (
    <div className="h-[58px] overflow-clip relative rounded-[4px] shrink-0 w-[100px]" data-name="Revision Quiz Thumbnail">
      <div className="absolute bg-[#fff6e6] h-[58px] left-0 rounded-[4px] top-0 w-[100px]">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[15.52%_30%]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTestPlatform1} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function PdfThumbnail() {
  return (
    <div className="h-[58px] overflow-clip relative rounded-[4px] shrink-0 w-[100px]" data-name="PDF Thumbnail">
      <div className="absolute bg-[#f9f2f0] h-[58px] left-0 rounded-[4px] top-0 w-[100px]">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="-translate-y-1/2 absolute aspect-[512/512] left-[30%] overflow-clip right-[30%] top-1/2">
            <div className="absolute contents left-[6.64px] top-[5px]">
              <div className="absolute bg-[#be7967] h-[31.641px] left-[6.64px] rounded-[3.125px] top-[5px] w-[26.641px]" />
              <div className="absolute contents left-[15.78px] top-[19.84px]">
                <div className="absolute h-[10px] left-[15.78px] top-[19.84px] w-[17.5px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 10">
                    <path d={svgPaths.p38a57d80} fill="var(--fill-0, #E05253)" id="Rectangle 1991" />
                  </svg>
                </div>
                <div className="absolute h-[10px] left-[33.28px] top-[19.84px] w-[2.5px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 10">
                    <path d={svgPaths.p284a9c80} fill="var(--fill-0, #F87B7C)" id="Rectangle 1992" />
                  </svg>
                </div>
              </div>
              <div className="absolute left-[27.2px] size-[6.076px] top-[5px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.07639 6.07639">
                  <path d={svgPaths.p29e6ba00} fill="var(--fill-0, #D3A599)" id="Vector 41" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function RecordedLiveThumbnail({ disabled = false }: { disabled?: boolean }) {
  return (
    <div className={`h-[58px] relative rounded-[4px] shrink-0 w-[100px] ${disabled ? "bg-[#f6f6f6]" : "bg-[#e6f2ef]"}`} data-name="Recorded Live Thumbnail">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[40px] top-1/2">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <g id="Recorded live class">
              <circle cx="30" cy="30" fill={disabled ? "var(--fill-0, #CFCFCF)" : "var(--fill-0, #FFB333)"} id="Ellipse 2163" r="8.35938" />
              <path d={svgPaths.p835e480} fill={disabled ? "var(--fill-0, #CFCFCF)" : "var(--fill-0, #00805C)"} id="Vector" />
              <path d={svgPaths.p1a0fe900} fill={disabled ? "var(--fill-0, #B2B2B2)" : "var(--fill-0, #B57200)"} id="Intersect" />
              <path d={svgPaths.p28ff9f80} fill={disabled ? "var(--fill-0, #FAFAFA)" : "var(--fill-0, white)"} id="Polygon 2" />
            </g>
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}

function UpcomingLiveThumbnail() {
  return (
    <div className="bg-[#f6f6f6] h-[58px] relative rounded-[4px] shrink-0 w-[100px]" data-name="Upcoming Live Thumbnail">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[40px] top-1/2">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <g id="Upcoming live">
              <path d={svgPaths.p1b57cf00} fill="var(--fill-0, #949494)" id="Rectangle 2041" />
              <rect fill="var(--fill-0, #949494)" height="3.35938" id="Rectangle 2044" rx="1.67969" width="26.6406" x="6.64062" y="3.28125" />
              <circle cx="30" cy="30" fill="var(--fill-0, #949494)" id="Ellipse 2163" r="8.35938" />
              <path d={svgPaths.p330f5b00} fill="var(--fill-0, #616161)" id="Rectangle 2042" />
              <path d={svgPaths.p217db900} fill="var(--fill-0, #616161)" id="Rectangle 2043" />
              <path d={svgPaths.p11273000} fill="var(--fill-0, #616161)" id="Intersect" />
              <path d={svgPaths.p1ebd9900} fill="var(--fill-0, #949494)" id="Vector" />
              <path d={svgPaths.p25edda80} fill="var(--fill-0, #616161)" id="Intersect_2" />
              <g id="Group 3233" opacity="0.78">
                <path d={svgPaths.p1bd7f580} fill="var(--fill-0, #4A4A4A)" id="Rectangle 2046" />
              </g>
              <g id="Group 3234">
                <g id="Group 3230">
                  <path d={svgPaths.p34158b00} fill="var(--fill-0, #F0F0F0)" id="Polygon 4" />
                  <path d={svgPaths.p52fe180} fill="var(--fill-0, #F0F0F0)" id="Polygon 5" />
                </g>
                <path d={svgPaths.p37e7c1f1} fill="var(--fill-0, #B2B2B2)" id="Intersect_3" />
              </g>
            </g>
          </svg>
        </div>
        <div style={{ position: 'absolute', bottom: '4px', right: '4px', backgroundColor: 'rgba(0,0,0,0.8)', display: 'inline-flex', alignItems: 'center', padding: '2px 4px', borderRadius: '2px' }}>
  <p style={{ fontSize: '8px', fontWeight: 700, color: 'white', letterSpacing: '1px', textTransform: 'uppercase', lineHeight: 1, margin: 0 }}>UPCOMING</p>
</div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}

function WaitlistNotOpenThumbnail() {
  return (
    <div className="bg-[#f6f6f6] h-[58px] relative rounded-[4px] shrink-0 w-[100px]" data-name="Waitlist Not Open Thumbnail">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[40px] top-1/2">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <g id="Live class template">
              <rect fill="var(--fill-0, #949494)" height="22.7344" id="Rectangle 2038" rx="3.125" width="22.7344" x="12.4078" y="4.85722" />
              <path d={svgPaths.p3dc36780} fill="var(--fill-0, #757575)" id="Intersect" />
              <g id="Group 3235">
                <g id="Group 3230">
                  <path d={svgPaths.p156fa480} fill="var(--fill-0, #FAFAFA)" id="Polygon 4" />
                  <path d={svgPaths.p18882840} fill="var(--fill-0, #FAFAFA)" id="Polygon 5" />
                </g>
                <path d={svgPaths.p35800980} fill="var(--fill-0, #757575)" id="Intersect_2" />
              </g>
              <path d={svgPaths.pb553840} fill="var(--fill-0, #757575)" id="Subtract" />
            </g>
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}

function AssignmentThumbnail() {
  return (
    <div className="bg-[#e6f3ff] h-[58px] relative rounded-[4px] shrink-0 w-[100px]" data-name="Assignment Thumbnail">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[15.52%_30%] overflow-clip">
          <div className="absolute bg-[#33a1ff] h-[31.641px] left-[6.64px] rounded-[3.125px] top-[4.92px] w-[26.719px]" />
          <div className="absolute left-[21.54px] size-[13.281px] top-[24.84px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2812 13.2812">
              <circle cx="6.64062" cy="6.64062" fill="var(--fill-0, #FFA000)" id="Ellipse 369" r="6.64062" />
            </svg>
          </div>
          <div className="absolute h-[10.8px] left-[23.91px] top-[27.33px] w-[10.917px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.917 10.7998">
              <path d={svgPaths.p1241fd00} fill="var(--fill-0, #FFD428)" id="Subtract" />
            </svg>
          </div>
          {[10.31, 15.31, 20.31, 25.31].map((top, i) => (
            <div key={i} className="absolute bg-[#8ac9ff] h-[1.875px] left-[12.97px] rounded-[1.25px]" style={{ top: `${top}px`, width: i === 3 ? "8.438px" : "14.063px" }} />
          ))}
          <div className="absolute h-[8.008px] left-[27.3px] top-[27.07px] w-[3.203px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.20314 8.00782">
              <path d={svgPaths.p1623500} fill="var(--fill-0, white)" id="Vector 47 (Stroke)" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}

// ─────────────────────────────────────────────
// Content List Item Right-Side Content
// ─────────────────────────────────────────────

function ItemTitleMeta({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative">
      <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#212121] text-[14px] text-ellipsis tracking-[0.25px]">
            <p className="leading-[1.2]">{title}</p>
          </div>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#616161] text-[12px] tracking-[0.25px] w-full whitespace-pre-wrap" style={{ fontSize: 12, fontWeight: 400, color: '#616161' }}>{meta}</p>
      </div>
    </div>
  );
}

function CompletedBadge() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Completed">
      <svg className="shrink-0" fill="none" height="16" viewBox="0 0 16 16" width="16">
        <circle cx="8" cy="8" fill="#00805C" r="8" />
        <path d={svgPaths.p2eeea000} fill="white" />
      </svg>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[#00805c] text-[12px] tracking-[0.25px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function StudyCardMeta({ title }: { title: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative">
      <div className="content-stretch flex items-center relative shrink-0 w-full">
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#212121] text-[14px] text-ellipsis tracking-[0.25px]">
          <p className="leading-[1.2]">{title}</p>
        </div>
      </div>
      <CompletedBadge />
    </div>
  );
}

function JoinWaitlistMeta({ title, meta, onJoinWaitlist, onLearnCTA, waitlistJoined, lessonsRemaining }: {
  title: string; meta: string; onJoinWaitlist?: () => void; onLearnCTA?: () => void; waitlistJoined?: boolean; lessonsRemaining?: number;
}) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[0.25px] w-full">{title}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#616161] text-[12px] tracking-[0.25px] w-full" style={{ fontSize: 12, fontWeight: 400, color: '#616161' }}>{meta}</p>
      </div>
      {waitlistJoined ? (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4, cursor: 'pointer' }} onClick={onLearnCTA}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <path d="M4.49996 14.6667C3.99996 14.6667 3.5694 14.4972 3.20829 14.1583C2.84718 13.8194 2.66663 13.4 2.66663 12.9V3.6C2.66663 3.17778 2.79718 2.8 3.05829 2.46667C3.3194 2.13333 3.66107 1.92222 4.08329 1.83333L9.08329 0.849999C9.4944 0.76111 9.86107 0.849999 10.1833 1.11667C10.5055 1.38333 10.6666 1.72778 10.6666 2.15V10.1C10.6666 10.4222 10.5666 10.7083 10.3666 10.9583C10.1666 11.2083 9.91107 11.3611 9.59996 11.4167L4.34996 12.4667C4.24996 12.4889 4.16663 12.5417 4.09996 12.625C4.03329 12.7083 3.99996 12.8 3.99996 12.9C3.99996 13.0222 4.04996 13.125 4.14996 13.2083C4.24996 13.2917 4.36663 13.3333 4.49996 13.3333H12V3.33333C12 3.14444 12.0638 2.98611 12.1916 2.85833C12.3194 2.73055 12.4777 2.66667 12.6666 2.66667C12.8555 2.66667 13.0138 2.73055 13.1416 2.85833C13.2694 2.98611 13.3333 3.14444 13.3333 3.33333V13.3333C13.3333 13.7 13.2027 14.0139 12.9416 14.275C12.6805 14.5361 12.3666 14.6667 12 14.6667H4.49996ZM5.46663 10.9C5.62218 10.8667 5.74996 10.7889 5.84996 10.6667C5.94996 10.5444 5.99996 10.4056 5.99996 10.25V3.63333C5.99996 3.42222 5.9194 3.25 5.75829 3.11667C5.59718 2.98333 5.41107 2.93889 5.19996 2.98333C5.0444 3.01667 4.91663 3.09444 4.81663 3.21667C4.71663 3.33889 4.66663 3.47778 4.66663 3.63333V10.25C4.66663 10.4611 4.74718 10.6333 4.90829 10.7667C5.0694 10.9 5.25552 10.9444 5.46663 10.9Z" fill="#00805C"/>
          </svg>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#00805c', lineHeight: 1.2, whiteSpace: 'nowrap', margin: 0 }}>3 more lessons to learn</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4, cursor: 'pointer' }} onClick={onJoinWaitlist}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <path d="M13.3335 2.88C13.7002 2.88 14.0138 3.00559 14.2749 3.25625C14.536 3.50692 14.6668 3.808 14.6668 4.16V6.32C14.6668 6.43724 14.6279 6.53846 14.5503 6.62375C14.4725 6.70908 14.3724 6.76242 14.2502 6.78375C13.9835 6.86909 13.7642 7.02413 13.592 7.24813C13.4197 7.47212 13.3335 7.72268 13.3335 8C13.3335 8.27733 13.4197 8.52788 13.592 8.75188C13.7642 8.97588 13.9835 9.13092 14.2502 9.21625C14.3724 9.23759 14.4725 9.29093 14.5503 9.37625C14.6279 9.46155 14.6668 9.56276 14.6668 9.68V11.84C14.6668 12.192 14.536 12.4931 14.2749 12.7438C14.0138 12.9944 13.7002 13.12 13.3335 13.12H2.66683C2.30016 13.12 1.98653 12.9944 1.72542 12.7438C1.46431 12.4931 1.3335 12.192 1.3335 11.84V9.68C1.3335 9.56276 1.37238 9.46155 1.45003 9.37625C1.5278 9.29093 1.62796 9.23759 1.75016 9.21625C2.01683 9.13092 2.23614 8.97588 2.40837 8.75188C2.58058 8.52788 2.66683 8.27733 2.66683 8C2.66683 7.72268 2.58058 7.47212 2.40837 7.24813C2.23614 7.02413 2.01683 6.86909 1.75016 6.78375C1.62796 6.76242 1.5278 6.70908 1.45003 6.62375C1.37238 6.53846 1.3335 6.43724 1.3335 6.32V4.16C1.3335 3.808 1.46431 3.50692 1.72542 3.25625C1.98653 3.00559 2.30016 2.88 2.66683 2.88H13.3335ZM8.56266 5.38688C8.48396 5.36022 8.40756 5.35869 8.3335 5.38313C8.25951 5.40755 8.19943 5.45101 8.15316 5.51313L6.07633 8.38C6.01162 8.46885 6.0062 8.56138 6.05941 8.65688C6.1126 8.7522 6.19464 8.79991 6.3055 8.8H7.16683L6.94482 10.2731C6.93557 10.3486 6.95048 10.4187 6.98975 10.4831C7.0291 10.5476 7.08371 10.5958 7.15316 10.6269C7.22243 10.6579 7.29412 10.6645 7.368 10.6469C7.44206 10.6291 7.50458 10.5909 7.5555 10.5331L9.84066 7.90688C9.91936 7.81799 9.93419 7.72223 9.88558 7.62C9.83698 7.51783 9.75262 7.46691 9.63232 7.46688H8.5555L8.77816 5.74C8.78741 5.66453 8.77344 5.59348 8.73649 5.52688C8.69945 5.46021 8.64137 5.41355 8.56266 5.38688Z" fill="#00805C"/>
          </svg>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#00805c', lineHeight: 1.2, whiteSpace: 'nowrap', margin: 0 }}>Join the waitlist</p>
        </div>
      )}
    </div>
  );
}

function WaitlistNotOpenMeta({ title }: { title: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[0.25px] w-full">{title}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#616161] text-[12px] tracking-[0.25px] w-full" style={{ fontSize: 12, fontWeight: 400, color: '#616161' }}>Waitlist not yet open</p>
      </div>
      <p style={{ fontSize: 12, fontWeight: 700, color: '#00805c', lineHeight: 1.2, whiteSpace: 'nowrap', margin: 0 }}>View recorded session</p>
    </div>
  );
}

function AssignmentLockedMeta({ title }: { title: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative self-stretch">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px pt-[2px] relative">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#212121] text-[14px] tracking-[0.25px] w-full">{title}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] min-w-px not-italic relative text-[#616161] text-[12px] tracking-[0.25px]" style={{ fontSize: 12, fontWeight: 400, color: '#616161' }}>Assignment</p>
      </div>
      <div className="relative shrink-0 size-[32px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Content Locked">
            <path d={svgPaths.p18c7c100} fill="var(--fill-0, #F6F6F6)" id="Vector" />
            <path d={svgPaths.p224b1980} fill="var(--fill-0, #757575)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Content List Row (reusable wrapper)
// ─────────────────────────────────────────────

function ContentListRow({ thumbnail, children }: { thumbnail: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="content-stretch flex gap-[12px] items-start py-[4px] relative shrink-0 w-full" data-name="List Row">
      {thumbnail}
      <div className="flex-[1_0_0] min-w-px relative self-stretch">
        <div className="content-stretch flex gap-[12px] items-start pt-[2px] relative size-full">
          {children}
        </div>
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────
// Content List (all items)
// ─────────────────────────────────────────────

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1 w-full">
        <div className="col-1 h-0 ml-0 mt-[8px] relative row-1 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
              <line stroke="var(--stroke-0, #F0F0F0)" x2="360" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="bg-white col-1 content-stretch flex items-start ml-[25.42%] mt-0 px-[16px] relative row-1 w-[49.16%]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#616161] text-[12px] tracking-[0.25px] whitespace-nowrap">{label}</p>
        </div>
      </div>
    </div>
  );
}

function ContentList({ onJoinWaitlist, onLearnCTA, onLiveClassTap, onViewRecording, firstRowRef, waitlistJoined, lessonsRemaining, appState }: {
  onJoinWaitlist?: () => void; onLearnCTA?: () => void; onLiveClassTap?: () => void; onViewRecording?: () => void; firstRowRef?: React.RefObject<HTMLDivElement | null>; waitlistJoined?: boolean; lessonsRemaining?: number; appState?: string;
}) {
  const localRef = React.useRef<HTMLDivElement>(null);
  const rowRef = firstRowRef ?? localRef;
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[360px]" data-name="Content List">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <SectionDivider label="Web Design Essentials-1" />
        <div className="content-stretch flex flex-col gap-[8px] items-start pl-[16px] pr-[12px] relative shrink-0 w-full">

          {/* Course Introduction video */}
          <div ref={rowRef}>
            <ContentListRow thumbnail={<VideoThumbnailWithPlay />}>
              <ItemTitleMeta title="Course Introduction" meta="Video  •  09:16 mins" />
            </ContentListRow>
          </div>

          {/* Welcome to Computer Programming video */}
          <ContentListRow thumbnail={<VideoThumbnailWithPlay />}>
            <ItemTitleMeta title="Welcome to Computer Programming" meta="Video  •  19:16 mins" />
          </ContentListRow>

          {/* Software Development Process video */}
          <ContentListRow thumbnail={<VideoThumbnailWithPlay />}>
            <ItemTitleMeta title="Software Development Process" meta="Video  •  13:32 mins" />
          </ContentListRow>

          {/* HTML Tags study card (completed) */}
          <ContentListRow thumbnail={<StudyCardThumbnail />}>
            <StudyCardMeta title="HTML Tags" />
          </ContentListRow>

          {/* HTML Quiz */}
          <ContentListRow thumbnail={<QuizThumbnail />}>
            <ItemTitleMeta title="HTML Quiz" meta="Quiz  •  20 questions" />
          </ContentListRow>

          {/* Revision Quiz */}
          <ContentListRow thumbnail={<RevisionQuizThumbnail />}>
            <ItemTitleMeta title="Revision Quiz" meta="Quiz • 30 questions • 3 attempts" />
          </ContentListRow>

          {/* HTML Tags PDF */}
          <ContentListRow thumbnail={<PdfThumbnail />}>
            <ItemTitleMeta title="HTML Tags.pdf" meta="PDF Document" />
          </ContentListRow>

          {/* Recorded Live 1 (available) */}
          <ContentListRow thumbnail={<RecordedLiveThumbnail disabled={false} />}>
            <ItemTitleMeta title="Introduction to Entri Elevate 1" meta="Recorded Live • 57:15 mins" />
          </ContentListRow>

          {/* Recorded Live 2 (not yet available) */}
          <ContentListRow thumbnail={<RecordedLiveThumbnail disabled={true} />}>
            <ItemTitleMeta title="Introduction to Entri Elevate 2" meta="Recording available in 24 hours" />
          </ContentListRow>

          {/* Live Class row — thumbnail + meta change for ongoing states */}
          {(appState === "ongoing_live" || appState === "ongoing_live_no_rsvp") ? (
            <ContentListRow thumbnail={
              <div style={{ width: 100, height: 58, borderRadius: 4, flexShrink: 0, position: "relative", overflow: "hidden" }}>
                <svg width="102" height="60" viewBox="0 0 102 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
                  <g clipPath="url(#lcThumbClip)">
                    <rect x="1" y="1" width="100" height="58" rx="4" fill="#004633"/>
                    <g>
                      <path d="M97 1H5C2.79086 1 1 2.79086 1 5V55C1 57.2091 2.79086 59 5 59H97C99.2091 59 101 57.2091 101 55V5C101 2.79086 99.2091 1 97 1Z" fill="#004633"/>
                      <path d="M-43.3485 45.4229L-51.4521 28.6609L-47.9082 26.9475L-41.2171 40.7877L-34.031 37.3136L-32.6184 40.2354L-43.3485 45.4229Z" fill="#003B2B"/>
                      <path d="M-34.8313 20.6254L-26.7276 37.3875L-30.2715 39.1008L-38.3752 22.3388L-34.8313 20.6254Z" fill="#003B2B"/>
                      <path d="M-28.8872 17.7517L-18.6789 28.5283L-18.5234 28.4531L-20.6208 13.7553L-16.6921 11.856L-14.3668 31.4116L-18.9338 33.6195L-32.824 19.655L-28.8872 17.7517Z" fill="#003B2B"/>
                      <path d="M-6.57095 27.6427L-14.6746 10.8806L-3.3799 5.42011L-1.96729 8.34201L-9.71811 12.0892L-7.78715 16.0833L-0.617438 12.617L0.795169 15.5389L-6.37454 19.0052L-4.43962 23.0074L3.34393 19.2444L4.75654 22.1663L-6.57095 27.6427Z" fill="#003B2B"/>
                      <path d="M8.85155 19.8229L0.747848 3.06087L4.29178 1.34754L10.9829 15.1877L18.169 11.7136L19.5816 14.6355L8.85155 19.8229Z" fill="#003B2B"/>
                      <path d="M17.3687 -4.97457L25.4724 11.7875L21.9285 13.5008L13.8248 -3.26124L17.3687 -4.97457Z" fill="#003B2B"/>
                      <path d="M23.3128 -7.84826L33.5211 2.92832L33.6766 2.85314L31.5792 -11.8447L35.5079 -13.744L37.8332 5.81161L33.2662 8.01955L19.376 -5.94499L23.3128 -7.84826Z" fill="#003B2B"/>
                      <path d="M45.629 2.04268L37.5253 -14.7194L48.8201 -20.1799L50.2327 -17.258L42.4819 -13.5108L44.4128 -9.51673L51.5826 -12.983L52.9952 -10.0611L45.8255 -6.59483L47.7604 -2.59256L55.5439 -6.35555L56.9565 -3.43365L45.629 2.04268Z" fill="#003B2B"/>
                      <path d="M61.0515 -5.94152L52.9478 -22.7036L56.4918 -24.4169L63.1829 -10.5768L70.369 -14.0509L71.7816 -11.129L61.0515 -5.94152Z" fill="#003B2B"/>
                      <path d="M69.5687 -30.739L77.6724 -13.977L74.1285 -12.2636L66.0248 -29.0257L69.5687 -30.739Z" fill="#003B2B"/>
                      <path d="M75.5128 -33.6127L85.7211 -22.8361L85.8766 -22.9113L83.7792 -37.6092L87.7078 -39.5085L90.0332 -19.9528L85.4662 -17.7449L71.576 -31.7094L75.5128 -33.6127Z" fill="#003B2B"/>
                      <path d="M97.829 -23.7218L89.7253 -40.4838L101.02 -45.9443L102.433 -43.0224L94.6819 -39.2753L96.6128 -35.2812L103.783 -38.7474L105.195 -35.8255L98.0255 -32.3593L99.9604 -28.357L107.744 -32.12L109.157 -29.1981L97.829 -23.7218Z" fill="#003B2B"/>
                      <path d="M-33.3485 66.6229L-41.4521 49.8609L-37.9082 48.1475L-31.2171 61.9877L-24.031 58.5135L-22.6184 61.4354L-33.3485 66.6229Z" fill="#003B2B"/>
                      <path d="M-24.8313 41.8254L-16.7276 58.5875L-20.2715 60.3008L-28.3752 43.5388L-24.8313 41.8254Z" fill="#003B2B"/>
                      <path d="M-18.8872 38.9517L-8.67892 49.7283L-8.52341 49.6531L-10.6208 34.9553L-6.69215 33.056L-4.36678 52.6116L-8.93379 54.8195L-22.824 40.855L-18.8872 38.9517Z" fill="#003B2B"/>
                      <path d="M3.42905 48.8427L-4.67465 32.0806L6.6201 26.6201L8.03271 29.542L0.281894 33.2892L2.21285 37.2833L9.38256 33.817L10.7952 36.7389L3.62546 40.2052L5.56038 44.2074L13.3439 40.4444L14.7565 43.3663L3.42905 48.8427Z" fill="#003B2B"/>
                      <path d="M18.8515 41.0229L10.7478 24.2609L14.2918 22.5475L20.9829 36.3877L28.169 32.9136L29.5816 35.8355L18.8515 41.0229Z" fill="#003B2B"/>
                      <path d="M27.3687 16.2254L35.4724 32.9875L31.9285 34.7008L23.8248 17.9388L27.3687 16.2254Z" fill="#003B2B"/>
                      <path d="M33.3128 13.3517L43.5211 24.1283L43.6766 24.0531L41.5792 9.35528L45.5078 7.45598L47.8332 27.0116L43.2662 29.2195L29.376 15.255L33.3128 13.3517Z" fill="#003B2B"/>
                      <path d="M55.629 23.2427L47.5253 6.48061L58.8201 1.02011L60.2327 3.94201L52.4819 7.68918L54.4128 11.6833L61.5826 8.21703L62.9952 11.1389L55.8255 14.6052L57.7604 18.6074L65.5439 14.8444L66.9565 17.7663L55.629 23.2427Z" fill="#003B2B"/>
                      <path d="M71.0515 15.4229L62.9478 -1.33913L66.4918 -3.05246L73.1829 10.7877L80.3689 7.31355L81.7816 10.2355L71.0515 15.4229Z" fill="#003B2B"/>
                      <path d="M79.5687 -9.37457L87.6724 7.38749L84.1285 9.10082L76.0248 -7.66124L79.5687 -9.37457Z" fill="#003B2B"/>
                      <path d="M85.5128 -12.2483L95.7211 -1.47168L95.8766 -1.54686L93.7792 -16.2447L97.7078 -18.144L100.033 1.41161L95.4662 3.61955L81.576 -10.345L85.5128 -12.2483Z" fill="#003B2B"/>
                      <path d="M107.829 -2.35732L99.7253 -19.1194L111.02 -24.5799L112.433 -21.658L104.682 -17.9108L106.613 -13.9167L113.783 -17.383L115.195 -14.4611L108.025 -10.9948L109.96 -6.99256L117.744 -10.7556L119.157 -7.83365L107.829 -2.35732Z" fill="#003B2B"/>
                      <path d="M-23.3485 87.8229L-31.4521 71.0609L-27.9082 69.3475L-21.2171 83.1877L-14.031 79.7135L-12.6184 82.6354L-23.3485 87.8229Z" fill="#003B2B"/>
                      <path d="M-14.8313 63.0254L-6.72757 79.7875L-10.2715 81.5008L-18.3752 64.7387L-14.8313 63.0254Z" fill="#003B2B"/>
                      <path d="M-8.88721 60.1517L1.32108 70.9283L1.47659 70.8531L-0.620758 56.1553L3.30785 54.256L5.63322 73.8116L1.06621 76.0195L-12.824 62.055L-8.88721 60.1517Z" fill="#003B2B"/>
                      <path d="M13.429 70.0427L5.32535 53.2806L16.6201 47.8201L18.0327 50.742L10.2819 54.4892L12.2129 58.4833L19.3826 55.017L20.7952 57.9389L13.6255 61.4052L15.5604 65.4074L23.3439 61.6444L24.7565 64.5663L13.429 70.0427Z" fill="#003B2B"/>
                      <path d="M28.8515 62.2229L20.7478 45.4609L24.2918 43.7475L30.9829 57.5877L38.169 54.1135L39.5816 57.0354L28.8515 62.2229Z" fill="#003B2B"/>
                      <path d="M37.3687 37.4254L45.4724 54.1875L41.9285 55.9008L33.8248 39.1388L37.3687 37.4254Z" fill="#003B2B"/>
                      <path d="M43.3128 34.5517L53.5211 45.3283L53.6766 45.2531L51.5792 30.5553L55.5078 28.656L57.8332 48.2116L53.2662 50.4195L39.376 36.455L43.3128 34.5517Z" fill="#003B2B"/>
                      <path d="M65.629 44.4427L57.5253 27.6806L68.8201 22.2201L70.2327 25.142L62.4819 28.8892L64.4128 32.8833L71.5826 29.417L72.9952 32.3389L65.8255 35.8052L67.7604 39.8074L75.5439 36.0444L76.9565 38.9663L65.629 44.4427Z" fill="#003B2B"/>
                      <path d="M81.0515 36.6229L72.9478 19.8609L76.4918 18.1475L83.1829 31.9877L90.3689 28.5136L91.7816 31.4355L81.0515 36.6229Z" fill="#003B2B"/>
                      <path d="M89.5687 11.8254L97.6724 28.5875L94.1285 30.3008L86.0248 13.5388L89.5687 11.8254Z" fill="#003B2B"/>
                      <path d="M95.5128 8.95174L105.721 19.7283L105.877 19.6531L103.779 4.95528L107.708 3.05598L110.033 22.6116L105.466 24.8195L91.576 10.855L95.5128 8.95174Z" fill="#003B2B"/>
                      <path d="M117.829 18.8427L109.725 2.08061L121.02 -3.37989L122.433 -0.457989L114.682 3.28918L116.613 7.28326L123.783 3.81703L125.195 6.73894L118.025 10.2052L119.96 14.2074L127.744 10.4444L129.157 13.3663L117.829 18.8427Z" fill="#003B2B"/>
                      <path d="M-13.3485 109.223L-21.4522 92.4609L-17.9082 90.7475L-11.2171 104.588L-4.03105 101.114L-2.61844 104.035L-13.3485 109.223Z" fill="#003B2B"/>
                      <path d="M-4.83127 84.4254L3.27243 101.187L-0.271506 102.901L-8.3752 86.1387L-4.83127 84.4254Z" fill="#003B2B"/>
                      <path d="M1.1128 81.5517L11.3211 92.3283L11.4766 92.2531L9.37924 77.5553L13.3079 75.656L15.6332 95.2116L11.0662 97.4195L-2.824 83.455L1.1128 81.5517Z" fill="#003B2B"/>
                      <path d="M23.429 91.4427L15.3254 74.6806L26.6201 69.2201L28.0327 72.142L20.2819 75.8892L22.2128 79.8833L29.3826 76.417L30.7952 79.3389L23.6255 82.8052L25.5604 86.8074L33.3439 83.0444L34.7565 85.9663L23.429 91.4427Z" fill="#003B2B"/>
                      <path d="M38.8515 83.4229L30.7478 66.6609L34.2918 64.9475L40.9829 78.7877L48.169 75.3135L49.5816 78.2354L38.8515 83.4229Z" fill="#003B2B"/>
                      <path d="M47.3687 58.6254L55.4724 75.3875L51.9285 77.1008L43.8248 60.3387L47.3687 58.6254Z" fill="#003B2B"/>
                      <path d="M53.3128 55.7517L63.5211 66.5283L63.6766 66.4531L61.5792 51.7553L65.5078 49.856L67.8332 69.4116L63.2662 71.6195L49.376 57.655L53.3128 55.7517Z" fill="#003B2B"/>
                      <path d="M75.629 65.6427L67.5253 48.8806L78.8201 43.4201L80.2327 46.342L72.4819 50.0892L74.4128 54.0833L81.5826 50.617L82.9952 53.5389L75.8255 57.0052L77.7604 61.0074L85.5439 57.2444L86.9565 60.1663L75.629 65.6427Z" fill="#003B2B"/>
                      <path d="M91.0515 57.8229L82.9478 41.0609L86.4918 39.3475L93.1829 53.1877L100.369 49.7135L101.782 52.6354L91.0515 57.8229Z" fill="#003B2B"/>
                      <path d="M99.5687 33.0254L107.672 49.7875L104.128 51.5008L96.0248 34.7388L99.5687 33.0254Z" fill="#003B2B"/>
                      <path d="M105.513 30.1517L115.721 40.9283L115.877 40.8531L113.779 26.1553L117.708 24.256L120.033 43.8116L115.466 46.0195L101.576 32.055L105.513 30.1517Z" fill="#003B2B"/>
                      <path d="M127.829 40.0427L119.725 23.2806L131.02 17.8201L132.433 20.742L124.682 24.4892L126.613 28.4833L133.783 25.017L135.195 27.9389L128.025 31.4052L129.96 35.4074L137.744 31.6444L139.157 34.5663L127.829 40.0427Z" fill="#003B2B"/>
                      <rect x="36" y="15.0002" width="30" height="30" rx="3.125" fill="#00805C"/>
                      <path d="M49.0582 28.7874C49.1492 28.1746 49.6752 27.7209 50.2947 27.7209L57.2539 27.7209C58.3186 27.7209 58.8959 28.9668 58.2076 29.779L49.7699 39.7368C48.9568 40.6964 47.3951 39.9893 47.5798 38.7451L49.0582 28.7874Z" fill="#FFB333"/>
                      <path d="M52.974 31.2471C52.883 31.8598 52.357 32.3135 51.7376 32.3135L44.7783 32.3135C43.7137 32.3135 43.1364 31.0676 43.8246 30.2554L52.2623 20.2977C53.0755 19.338 54.6371 20.0451 54.4524 21.2893L52.974 31.2471Z" fill="#FFB333"/>
                      <path d="M52.9883 31.2267C52.8973 31.8393 52.3712 32.293 51.752 32.2931H48.5488L49.0723 28.7668C49.1632 28.1541 49.6892 27.7005 50.3086 27.7004H53.5117L52.9883 31.2267Z" fill="#B57200"/>
                    </g>
                    <rect x="0.5" y="0.5" width="101" height="59" rx="4.5" stroke="#F0F0F0"/>
                  </g>
                  <defs>
                    <clipPath id="lcThumbClip">
                      <rect x="1" y="1" width="100" height="58" rx="4" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <div style={{ position: "absolute", bottom: 4, right: 4, backgroundColor: "#af4041", borderRadius: 2, padding: "1px 3px", display: "flex", alignItems: "center", gap: 2 }}>
                  <div style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: "white" }} />
                  <span style={{ fontSize: 7, fontWeight: 700, color: "white", letterSpacing: 0.5, lineHeight: 1, textTransform: "uppercase" as const }}>LIVE</span>
                </div>
              </div>
            }>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1, cursor: "pointer" }} onClick={onLiveClassTap}>
                <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 14, color: "#212121", letterSpacing: "0.25px", lineHeight: 1.2 }}>Introduction to HTML tags</p>
                <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 12, color: "#616161", letterSpacing: "0.25px", lineHeight: 1.2 }}>Ongoing live class</p>
              </div>
            </ContentListRow>
          ) : appState === "after_live" ? (
            /* Past live row — ended class */
            <ContentListRow thumbnail={<WaitlistNotOpenThumbnail />}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 14, color: "#212121", letterSpacing: "0.25px", lineHeight: 1.2 }}>Introduction to Entri Elevate</p>
                <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 12, color: "#616161", letterSpacing: "0.25px", lineHeight: 1.2 }}>Waitlist not open yet</p>
                <p onClick={onViewRecording} style={{ margin: 0, fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 700, color: "#00805c", lineHeight: 1.2, cursor: "pointer" }}>View recorded session</p>
              </div>
            </ContentListRow>
          ) : appState === "waitlist_not_open" ? (
            /* LCT row 1 — first upcoming class */
            <ContentListRow thumbnail={<UpcomingLiveThumbnail />}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 14, color: "#212121", letterSpacing: "0.25px", lineHeight: 1.2 }}>Introduction to HTML</p>
                <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 12, color: "#616161", letterSpacing: "0.25px", lineHeight: 1.2 }}>Live Class • 10 PM • 30 Apr</p>
                <div onClick={onJoinWaitlist} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 4, cursor: "pointer" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <path d="M13.3335 2.88C13.7002 2.88 14.0138 3.00559 14.2749 3.25625C14.536 3.50692 14.6668 3.808 14.6668 4.16V6.32C14.6668 6.43724 14.6279 6.53846 14.5503 6.62375C14.4725 6.70908 14.3724 6.76242 14.2502 6.78375C13.9835 6.86909 13.7642 7.02413 13.592 7.24813C13.4197 7.47212 13.3335 7.72268 13.3335 8C13.3335 8.27733 13.4197 8.52788 13.592 8.75188C13.7642 8.97588 13.9835 9.13092 14.2502 9.21625C14.3724 9.23759 14.4725 9.29093 14.5503 9.37625C14.6279 9.46155 14.6668 9.56276 14.6668 9.68V11.84C14.6668 12.192 14.536 12.4931 14.2749 12.7438C14.0138 12.9944 13.7002 13.12 13.3335 13.12H2.66683C2.30016 13.12 1.98653 12.9944 1.72542 12.7438C1.46431 12.4931 1.3335 12.192 1.3335 11.84V9.68C1.3335 9.56276 1.37238 9.46155 1.45003 9.37625C1.5278 9.29093 1.62796 9.23759 1.75016 9.21625C2.01683 9.13092 2.23614 8.97588 2.40837 8.75188C2.58058 8.52788 2.66683 8.27733 2.66683 8C2.66683 7.72268 2.58058 7.47212 2.40837 7.24813C2.23614 7.02413 2.01683 6.86909 1.75016 6.78375C1.62796 6.76242 1.5278 6.70908 1.45003 6.62375C1.37238 6.53846 1.3335 6.43724 1.3335 6.32V4.16C1.3335 3.808 1.46431 3.50692 1.72542 3.25625C1.98653 3.00559 2.30016 2.88 2.66683 2.88H13.3335ZM8.56266 5.38688C8.48396 5.36022 8.40756 5.35869 8.3335 5.38313C8.25951 5.40755 8.19943 5.45101 8.15316 5.51313L6.07633 8.38C6.01162 8.46885 6.0062 8.56138 6.05941 8.65688C6.1126 8.7522 6.19464 8.79991 6.3055 8.8H7.16683L6.94482 10.2731C6.93557 10.3486 6.95048 10.4187 6.98975 10.4831C7.0291 10.5476 7.08371 10.5958 7.15316 10.6269C7.22243 10.6579 7.29412 10.6645 7.368 10.6469C7.44206 10.6291 7.50458 10.5909 7.5555 10.5331L9.84066 7.90688C9.91936 7.81799 9.93419 7.72223 9.88558 7.62C9.83698 7.51783 9.75262 7.46691 9.63232 7.46688H8.5555L8.77816 5.74C8.78741 5.66453 8.77344 5.59348 8.73649 5.52688C8.69945 5.46021 8.64137 5.41355 8.56266 5.38688Z" fill="#00805C"/>
                  </svg>
                  <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 700, color: "#00805c", lineHeight: 1.2, whiteSpace: "nowrap" }}>Join the waitlist</p>
                </div>
              </div>
            </ContentListRow>
          ) : (
            <ContentListRow thumbnail={<UpcomingLiveThumbnail />}>
              <JoinWaitlistMeta
              title="Introduction to HTML"
              meta="Live Class •  10 PM • 30 Apr"
              onJoinWaitlist={onJoinWaitlist}
              onLearnCTA={onLearnCTA}
              waitlistJoined={waitlistJoined}
              lessonsRemaining={lessonsRemaining} />
            </ContentListRow>
          )}

          {/* Upcoming live / Waitlist not yet open row */}
          {appState === "waitlist_not_open" ? (
            /* LCT row 2 — next upcoming class */
            <ContentListRow thumbnail={<WaitlistNotOpenThumbnail />}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 14, color: "#212121", letterSpacing: "0.25px", lineHeight: 1.2 }}>Introduction to HTML content tags</p>
                <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 12, color: "#616161", letterSpacing: "0.25px", lineHeight: 1.2 }}>Waitlist not open</p>
                <p onClick={onViewRecording} style={{ margin: 0, fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 700, color: "#00805c", lineHeight: 1.2, cursor: "pointer" }}>View recorded session</p>
              </div>
            </ContentListRow>
          ) : appState === "after_live" ? (
            /* Upcoming live class row — next session */
            <ContentListRow thumbnail={<UpcomingLiveThumbnail />}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 14, color: "#212121", letterSpacing: "0.25px", lineHeight: 1.2 }}>Introduction to HTML content tags</p>
                <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 12, color: "#616161", letterSpacing: "0.25px", lineHeight: 1.2 }}>Live Class • 10 PM • 03 May</p>
                <div onClick={onJoinWaitlist} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 4, cursor: "pointer" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <path d="M13.3335 2.88C13.7002 2.88 14.0138 3.00559 14.2749 3.25625C14.536 3.50692 14.6668 3.808 14.6668 4.16V6.32C14.6668 6.43724 14.6279 6.53846 14.5503 6.62375C14.4725 6.70908 14.3724 6.76242 14.2502 6.78375C13.9835 6.86909 13.7642 7.02413 13.592 7.24813C13.4197 7.47212 13.3335 7.72268 13.3335 8C13.3335 8.27733 13.4197 8.52788 13.592 8.75188C13.7642 8.97588 13.9835 9.13092 14.2502 9.21625C14.3724 9.23759 14.4725 9.29093 14.5503 9.37625C14.6279 9.46155 14.6668 9.56276 14.6668 9.68V11.84C14.6668 12.192 14.536 12.4931 14.2749 12.7438C14.0138 12.9944 13.7002 13.12 13.3335 13.12H2.66683C2.30016 13.12 1.98653 12.9944 1.72542 12.7438C1.46431 12.4931 1.3335 12.192 1.3335 11.84V9.68C1.3335 9.56276 1.37238 9.46155 1.45003 9.37625C1.5278 9.29093 1.62796 9.23759 1.75016 9.21625C2.01683 9.13092 2.23614 8.97588 2.40837 8.75188C2.58058 8.52788 2.66683 8.27733 2.66683 8C2.66683 7.72268 2.58058 7.47212 2.40837 7.24813C2.23614 7.02413 2.01683 6.86909 1.75016 6.78375C1.62796 6.76242 1.5278 6.70908 1.45003 6.62375C1.37238 6.53846 1.3335 6.43724 1.3335 6.32V4.16C1.3335 3.808 1.46431 3.50692 1.72542 3.25625C1.98653 3.00559 2.30016 2.88 2.66683 2.88H13.3335ZM8.56266 5.38688C8.48396 5.36022 8.40756 5.35869 8.3335 5.38313C8.25951 5.40755 8.19943 5.45101 8.15316 5.51313L6.07633 8.38C6.01162 8.46885 6.0062 8.56138 6.05941 8.65688C6.1126 8.7522 6.19464 8.79991 6.3055 8.8H7.16683L6.94482 10.2731C6.93557 10.3486 6.95048 10.4187 6.98975 10.4831C7.0291 10.5476 7.08371 10.5958 7.15316 10.6269C7.22243 10.6579 7.29412 10.6645 7.368 10.6469C7.44206 10.6291 7.50458 10.5909 7.5555 10.5331L9.84066 7.90688C9.91936 7.81799 9.93419 7.72223 9.88558 7.62C9.83698 7.51783 9.75262 7.46691 9.63232 7.46688H8.5555L8.77816 5.74C8.78741 5.66453 8.77344 5.59348 8.73649 5.52688C8.69945 5.46021 8.64137 5.41355 8.56266 5.38688Z" fill="#00805C"/>
                  </svg>
                  <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 700, color: "#00805c", lineHeight: 1.2, whiteSpace: "nowrap" }}>Join the waitlist</p>
                </div>
              </div>
            </ContentListRow>
          ) : (
            <ContentListRow thumbnail={<WaitlistNotOpenThumbnail />}>
              <WaitlistNotOpenMeta title="Introduction to HTML content tags" />
            </ContentListRow>
          )}

          {/* Assignment (locked) */}
          <ContentListRow thumbnail={<AssignmentThumbnail />}>
            <AssignmentLockedMeta title="HTML Page Creation" />
          </ContentListRow>

        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Assignment Banner Card (bottom of page)
// ─────────────────────────────────────────────

function AssignmentBannerCard() {
  return (
    <div style={{ width: 328, height: 100, display: 'flex', flexDirection: 'row', alignItems: 'flex-end', padding: '0px 16px 0px 0px', gap: 12, background: 'white', border: '2px solid #f0f0f0', borderRadius: 8 }}>
      <div style={{ width: 100, height: 100, flexShrink: 0, position: 'relative' }}>
        <img alt="" src={imgImage} style={{ position: 'absolute', width: 124, height: 124, right: -4, bottom: 0 }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '16px 0px', gap: 8, flex: 1 }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, color: '#212121', letterSpacing: '0.25px', lineHeight: 1.2, margin: 0 }}>
          Build your Tourism Websites by using HTML5, CSS
        </p>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" style={{ flexShrink: 0 }}>
            <path d={svgPaths.p25024a00} fill="#757575" />
          </svg>
          <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 12, color: '#616161', margin: 0 }}>
            Assignment opens soon
          </p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Top App Bar
// ─────────────────────────────────────────────

function BackButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]">
      <div className="bg-[#f6f6f6] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[40px]">
        <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.08),0px_2px_1px_0px_rgba(0,0,0,0.06),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
        <div className="relative shrink-0 size-[20px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g opacity="0.87" />
          </svg>
          <div className="absolute inset-[10.93%_29.21%_10.89%_26.03%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.95105 15.6375">
              <path d={svgPaths.p30c03c00} fill="#212121" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopAppBar({ onMenuPress }: { onMenuPress?: () => void }) {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[64px] items-center left-0 px-[8px] py-[12px] top-0 w-[360px] z-10" data-name="Top App Bar">
      {/* Left side - Back button */}
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative">
        <BackButton />
        <div className="content-stretch flex flex-[1_0_0] flex-col h-[38px] items-start justify-center min-w-px" />
      </div>
      {/* Right side - Hamburger menu (hidden when onMenuPress is undefined) */}
      {onMenuPress && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexShrink: 0 }}>
          <div
            onClick={onMenuPress}
            style={{
              width: 48,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#f6f6f6',
                border: '1px solid #f0f0f0',
                borderRadius: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0px 1px 3px rgba(0,0,0,0.1), 0px 2px 1px rgba(0,0,0,0.06), 0px 1px 1px rgba(0,0,0,0.08)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2.5 5H17.5" stroke="#212121" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2.5 10H17.5" stroke="#212121" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2.5 15H17.5" stroke="#212121" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Root Screen
// ─────────────────────────────────────────────

export default function CourseContentScreen({ onJoinWaitlist, onLearnCTA, onLiveClassTap, onViewRecording, firstRowRef, waitlistJoined, lessonsRemaining, onMenuPress, appState }: { onJoinWaitlist?: () => void; onLearnCTA?: () => void; onLiveClassTap?: () => void; onViewRecording?: () => void; firstRowRef?: React.RefObject<HTMLDivElement | null>; waitlistJoined?: boolean; lessonsRemaining?: number; onMenuPress?: () => void; appState?: string }) {
  return (
    <div className="bg-white relative w-[360px]" data-name="Course Content Screen">
      {/* Status bar - stays absolute over banner */}
      <div className="absolute top-0 left-0 w-full h-[40px] bg-white px-[16px] z-10">
        <AppStatusBar />
      </div>

      {/* Top app bar - sits over banner */}
      <div className="absolute top-[40px] left-0 w-full z-10">
        <TopAppBar onMenuPress={onMenuPress} />
      </div>

      {/* Banner + Title in normal flow */}
      <CourseTitleAndThumbnail />

      {/* Everything below flows naturally */}
      <div className="flex flex-col items-center pb-[24px] gap-[32px]">
        {appState !== "waitlist_full" && (
          <LiveClassCard onJoinWaitlist={onJoinWaitlist} onLearnCTA={onLearnCTA} waitlistJoined={waitlistJoined} appState={appState} onLiveClassTap={onLiveClassTap} />
        )}
        <CourseNavigation />
        <ContentList onJoinWaitlist={onJoinWaitlist} onLearnCTA={onLearnCTA} onLiveClassTap={onLiveClassTap} onViewRecording={onViewRecording} firstRowRef={firstRowRef} waitlistJoined={waitlistJoined} lessonsRemaining={lessonsRemaining} appState={appState} />
        <AssignmentBannerCard />
      </div>
    </div>
  );
}
