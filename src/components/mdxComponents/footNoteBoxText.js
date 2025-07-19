import { useFootnoteContext } from './footnoteContext';


export default function FootnoteBoxText({ children, id }) {
    const { registerTop, activeId, setActiveId } = useFootnoteContext();
    
  return (
    <span 
        className={`inline leading-tight
            ${activeId === id
                ? 'text-xs text-gray-800'
                : 'text-xs text-gray-600'}`
            }
    >
      {children}
    </span>
  );
}
