import TopNavLinkItem from "./TopNavLinkItem";
import "./TopNav.scss";
import FadeInScrollTransition from "./FadeInScrollTransition";
import TopNavLogo from "./TopNavLogo";
import {useEffect, useState} from "react";
import TopNavLinks from "./TopNavLinks";
import {logDOM} from "@testing-library/react";

function TopNav() {
    const TOP_OFFSET = 45;
    const [show, setShow] = useState(true);
    const [isTop, setIsTop] = useState(window.scrollY < TOP_OFFSET);
    const [prevPos, setPrevPos] = useState(0);

    const [showMenu, setShowMenu] = useState(false);

    function handleScroll() {
        const currentPos = window.scrollY;
        if (currentPos < prevPos) {
            setShow(true)
        } else setShow(false)
        setIsTop(currentPos < TOP_OFFSET);
        setPrevPos(currentPos <= 0 ? 0 : currentPos);
    }

    function handleHashChange() {
        console.log("hashchange")
        setShowMenu(false);

    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, false);
        window.addEventListener("hashChange", handleHashChange, false);
    });

    useEffect(() => {

    }, [showMenu])


    return (
        <header
            className={`${isTop ? "shadow-none top-2" : ""}  ${show ? "top-0 backdrop-blur bg-darkblue/75" : "-top-20"} bg-darkblue shadow-2xl transition-all flex box-border fixed left-0 h-20 w-full justify-between items-center z-10 px-6 md:px-16`}>
            <nav className="flex flex-1 justify-between items-center h-full">
                <div>
                    <FadeInScrollTransition timeout={100} reversed>
                        <a href="/" className="block w-12 h-12 overflow-hidden relative">

                            <TopNavLogo className=""/>


                        </a>
                    </FadeInScrollTransition>
                </div>
                <div className="hidden md:flex gap-3 pr-3">
                    <TopNavLinks/>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setShowMenu(true)}>menu</button>

                    <aside
                        className={`w-[min(60vw,350px)] transition-all flex flex-col gap-4 text-2xl justify-center items-center h-screen top-0 bottom-0 right-0 fixed bg-slate-900 shadow-xl ${showMenu ? "" : "right-[-100%]"} `}>
                        <button onClick={() => setShowMenu(false)} className="text-7xl absolute top-4 right-10">&times;</button>
                        <TopNavLinks onClick={() => setShowMenu(false)}/>
                    </aside>

                </div>
            </nav>
        </header>
    )
}

export default TopNav;