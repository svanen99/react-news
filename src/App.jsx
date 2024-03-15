import Header from "./components/Header";
import Category from "./components/Category";
import BreakingNews from "./components/BreakingNews";
import MainContent from "./components/MainContent";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"
import { crimeArticles, entertainmentArticles, internationalArticles, sportsArray } from "./data/data"
import { swedishArticles } from "./data/data";
import {swedishStories, internationalStories, sportStories, crimeStories, entertainmentStories} from "./data/data"
import { breakingArticles } from "./data/data"


function App() {
  return (
    <>
    <Header />
    <Navigation />
    <BreakingNews articlesArray={breakingArticles}/>
    <div className="mainContainer"></div>
    <MainContent />
    <Category title="World" articlesArray={internationalStories}/>
    <Category title="Sweden" articlesArray={swedishStories} />
    <Category title="Sport" articlesArray={sportStories}/>
    <Category title="Crime" articlesArray={crimeStories}/>
    <Category title="Entertainment" articlesArray={entertainmentStories}/>
    <Footer />
    </>
  )
}

export default App
