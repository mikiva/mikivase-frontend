import PageContentHome from "./PageContentHome";
import PageContentAbout from "./PageContentAbout";

function PageContent() {
    return (
        <>
            <main className="max-w-5xl mx-auto min-h-screen">
                <PageContentHome/>
                <PageContentAbout/>
            </main>
        </>


    )

}

export default PageContent;