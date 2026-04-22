import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

const FootnoteContext = createContext();

export function FootnoteProvider({ children }) {
  const positionsRef = useRef(new Map()); // id -> adjusted top; avoids unbounded growth
  const [activeId, setActiveId] = useState(null);
  const [isNarrowView, setIsNarrowView] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1320px)');
    const handler = (e) => setIsNarrowView(!e.matches);
    setIsNarrowView(!mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const registerTop = useCallback((id, desiredTop) => {
    const positions = positionsRef.current;
    let newTop = desiredTop;
    positions.forEach((pos, otherId) => {
      if (otherId !== id && Math.abs(pos - newTop) < 100) {
        newTop = Math.max(newTop, pos + 96 + 8);
      }
    });
    positions.set(id, newTop);
    return newTop;
  }, []);

  return (
    <FootnoteContext.Provider value={{ registerTop, activeId, setActiveId, isNarrowView }}>
      {children}
    </FootnoteContext.Provider>
  );
}

export function useFootnoteContext() {
  return useContext(FootnoteContext);
}
