import React, { useRef, useState, useEffect, Suspense } from 'react';

const LazyOnView = ({ importFn, height = 300 }) => {
  const ref = useRef(null);
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          importFn().then(mod => {
            setComponent(() => mod.default);
          });
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [importFn]);

  return (
    <div ref={ref} style={{ minHeight: height }}>
      {Component && (
        <Suspense fallback={<div>Loading…</div>}>
          <Component />
        </Suspense>
      )}
    </div>
  );
};

export default LazyOnView;
