"use client";

import { useState, useEffect, useRef } from 'react';

export function useScrollSpy(
  ids: string[],
  options: IntersectionObserverInit = { rootMargin: '0% 0% -50% 0%' }
) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id));
    
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    elements.forEach((el) => {
      if (el) {
        observer.current?.observe(el);
      }
    });

    return () => observer.current?.disconnect();
  }, [ids, options]);

  return activeId;
}
