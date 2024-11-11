// components/RevealComponent.js
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css'; // Optional: choose a theme
// import RevealMarkdown from 'reveal.js/plugin/markdown/markdown'
// import RevealMath from 'reveal.js/plugin/math/math'


const RevealComponent = dynamic(() => import('reveal.js'), { ssr: false });
const RevealMathPlugin = dynamic(() => import('reveal.js/plugin/math/math'), { ssr: false });


export default function RevealSlideShow({ children }) {
  const revealRef = useRef(null);

  useEffect(() => {
    const loadReveal = async () => {
      console.log("Initializing Reveal.js...");  // Debug statement
      const Reveal = (await import('reveal.js')).default;
      const RevealMath = (await import('reveal.js/plugin/math/math')).default;

      if (revealRef.current) {
        console.log('All as expected')
        const deck = new Reveal(revealRef.current);
        console.log(revealRef.current)
        deck.initialize({
          // Customize your Reveal.js settings here
          controls: true,
          progress: true,
          slideNumber: true,
          navigationMode: "default",
          // Math settings
          katex: {
            version: 'latest',
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false },
              { left: '\\(', right: '\\)', display: false },
              { left: '\\[', right: '\\]', display: true },
            ],
            ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre']
          },
          // Default slide/size settings
          width: 1150,
          height: 700,
          margin: 0.04,
          minScale: 0.2,
          maxScale: 2.0,
          // Animation and transition settings
          transition: 'none',
          backgroundTransition: 'none',
          autoAnimateEasing: 'ease-out',
          autoAnimateDuration: 0.8,
          autoAnimateUnmatched: false,
          plugins: [RevealMath.KaTeX]
        });
      }
      else {
        console.error("Reveal container is not defined.")
      }


    };
    loadReveal();
  }, []);

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      width: '100%',
      minHeight: '100%'
    }}>
      <div className="reveal" ref={revealRef}>
        <div className="slides">
          {children} 
        </div>
      </div>
    </div>
  );
}
