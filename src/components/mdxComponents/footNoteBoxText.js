import { useFootnoteContext } from './footnoteContext';


export default function FootnoteBoxText({ children, id }) {
    const { registerTop, activeId, setActiveId } = useFootnoteContext();
    
  return (
    <span 
        className={`inline text-gray-600 leading-tight
            ${activeId === id
                ? 'text-sm'
                : 'text-xs'}`
            }
    >
      {children}
    </span>
  );
}
