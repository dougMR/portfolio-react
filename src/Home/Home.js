import "./Home.css";
import Hero from "./Hero";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import About from "./About";
import Footer from "./Footer";

const Home = ({projects}) => {
    return(
        <div className="container">
            <Hero />
			<About />
			<Contact />
			<Portfolio projects={projects}/>
			<Footer />
        </div>
    )
}

export default Home;