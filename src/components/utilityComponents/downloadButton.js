import { Inter } from 'next/font/google';
import { AiOutlineDownload } from 'react-icons/ai';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function DownloadButton({ linkTarget, newTabOpt }) {
    var newTabSetting;
    if (newTabOpt == true ){
        var newTabSetting = "_blank"
    }

    return(
        <Link
            href = {linkTarget}
            target = {newTabSetting}
        >
            <div className = {`flex flex-row justify-around items-center ${inter.className} font-medium text-sm text-center text-white bg-blue-500 rounded-lg p-2 w-[14ch] ease-in duration-200 hover:shadow-lg hover:shadow-blue-500/50`}>
                <div>
                    Download   
                </div>
                <div>
                    <AiOutlineDownload size = {18}/>
                </div>
            </div>
        </Link>
    )
}