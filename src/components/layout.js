import Navbar from './nav_bar_top.js';
import Footer from './footer.js'

export default function Layout({ children }) {
    return (  
        <div className="flex flex-col px-24 min-h-screen">
            <Navbar />
            <main>
                <div className="flex flex-col place-items-start justify-between mx-16 max-w-8xl">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}