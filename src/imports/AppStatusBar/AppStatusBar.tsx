import svgPaths from "./svg-vb2ij4hn5x";

function Group() {
  return (
    <div className="absolute inset-[16.67%_1.83%_14.24%_1.83%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4129 11.055">
        <g id="Group">
          <path d={svgPaths.p3b5becc0} fill="var(--fill-0, #757575)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[14.19%_8.33%_8.33%_14.22%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.391 12.396">
        <g id="Group">
          <path d={svgPaths.p3ef0c700} fill="var(--fill-0, #757575)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.33%_29.17%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 13.3333">
        <g id="Group">
          <path d={svgPaths.p35409800} fill="var(--fill-0, #757575)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="battery">
      <div className="relative shrink-0 size-[16px]" data-name="Icon Wrapper">
        <div className="absolute inset-0 overflow-clip" data-name="Icon Library">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="Group">
              <g id="Vector" />
              <g id="Vector_2" />
            </g>
          </svg>
          <Group2 />
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[#616161] text-[12px] text-right tracking-[0.25px] whitespace-nowrap">72%</p>
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Icons">
      <div className="relative shrink-0 size-[16px]" data-name="Icon Wrapper">
        <div className="absolute inset-0 overflow-clip" data-name="Icon Library">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="Group">
              <g id="Vector" />
              <g id="Vector_2" />
            </g>
          </svg>
          <Group />
        </div>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="Icon Wrapper">
        <div className="absolute inset-0 overflow-clip" data-name="Icon Library">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="Group">
              <g id="Vector" />
            </g>
          </svg>
          <Group1 />
        </div>
      </div>
      <Battery />
    </div>
  );
}

export default function AppStatusBar() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[16px] relative size-full" data-name="App Status Bar">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-end leading-[0] not-italic relative shrink-0 text-[#616161] text-[12px] tracking-[0.25px] w-[28px]">
        <p className="leading-[1.2]">9:49</p>
      </div>
      <Icons />
    </div>
  );
}