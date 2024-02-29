import Link from 'next/link'

export const nav = () => {
    return (
        <>
            <nav className="mt-28 animate-text-pop-up-top text-6xl flex justify-between items-center absolute top-[20%] left-[80%]">
                <ul className=" font-serif text-stone-800/[.7] font-light">
                    <li className=" mb-8 transition duration-700 ease-in-out hover:text-rose-300"><Link href="/news">news</Link></li>
                    <li className=" mb-8 transition duration-700 ease-in-out hover:text-rose-300"><Link href="/article">article</Link></li>
                    <li className=" mb-8 transition duration-700 ease-in-out hover:text-rose-300"><Link href="/art">art</Link></li>
                    <li className=" transition duration-700 hover:text-rose-300"><Link href="/us">us</Link></li>
                    
                </ul>
            </nav>
        </>
    )
}