import Navbar from './nav_bar_top.js';
import Footer from './footer.js'

export default function Layout({ children }) {
    return (  
        <div className="page-container flex flex-col h-screen px-10">
            <Navbar />
            <main>
                <div className="flex flex-col place-items-start justify-between">
                    <div>
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}