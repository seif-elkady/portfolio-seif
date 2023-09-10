import '../css/Splash.css';
const Splash = () => {
    const splashScreenLogo = './Assets/Icons/logo.png'
	return (
		<div className='splash-container'>
			<img
            className='splash-img'
				src={splashScreenLogo}
				alt='Splash Screen Logo'
			/>
		</div>
	);
};

export default Splash;
