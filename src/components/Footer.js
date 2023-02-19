import '../css/Footer.css';

const Footer = () => {
    return (
        <div className='footer' id='contact'>
            <div className='container footer-content'>
                <div className='col contact-me animated-sections'>
                    <img
                        className='footer__logo'
                        src={process.env.PUBLIC_URL + '/Assets/Icons/logo.png'}
                        alt=''
                    />
                    <div className='contact-me__content'>
                        <h2 className='footer__section-title text-center'>Contact Me</h2>
                        <p className='footer__section-text'>+201012975458</p>
                        <p className='footer__section-text'>seifelkadydev81@hotmail.com</p>
                        <p className='footer__section-text'>Giza, Egypt</p>
                    </div>
                </div>
                <div className='col animated-sections'>
                    <h2 className='footer__section-title text-center'>Social Media</h2>
                    <div className='social-icons'>
                        <a
                            target='__blank'
                            href='https://www.facebook.com/saifeldien.elkady/'
                            className='social-link'
                        >
                            <img
                                src={process.env.PUBLIC_URL + '/Assets/Icons/Facebook.png'}
                                alt=''
                                className='social-icon'
                            />
                        </a>

                        <a
                            target='__blank'
                            href='https://github.com/Sayyfz'
                            className='social-link'
                        >
                            <img
                                src={process.env.PUBLIC_URL + '/Assets/Icons/Github.png'}
                                alt=''
                                className='social-icon'
                            />
                        </a>

                        <a
                            target='__blank'
                            href='https://itch.io/dashboard'
                            className='social-link'
                        >
                            <img
                                src={process.env.PUBLIC_URL + '/Assets/Icons/Itchio.png'}
                                alt=''
                                className='social-icon'
                            />
                        </a>

                        <a
                            target='__blank'
                            href='https://www.linkedin.com/in/seif-elkady/'
                            className='social-link'
                        >
                            <img
                                src={process.env.PUBLIC_URL + '/Assets/Icons/LinkedIn.png'}
                                alt=''
                                className='social-icon'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
