import simpleParallax from 'simple-parallax-js';

const CreateParallaxImages = options => {
    const images = Array.from(document.querySelectorAll(options.selectors.images));

    /**
     * Init the parallax images.
     */
    const init = () => {
        images.forEach(image => {
            new simpleParallax(image, {
                delay: .6,
                scale: 1.05,
                transition: 'cubic-bezier(0,0,0,1)'
            });
        });
    };

    /**
     * Return the publicly available init
     */
    return Object.freeze({
        init
    });
};

export default CreateParallaxImages;