import PageContentHome from "./PageContentHome";
import PageContentAbout from "./PageContentAbout";
import PageContentStuffIMade from "./PageContentStuffIMade";

function PageContent() {
    return (
        <>
            <main className="mx-auto min-h-screen">
                <PageContentHome/>
                <PageContentAbout/>
                <PageContentStuffIMade/>
            </main>
        </>


    )

}

export default PageContent;