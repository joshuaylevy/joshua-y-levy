import Navbar from './nav_bar_top.js';
import Footer from './footer.js'

export default function Layout({ children }) {
    return (  
        <div className="flex flex-col px-24 min-h-screen">
            <Navbar />
            <main>
                <div className="flex flex-col place-items-start justify-between mx-auto max-w-5xl">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}