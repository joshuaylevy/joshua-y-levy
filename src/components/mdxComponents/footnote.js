import { useEffect, useRef, useState } from "react";
import { useFootnoteContext } from './footnoteContext';
// import FootnoteBoxText from "./footNoteBoxText";


export function Footnote({ children, id }) {
    const ref = useRef();
    const [top, setTop] = useState(0);
    const { registerTop, activeId, setActiveId } = useFootnoteContext();
    
    useEffect(() => {
        const refElem = document.getElementById(`footnote-ref-${id}`);
        if (refElem && ref.current) {
            const offset = refElem.getBoundingClientRect().top + window.scrollY;
            const adjusted = registerTop(id, offset);
            setTop(adjusted);
        }
    }, [id, registerTop]);
    
    const toggleActive = () => {
        setActiveId(activeId === id ? null : id);
    };


    const footnoteContent = (
        <div className="flex flex-row">
            <div>
                <span className="font-bold text-xs text-gray-400 mr-3 align-top">{id}.</span>
            </div>
            <div>
                {children}
            </div>
        </div>
    );

    return (
        <>
            {/* Gutter variant: visible at footnoteGutter and up */}
            <div
                ref={ref}
                onClick={toggleActive}
                style={{ top: `${top}px` }}
                className={`hidden footnoteGutter:block absolute right-10 w-64 p-3 cursor-pointer transition-all duration-100 ease-in overflow-hidden pb-5 ${
                    activeId === id
                        ? 'bg-white text-xs border-gray-400 rounded shadow-md z-10'
                        : 'border-transparent text-xs max-h-24 mask-fade-bottom'
                }`}
            >
                {footnoteContent}
            </div>
            {/* Bottom variant: visible below footnoteGutter, pushed to end via order */}
            <div
                id={`footnote-${id}`}
                className="block footnoteGutter:hidden order-[999] pt-2 pb-4 border-t border-gray-200 mt-2"
            >
                {footnoteContent}
            </div>
        </>
    );
}

export function FootnoteRef({ id }) {
  const { activeId, setActiveId, isNarrowView } = useFootnoteContext();

  const toggleActive = () => {
    setActiveId(activeId === id ? null : id);
  };

  const scrollToFootnote = () => {
    const el = document.getElementById(`footnote-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleClick = () => {
    if (isNarrowView) {
      scrollToFootnote();
    } else {
      toggleActive();
    }
  };

  return (
    <sup
      id={`footnote-ref-${id}`}
      onClick={handleClick}
      className="font-bold text-xs text-gray-400 hover:text-blue-500 cursor-pointer transition-colors"
    >
      {id}
    </sup>
  );
}