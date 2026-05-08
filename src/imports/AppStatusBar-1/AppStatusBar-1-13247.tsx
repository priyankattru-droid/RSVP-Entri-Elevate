import svgPaths from "./svg-ilfmihes9g";

function Battery() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="battery">
      <div className="relative shrink-0 size-[16px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Vector">
            <path d={svgPaths.pb41c100} fill="var(--fill-0, #757575)" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-full justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[12px] text-right tracking-[0.25px] w-[25px]">
        <p className="leading-[1.2]">72%</p>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[2px] h-full items-center justify-end relative shrink-0" data-name="Icons">
      <div className="relative shrink-0 size-[16px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Vector">
            <path d={svgPaths.p669ed00} fill="var(--fill-0, #757575)" />
          </g>
        </svg>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Vector">
            <path d={svgPaths.p4bbec40} fill="var(--fill-0, #757575)" />
          </g>
        </svg>
      </div>
      <Battery />
    </div>
  );
}

export default function AppStatusBar() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[16px] relative size-full" data-name="App Status Bar">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-full justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[12px] tracking-[0.25px] w-[28px]">
        <p className="leading-[1.2]">9:49</p>
      </div>
      <Icons />
    </div>
  );
}