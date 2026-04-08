// import homePagePic from '../../assets/home_page_pic.png'
import './Home.css'

function Home() {
    return (
        <>
            <div className='background'>
                <section>
                    <header className='header'>
                        <h2> University of Florida </h2>
                        <h1> Pride Student Union </h1>
                    </header>
                </section>
            </div>
            
            <div className='about-us'>
                <header className='about-us-header'>
                    <h2> About Us </h2>
                </header>

                <div className='about-us-content'>
                    <div className='about-us-text'>
                        <p style = {{ color: "white" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p style = {{ color: "white" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                            luctus, velit at varius facilisis, lorem ipsum placerat justo, at
                            posuere lorem nulla non orci.
                        </p>
                    </div>

                    <div className='about-us-boxes'>
                        <div className='about-us-box box-large'></div>
                        <div className='about-us-box box-small'></div>
                        <div className='about-us-box box-medium'></div>
                        <div className='about-us-box box-tall'></div>
                    </div>
                </div>
            </div>

            
        </>
        // <h1 className='home-section-text'>
        //     Home
        // </h1>
    )
}

export default Home