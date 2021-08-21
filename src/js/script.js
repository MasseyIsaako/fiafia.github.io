import ReactHabitat from 'react-habitat';

// React components
import Authentication from '../modules/Authentication/Authentication';
import FaqAccordions from '../modules/FaqAccordions/FaqAccordions';
import ImageText from '../modules/ImageText/ImageText';
import ItemsSlider from '../modules/ItemsSlider/ItemsSlider';
import LandingHero from '../modules/LandingHero/LandingHero';
import Navigation from '../modules/Navigation/Navigation';
import Profiles from '../modules/Profiles/Profiles';
import RegisterForm from '../modules/RegisterForm/RegisterForm';
import RSVPBanner from '../modules/RSVPBanner/RSVPBanner';
import Text from '../modules/Text/Text';
import Video from '../modules/Video/Video';

// Vanilla components
import CreateAnimatedHero from './modules/AnimatedHero';
import CreateParallaxImages from './modules/ParallaxImages';

const AnimatedHero = new CreateAnimatedHero({
    selectors: {
        circle: '.loading__circle--animate',
        hero: '.hero',
        loader: '.loading__inner',
        heading: '.hero__heading',
        summary: '.hero__summary',
        videoOpenButton: '.hero__button--video',
        registerFormOpenButton: '.hero__button--register',
        down: '.hero__down',
        loadingScreen: '.loading',
        image: '.hero__image'
    },
    toggleClasses: {
        loaderActive: 'loading__inner--active',
        downAnimate: 'hero__down--active',
    }
});

const ParallaxImages = new CreateParallaxImages({
    selectors: {
        images: '.parallax'
    }
});

class App extends ReactHabitat.Bootstrapper {
    constructor() {
        super();

        // Create a new container
        const containerBuilder = new ReactHabitat.ContainerBuilder();

        // Register our components that we want to expose to the DOM
        containerBuilder.register(Authentication).as('Authentication');
        containerBuilder.register(FaqAccordions).as('FaqAccordions');
        containerBuilder.register(ImageText).as('ImageText');
        containerBuilder.register(ItemsSlider).as('ItemsSlider');
        containerBuilder.register(LandingHero).as('LandingHero');
        containerBuilder.register(Navigation).as('Navigation');
        containerBuilder.register(Profiles).as('Profiles');
        containerBuilder.register(RegisterForm).as('RegisterForm');
        containerBuilder.register(RSVPBanner).as('RSVPBanner');
        containerBuilder.register(Text).as('Text');
        containerBuilder.register(Video).as('Video');

        // Set the DOM container
        this.setContainer(containerBuilder.build());
    }
}

// Create a single instance of our app
const instance = new App();

// Export the instance
export default instance;

AnimatedHero.init();
ParallaxImages.init();

// Force user to scroll to the top on load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});