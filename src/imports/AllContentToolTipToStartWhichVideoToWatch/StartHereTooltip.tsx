import React from "react";

function getScrollContainer(el: Element | null): Element | Window {
  while (el) {
    const { overflow, overflowY } = window.getComputedStyle(el);
    if (/auto|scroll/.test(overflow + overflowY)) return el;
    el = el.parentElement;
  }
  return window;
}

export default function StartHereTooltip({
  anchorRef,
  frameRef,
}: {
  anchorRef: React.RefObject<HTMLDivElement | null>;
  frameRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [visible, setVisible] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);
  const [tooltipTop, setTooltipTop] = React.useState(0);
  const [tooltipLeft, setTooltipLeft] = React.useState(0);

  React.useEffect(() => {
    const container = anchorRef.current
      ? getScrollContainer(anchorRef.current.parentElement)
      : window;
    const getScrollTop = () =>
      container instanceof Window
        ? container.scrollY
        : (container as Element).scrollTop;

    const onScroll = () => {
      if (getScrollTop() > 100 && !dismissed) {
        if (anchorRef.current && frameRef.current) {
          const rect = anchorRef.current.getBoundingClientRect();
          const frameRect = frameRef.current.getBoundingClientRect();
          setTooltipTop(rect.bottom + 8 - frameRect.top);
          setTooltipLeft(rect.left - frameRect.left);
        }
        setVisible(true);
      }
    };
    container.addEventListener('scroll', onScroll, { passive: true } as EventListenerOptions);
    return () => container.removeEventListener('scroll', onScroll);
  }, [dismissed, anchorRef, frameRef]);

  if (!visible) return null;

  return (
    <div
      style={{ position: 'absolute', top: tooltipTop, left: tooltipLeft, width: 280, zIndex: 50 }}
      data-name="Start Here Tooltip"
    >
      <div style={{ width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderBottom: '8px solid #121212', marginLeft: 42 }} />
      <div style={{ background: '#121212', borderRadius: 8, padding: 16, display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', justifyContent: 'center', boxShadow: '0px 6px 10px 0px rgba(0,0,0,0.08),0px 1px 18px 0px rgba(0,0,0,0.06),0px 3px 5px 0px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 18, color: '#f0f0f0', letterSpacing: '0.15px', lineHeight: 1.25, width: 240, margin: 0 }}>Start here</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 14, color: '#cfcfcf', letterSpacing: '0.25px', lineHeight: 1.6, width: 240, margin: 0 }}>Get an overview of lessons, assignments, & how live classes work in this video.</p>
          </div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <p
              onClick={() => { setDismissed(true); setVisible(false); }}
              style={{ flex: 1, fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 14, color: '#8ac9ff', letterSpacing: '0.5px', lineHeight: 1.15, textAlign: 'right', margin: 0, cursor: 'pointer' }}
            >Got it</p>
          </div>
        </div>
      </div>
    </div>
  );
}
