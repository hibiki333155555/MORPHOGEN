
export const Nav = () => {
    return (
        <>
            <nav className=" text-6xl flex justify-between items-center absolute top-[20%] left-[80%]">
                <ul className=" text-black font-light">
                    <li className=" mb-8 hover:text-7xl"><a href="/news">news</a></li>
                    <li className=" mb-8 hover:text-7xl"><a href="/article">article</a></li>
                    <li className=" mb-8 hover:text-7xl"><a href="/art">art</a></li>
                    <li className=" hover:text-8xl"><a href="/us">us</a></li>
                </ul>
            </nav>
        </>

    )
}