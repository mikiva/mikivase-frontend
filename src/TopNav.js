import TopNavLinkItem from "./TopNavLinkItem";
import "./TopNav.scss";
import logo from "./img/logo_m.svg";
import FadeInScrollTransition from "./FadeInScrollTransition";

function TopNav() {
    return (
        <header className="topnav container">
            <nav className="topnav navbar">
                <div className="navbar navbar__left">
                    <FadeInScrollTransition timeout={100} reversed>
                        <a href="/">

                            <img src={logo} alt="" className={"brand"}/>
                        </a>
                    </FadeInScrollTransition>
                </div>
                <div className="navbar navbar__right">
                    <FadeInScrollTransition timeout={300} reversed>

                        <TopNavLinkItem href={"/#about"} text={"whoami"}/>
                    </FadeInScrollTransition>
                    <FadeInScrollTransition timeout={400} reversed>
                        <TopNavLinkItem href={"/#Jobs"} text={"which"}/>
                    </FadeInScrollTransition>
                    <FadeInScrollTransition timeout={500} reversed>
                        <TopNavLinkItem href={"/#contact"} text={"where"}/>
                    </FadeInScrollTransition>
                </div>
            </nav>
        </header>
    )
}

export default TopNav;