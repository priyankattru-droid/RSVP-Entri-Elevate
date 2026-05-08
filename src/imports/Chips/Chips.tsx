export default function Chips() {
  return (
    <div
      className="bg-[#e6f3ff] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] size-full"
      data-name="Chips"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#0061b5] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[1.2] min-w-px not-italic relative text-[#212121] text-[12px] text-center tracking-[0.25px] whitespace-nowrap" style={{ fontWeight: 500 }}>
        Week 1
      </p>
    </div>
  );
}