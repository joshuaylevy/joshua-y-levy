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
            className={`hidden lg:block absolute right-10 w-64 p-3 text-xs cursor-pointer transition-all duration-100 ease-in
                ${activeId === id
                    // ? 'text-gray-800 bg-white border-blue-400'
                    ? 'bg-white text-sm text-gray-800 border-gray-400 rounded shadow-md'
                    // : 'text-gray-400 bg-gray-100'}
                    : 'text-xs text-gray-500 border-transparent'}`
                }
        >
            {/* <div className="text-sm leading-tight [&>p]:inline [&>p]:m-0 [&>a]?:underline [&>ul]:list-disc"> */}
            <div>
                <span className="font-bold text-xs text-gray-400 mr-1 align-top">{id}.</span>
                    {children}
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