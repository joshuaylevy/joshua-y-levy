import Navbar from './nav_bar_top.js';
import Footer from './footer.js'

export default function Layout({ children }) {
    return (
        <body className="flex flex-col">  
            <div class = "page-container ">
                <Navbar />
                <main> {children} </main>
                <Footer />
            </div>
        </body>
    )
}