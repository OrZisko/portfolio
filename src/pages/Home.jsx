import Landing from '../cmps/Landing.cmp.jsx'
import Portfolio from '../cmps/Portfolio.jsx'
import About from '../cmps/About.jsx';
import Skills from '../cmps/Skills.jsx';
import Contact from '../cmps/Contact.jsx';

function Home() {
    return (
        <main className='home-page'>
            <Landing></Landing>
            <About></About>
            <Portfolio></Portfolio>
            <Skills></Skills>
            <Contact></Contact>
        </main>
    );
}

export default Home;