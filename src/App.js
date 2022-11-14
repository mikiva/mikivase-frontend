import './App.scss';
import TopNav from "./TopNav";
import PageContent from "./PageContent";
import FadeInScrollTransition from "./FadeInScrollTransition";

function App() {
    return (
        <div className="App">
                <TopNav/>
            <PageContent/>
        </div>
    );
}

export default App;