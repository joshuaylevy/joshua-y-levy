import { createContext, useContext, useRef, useState } from 'react';

const FootnoteContext = createContext();

export function FootnoteProvider({ children }) {
  const positionsRef = useRef([]); // ✅ persists across renders, updates immediately
  const [activeId, setActiveId] = useState(null);

  console.log(positionsRef);
  const registerTop = (desiredTop) => {
    let newTop = desiredTop;
    positionsRef.current.forEach((pos) => {
      if (Math.abs(pos - newTop) < 150) {
        newTop = pos + 180; // push downward; adjust as needed
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
