import TopNavLinkItem from "./TopNavLinkItem";
import "./TopNav.scss";
import logo from "./img/logo_m.svg";
import FadeInScrollTransition from "./FadeInScrollTransition";
import TopNavLogo from "./TopNavLogo";

function TopNav() {
    return (
        <header className="flex box-border fixed top-0 left-0 h-20 w-full justify-between items-center z-10 px-16">
            <nav className="flex flex-1 justify-between items-center h-full">
                <div>
                    <FadeInScrollTransition timeout={100} reversed>
                        <a href="/" className="block w-12 h-12 overflow-hidden relative">

                            <TopNavLogo className=""/>


                        </a>
                    </FadeInScrollTransition>
                </div>
                <div className="flex gap-3 pr-3">
                    <FadeInScrollTransition timeout={300} reversed>
                        <TopNavLinkItem href={"/#whoami"} text={"whoami"}/>
                    </FadeInScrollTransition>
                    <FadeInScrollTransition timeout={400} reversed>
                        <TopNavLinkItem href={"/#whatami"} text={"whatami"}/>
                    </FadeInScrollTransition>
                    <FadeInScrollTransition timeout={500} reversed>
                        <TopNavLinkItem href={"/#where"} text={"where"}/>
                    </FadeInScrollTransition>
                </div>
            </nav>
        </header>
    )
}

export default TopNav;