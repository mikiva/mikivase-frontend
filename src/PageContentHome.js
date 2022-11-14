import FadeInScrollTransition from "./FadeInScrollTransition";

function PageContentHome() {

    return (
        <section className="mainSection">

            <FadeInScrollTransition timeout={500}>
                <h2 className="big-heading">Mikael Ivarsson.</h2>
            </FadeInScrollTransition>
            <FadeInScrollTransition timeout={700}>
                <h2 className="big-heading secondary-heading">I'm just playing.</h2>
            </FadeInScrollTransition>
            <FadeInScrollTransition timeout={800}>
                <p className="text-fade">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda
                    aut blanditiis consequatur culpa excepturi expedita ipsa ipsum iusto modi molestiae natus, nemo
                    nulla numquam officia quisquam quod unde voluptatem.</p>
            </FadeInScrollTransition>
        </section>
    )
}

export default PageContentHome;