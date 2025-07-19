import { createContext, useContext, useRef, useState } from 'react';

const FootnoteContext = createContext();

export function FootnoteProvider({ children }) {
  const positionsRef = useRef([]); // ✅ persists across renders, updates immediately
  const [activeId, setActiveId] = useState(null);

  console.log(positionsRef);
  const registerTop = (desiredTop) => {
    let newTop = desiredTop; // desiredTop is the default
    positionsRef.current.forEach((pos) => {
      if (Math.abs(pos - newTop) < 100) {
        newTop = pos + 96 + 8; // push downward; adjust as needed
      }
    });

    positionsRef.current.push(newTop); // ✅ synchronously update
    return newTop;
  };

  return (
    <FootnoteContext.Provider value={{ registerTop, activeId, setActiveId }}>
      {children}
    </FootnoteContext.Provider>
  );
}

export function useFootnoteContext() {
  return useContext(FootnoteContext);
}
