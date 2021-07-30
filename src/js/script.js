import ReactHabitat from 'react-habitat';

// React components
import Authentication from '../modules/Authentication/Authentication';
import ImageText from '../modules/ImageText/ImageText';
import ItemsSlider from '../modules/ItemsSlider/ItemsSlider';
import LandingHero from '../modules/LandingHero/LandingHero';
import Navigation from '../modules/Navigation/Navigation';
import Profiles from '../modules/Profiles/Profiles';
import Text from '../modules/Text/Text';

// Vanilla components
import CreateAnimatedHero from './modules/AnimatedHero';
import CreateFaqAccordions from './modules/FaqAccordions';
import CreateParallaxImages from './modules/ParallaxImages';
import CreateRegisterForm from './modules/RegisterForm';
import CreateVideo from './modules/Video';

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

const FaqAccordions = new CreateFaqAccordions({
    activeAccordionClass: 'js-accordion-active',
    accordionLink: '.faq-accordion__link',
    timing: 500
});

const ParallaxImages = new CreateParallaxImages({
    selectors: {
        images: '.parallax'
    }
});

const RegisterForm = new CreateRegisterForm({
    selectors: {
        form: '.register-form',
        close: '.register-form__close',
        open: '.register-form-open'
    }
});

const Video = new CreateVideo({
    selectors: {
        videoButtons: '.video-button',
        videoWrapper: '.video',
        videoClose: '.video__close',
        videoIframe: '.video__iframe',
    }
});

class App extends ReactHabitat.Bootstrapper {
    constructor() {
        super();

        // Create a new container
        const containerBuilder = new ReactHabitat.ContainerBuilder();

        // Register our components that we want to expose to the DOM
        containerBuilder.register(Authentication).as('Authentication');
        containerBuilder.register(ImageText).as('ImageText');
        containerBuilder.register(ItemsSlider).as('ItemsSlider');
        containerBuilder.register(LandingHero).as('LandingHero');
        containerBuilder.register(Navigation).as('Navigation');
        containerBuilder.register(Profiles).as('Profiles');
        containerBuilder.register(Text).as('Text');

        // Set the DOM container
        this.setContainer(containerBuilder.build());
    }
}

// Create a single instance of our app
const instance = new App();

// Export the instance
export default instance;

// Force the user to go to the top of the page
window.scrollTo(0, 0);

AnimatedHero.init();
FaqAccordions.init();
ParallaxImages.init();
RegisterForm.init();
Video.init();