import React from 'react';

import styles from './Animate.module.css';

const useMeasure = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [bounds, setBounds] = React.useState<DOMRectReadOnly | null>(null);

  React.useEffect(() => {
    if (!window.ResizeObserver) {
      // fallback with no support for resize when ResizeObserver missing
      if (ref.current) setBounds(ref.current.getBoundingClientRect());
      return;
    }

    const ro = new ResizeObserver((entries) => {
      // avoid error "ResizeObserver loop limit exceeded" https://stackoverflow.com/a/58701523
      requestAnimationFrame(() => {
        setBounds(entries[0] ? entries[0].contentRect : null);
      });
    });

    if (ref.current) ro.observe(ref.current);

    return () => ro.disconnect();
  }, []);

  return { ref, bounds };
};

export interface AnimateProps {
  children: React.ReactNode;
  className?: string;
  open: boolean;
  style?: React.CSSProperties;
}

export function Animate({ children, className = '', open, style }: AnimateProps) {
  const { ref, bounds } = useMeasure();
  // "auto" for initial render and SSR
  const heightStyle = (open && (bounds ? `${bounds.height}px` : 'auto')) || '0';
  const contentHeight = React.useMemo(() => ({ height: heightStyle }), [heightStyle]);
  const container = `${className} ${styles.container}`.trim();

  return (
    <div className={container} aria-hidden={!open || undefined} style={contentHeight}>
      <div ref={ref} className={styles.content} style={style}>
        {children}
      </div>
    </div>
  );
};
