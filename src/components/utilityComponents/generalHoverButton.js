import { Inter } from "next/font/google";
import Link from "next/link";


const inter = Inter({ subsets:['latin']});

export default function GeneralHoverButton({ buttonText, link, newTabOpt }) {
    var newTabSetting;

    if (newTabOpt == true){
        var newTabSetting = "_blank"
    }

    return(
        <Link
            href = {link}
            target = {newTabSetting}
        >
            <div className = {`${inter.className} text-sm text-center p-2 min-w-[8ch] max-w-[14ch] rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100`}>
                <div>
                    {buttonText}
                </div>
            </div>

        </Link>
    )

}