import Link from 'next/link'

export const nav = () => {
    return (
        <>
            <nav className=" text-6xl flex justify-between items-center absolute top-[20%] left-[80%]">
                <ul className=" text-black font-light">
                    <li className=" mb-8 hover:text-7xl"><Link href="/news">news</Link></li>
                    <li className=" mb-8 hover:text-7xl"><Link href="/article">article</Link></li>
                    <li className=" mb-8 hover:text-7xl"><Link href="/art">art</Link></li>
                    <li className=" hover:text-8xl"><Link href="/us">us</Link></li>
                </ul>
            </nav>
        </>
    )
}