//import './App.scss';
import "./index.scss";
import "./Transitions.scss";
import TopNav from "./TopNav";
import PageContent from "./PageContent";
import FadeInScrollTransition from "./FadeInScrollTransition";
import PageFooter from "./PageFooter";

function App() {
    return (
        <>
        <div className="mx-auto px-32 bg-darkblue text-slate-300">
            <TopNav/>
            <PageContent/>
            <PageFooter />
        </div>
        </>
    );
}

export default App;