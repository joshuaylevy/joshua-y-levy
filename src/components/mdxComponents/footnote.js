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
            const adjusted = registerTop(offset);
            setTop(adjusted);
        }
    }, []);
    
    const toggleActive = () => {
        setActiveId(activeId === id ? null : id);
    };


    return(
        <div
            ref={ref}
            onClick={toggleActive}
            style={{ top: `${top}px` }}
            className={`hidden lg:block absolute right-10 w-64 p-3 cursor-pointer transition-all duration-100 ease-in overflow-hidden pb-5"
                ${activeId === id
                    ? 'bg-white text-xs border-gray-400 rounded shadow-md z-10'
                    : 'border-transparent text-xs max-h-24 mask-fade-bottom'}`
                    // : 'bg-white border-transparent text-xs max-h-24 mask-[linear-gradient(to_bottom,_black_40%,_transparent_100%)] mask-size-full mask-repeat-no'}`
                }
        >
            <div className="flex flex-row">
                <div>
                    <span className="font-bold text-xs text-gray-400 mr-3 align-top">{id}.</span>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export function FootnoteRef({ id }) {

  const { activeId, setActiveId } = useFootnoteContext();

  const toggleActive = () => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <sup
        id={`footnote-ref-${id}`} 
        onClick={toggleActive}
        className="font-bold text-xs text-gray-400 hover:text-blue-500 cursor-pointer transition-colors"
    >
        {id}
    </sup>
  );
}