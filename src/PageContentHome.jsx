import FadeInScrollTransition from "./FadeInScrollTransition";

function PageContentHome() {

    const delay = 500

    return (<section className="min-h-screen min-w-screen flex flex-col items-center justify-center">
        {false &&
            <FadeInScrollTransition timeout={delay + 100}>
                <h2 className="section-header"><span className="text-accent">#</span>~</h2>
            </FadeInScrollTransition>
        }
        <FadeInScrollTransition timeout={delay + 200}>
            <div className="corner-border-accent">
                <div className="text-center py-4 px-8 border border-accent/75 bg-accent/5 rounded ">
                    <FadeInScrollTransition timeout={delay + 300}>
                        <p className="text-accent mb-5 ">Hello there, nice to meet you! My name is</p>
                    </FadeInScrollTransition>

                    <FadeInScrollTransition timeout={delay + 400}>
                        <div className="accent-frame-wrapper">
                            <h1 className="text-hero-dynamic mb-2">
                                <div>Mikael Ivarsson</div>
                            </h1>
                        </div>
                    </FadeInScrollTransition>
                    <FadeInScrollTransition timeout={delay + 500}>
                        <p className="text-accent">and</p>
                    </FadeInScrollTransition>
                    <FadeInScrollTransition timeout={delay + 600}>
                        <h2 className="text-slate-500 mb-5 text-3xl-dynamic">this is my underwhelming homepage<span
                            className="text-accent">.</span></h2>
                    </FadeInScrollTransition>
                    <FadeInScrollTransition timeout={delay + 700}>
                        <p className="text-slate-400 max-w-3xl px-auto">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium assumenda
                            aut blanditiis consequatur culpa excepturi expedita ipsa ipsum iusto modi molestiae natus,
                            nemo
                            nulla numquam officia quisquam quod unde voluptatem.
                        </p>
                    </FadeInScrollTransition>
                </div>
            </div>
        </FadeInScrollTransition>
    </section>)
}

export default PageContentHome;
