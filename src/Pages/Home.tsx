import Header from "@/Components/Header";
import '@/SCSS/Home.scss';

const Home = () => {

    return (

        <>

            <Header text="Code Quest" />

            <div className='siteInfo'>

                <p className='siteInfoContent'>
                    This site serves as a personal reference for full stack web development. Originally built as a React.js version of a vanilla HTML project from a web development bootcamp, it has since evolved into a long-term learning hub.
                </p>

                <p className='siteInfoContent'>
                    It contains detailed, topic-specific notes and code snippets organized by language, technology, and development domain. The site is continuously updated as I expand my knowledge across frontend, backend, cloud services, tooling, and mobile development.
                </p>

                <p className='siteInfoContent'>
                    Use the navigation menu above to explore different categories. This site is structured for clarity, speed, and growth as I continue learning new concepts and refining my skills.
                </p>




            </div>
        </>
    );

};

export default Home;
