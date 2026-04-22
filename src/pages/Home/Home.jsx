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
                        <div className='about-us-box box-large pic-one'></div>
                        <div className='about-us-box box-small pic-two'></div>
                        <div className='about-us-box box-medium pic-three'></div>
                        <div className='about-us-box box-tall pic-four'></div>
                    </div>
                </div>
            </div>

            <div className='new-section'>
                <header className='about-us-header'>
                    <h2> Queer Cultivation Program (QCP) </h2>
                </header>

                <div className='new-section-content'>
                    <div className='new-section-boxes'>
                        <div className='about-us-box box-large flip-card new-photo-1'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-face flip-card-front pic-one'></div>
                                <div className='flip-card-face flip-card-back'>
                                    <p>Caption One</p>
                                </div>
                            </div>
                        </div>
                        <div className='about-us-box box-small flip-card new-photo-2'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-face flip-card-front pic-two'></div>
                                <div className='flip-card-face flip-card-back'>
                                    <p>Caption Two</p>
                                </div>
                            </div>
                        </div>
                        <div className='about-us-box box-medium flip-card new-photo-3'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-face flip-card-front pic-three'></div>
                                <div className='flip-card-face flip-card-back'>
                                    <p>Caption Three</p>
                                </div>
                            </div>
                        </div>
                        <div className='about-us-box box-tall flip-card new-photo-4'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-face flip-card-front pic-four'></div>
                                <div className='flip-card-face flip-card-back'>
                                    <p>Caption Four</p>
                                </div>
                            </div>
                        </div>
                        <div className='about-us-box box-large flip-card new-photo-5'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-face flip-card-front pic-five'></div>
                                <div className='flip-card-face flip-card-back'>
                                    <p>Caption Five</p>
                                </div>
                            </div>
                        </div>
                        <div className='about-us-box box-large flip-card new-photo-6'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-face flip-card-front pic-six'></div>
                                <div className='flip-card-face flip-card-back'>
                                    <p>Caption Six</p>
                                </div>
                            </div>
                        </div>
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