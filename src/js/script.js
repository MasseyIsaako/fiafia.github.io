import ReactHabitat from 'react-habitat';

// React components
import Accordions from '../modules/Accordions/Accordions';
import Authentication from '../modules/Authentication/Authentication';
import ImageText from '../modules/ImageText/ImageText';
import ItemCards from '../modules/ItemCards/ItemCards';
import ItemsSlider from '../modules/ItemsSlider/ItemsSlider';
import LandingHero from '../modules/LandingHero/LandingHero';
import Navigation from '../modules/Navigation/Navigation';
import Profiles from '../modules/Profiles/Profiles';
import RSVPBanner from '../modules/RSVPBanner/RSVPBanner';
import RSVPForm from '../modules/RSVPForm/RSVPForm';
import Text from '../modules/Text/Text';
import UploadItemsForm from '../modules/UploadItemsForm/UploadItemsForm';
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
        containerBuilder.register(Accordions).as('Accordions');
        containerBuilder.register(Authentication).as('Authentication');
        containerBuilder.register(ImageText).as('ImageText');
        containerBuilder.register(ItemCards).as('ItemCards');
        containerBuilder.register(ItemsSlider).as('ItemsSlider');
        containerBuilder.register(LandingHero).as('LandingHero');
        containerBuilder.register(Navigation).as('Navigation');
        containerBuilder.register(Profiles).as('Profiles');
        containerBuilder.register(RSVPBanner).as('RSVPBanner');
        containerBuilder.register(RSVPForm).as('RSVPForm');
        containerBuilder.register(Text).as('Text');
        containerBuilder.register(UploadItemsForm).as('UploadItemsForm');
        containerBuilder.register(Video).as('Video');

        // Set the DOM container
        this.setContainer(containerBuilder.build());
    }
}

// Create a single instance of our app
const instance = new App();

// Export the instance
export default instance;

// Force user to scroll to the top on load
window.addEventListener('load', () => {
    const isHome = document.querySelector('.home');

    if (isHome instanceof HTMLElement) {
        window.scrollTo(0, 0);
        AnimatedHero.init();
    }

    ParallaxImages.init();
});