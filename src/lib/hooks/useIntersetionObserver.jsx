import { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = (options) => {
  const [entry, setEntry] = useState(null);
  const [node, setNode] = useState(null);

  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setEntry(entry);
        observer.current.disconnect();
      }
    }, options);

    const { current: currentObserver } = observer;
    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node, options]);

  return [setNode, entry];
};
