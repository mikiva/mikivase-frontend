import FadeInScrollTransition from "./FadeInScrollTransition";

function PageContentAbout() {
    return (
        <section id={"about"}>
            <FadeInScrollTransition transitionDelay={500} timeout={100}>

                <h2>About me</h2>
                <p>This should say something interesting</p>
            </FadeInScrollTransition>
        </section>
    )
}

export default PageContentAbout;