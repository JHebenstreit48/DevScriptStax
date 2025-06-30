import Header from "@/Components/Shared/Header";
import '@/SCSS/PageStyles/Home.scss';

const Home = () => {

    return (

        <>

            <Header text="DevScriptStax" size="md" />

            <div className='siteInfo'>

                <p className='siteInfoContent'>
                    DevScriptStax is a personal reference site for full stack web development. It began as a React.js version of a vanilla HTML project from a web development bootcamp and has since grown into a structured space for long-term learning.
                </p>

                <p className='siteInfoContent'>
                    The content is continuously updated as I explore new topics, tools, and techniques across frontend, backend, cloud services, and development workflows. It evolves alongside my skills as both a developer and a learner.
                </p>

                <p className='siteInfoContent'>
                    Use the navigation menu above to explore different categories. The site is organized for clarity, speed, and ongoing growth as I continue deepening my understanding of modern web development.
                </p>

            </div>

        </>
    );

};

export default Home;
