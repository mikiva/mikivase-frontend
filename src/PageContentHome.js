import FadeInScrollTransition from "./FadeInScrollTransition";

function PageContentHome() {

    return (
        <section className="min-h-screen flex flex-col content-start justify-center">

            <FadeInScrollTransition timeout={300}>
                <p className="text-accent mb-5">Hello there, nice to meet you! My name is</p>
            </FadeInScrollTransition>
            <FadeInScrollTransition timeout={500}>
                <h1 className="text-7xl mb-2">Mikael Ivarsson</h1>
            </FadeInScrollTransition>

            <FadeInScrollTransition timeout={600}>
                <p className="text-accent">and</p>
            </FadeInScrollTransition>
            <FadeInScrollTransition timeout={700}>
                <h2 className="text-slate-500 mb-5 text-7xl ">I'm just playing.</h2>
            </FadeInScrollTransition>
            <FadeInScrollTransition timeout={800}>
                <p className="text-slate-400 max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda
                    aut blanditiis consequatur culpa excepturi expedita ipsa ipsum iusto modi molestiae natus, nemo
                    nulla numquam officia quisquam quod unde voluptatem.</p>
            </FadeInScrollTransition>
        </section>
    )
}

export default PageContentHome;