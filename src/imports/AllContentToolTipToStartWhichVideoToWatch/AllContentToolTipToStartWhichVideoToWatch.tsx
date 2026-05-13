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

function LiveClassCard({ onJoinWaitlist, onLearnCTA, waitlistJoined }: { onJoinWaitlist?: () => void; onLearnCTA?: () => void; waitlistJoined?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center pt-[8px] relative shrink-0 w-[360px]">
      <div className="bg-[#f6f6f6] content-stretch flex gap-[16px] items-center min-h-[152px] min-w-[312px] p-[16px] relative rounded-[16px] shrink-0 w-[328px]" data-name="Live Class Card">
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

function ContentList({ onJoinWaitlist, onLearnCTA, firstRowRef, waitlistJoined, lessonsRemaining }: {
  onJoinWaitlist?: () => void; onLearnCTA?: () => void; firstRowRef?: React.RefObject<HTMLDivElement | null>; waitlistJoined?: boolean; lessonsRemaining?: number;
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

          {/* Upcoming Live Class - Join Waitlist */}
          <ContentListRow thumbnail={<UpcomingLiveThumbnail />}>
            <JoinWaitlistMeta
            title="Introduction to HTML"
            meta="Live Class •  10 PM • 30 Apr"
            onJoinWaitlist={onJoinWaitlist}
            onLearnCTA={onLearnCTA}
            waitlistJoined={waitlistJoined}
            lessonsRemaining={lessonsRemaining} />
          </ContentListRow>

          {/* Waitlist not yet open */}
          <ContentListRow thumbnail={<WaitlistNotOpenThumbnail />}>
            <WaitlistNotOpenMeta title="Introduction to HTML content tags" />
          </ContentListRow>

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
      {/* Right side - Hamburger menu */}
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
    </div>
  );
}

// ─────────────────────────────────────────────
// Root Screen
// ─────────────────────────────────────────────

export default function CourseContentScreen({ onJoinWaitlist, onLearnCTA, firstRowRef, waitlistJoined, lessonsRemaining, onMenuPress }: { onJoinWaitlist?: () => void; onLearnCTA?: () => void; firstRowRef?: React.RefObject<HTMLDivElement | null>; waitlistJoined?: boolean; lessonsRemaining?: number; onMenuPress?: () => void }) {
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
        <LiveClassCard onJoinWaitlist={onJoinWaitlist} onLearnCTA={onLearnCTA} waitlistJoined={waitlistJoined} />
        <CourseNavigation />
        <ContentList onJoinWaitlist={onJoinWaitlist} onLearnCTA={onLearnCTA} firstRowRef={firstRowRef} waitlistJoined={waitlistJoined} lessonsRemaining={lessonsRemaining} />
        <AssignmentBannerCard />
      </div>
    </div>
  );
}
