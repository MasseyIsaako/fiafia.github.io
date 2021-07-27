// https://greensock.com/docs/v3/GSAP/Timeline/fromTo()
const tl = gsap.timeline();

const CreateAnimatedHero = options => {
    const loader = document.querySelector(options.selectors.loader);
    const circle = document.querySelector(options.selectors.circle);
    const hero = document.querySelector(options.selectors.hero);
    const heading = document.querySelector(options.selectors.heading);
    const summary = document.querySelector(options.selectors.summary);
    const videoOpenButton = document.querySelector(options.selectors.videoOpenButton);
    const down = document.querySelector(options.selectors.down);
    const image = document.querySelector(options.selectors.image);
    const registerFormOpenButton = document.querySelector(options.selectors.registerFormOpenButton);

    /**
     * Remove the loading animation from the loading circles.
     * 
     * @param {object} loader
     * 
     * @return {void}
     */
    const __removeLoader = () => {
        loader.classList.remove(options.toggleClasses.loaderActive);
    };

    /**
     * Animate the a huge white circle that grows from the center of the page.
     * 
     * @param {object} circle An HTMLElement object for the center circle in the
     *                        loading screen.
     */
    const __animateWhiteCircle = () => {
        tl.to(circle, {
            duration: 1.5,
            height: '300vh',
            width: '300vh'
        });
    };

    /**
     * Fade in the hero image.
     * 
     * @param {object} hero The hero container.
     * 
     * @return {void}
     */
    const __animateImage = () => {
        tl.fromTo(hero, {
            opacity: 0,
            zIndex: 130
        }, {
            duration: 0.5,
            opacity: 1
        })
        
        setTimeout(() => {
            tl.set(hero, {
                zIndex: 'auto'
            });
        }, 1000);
    };

    /**
     * Mount the down button.
     * 
     * @param {object} button 
     * 
     * @return {void}
     */
    const __mountDownButton = button => {
        button.classList.add(options.toggleClasses.downAnimate);
        button.addEventListener('click', () => {
            hero.nextElementSibling.scrollIntoView();
        });
    };

    /**
     * Animate the hero content.
     * 
     * @param {array} items An array of HTMLElements that share similar
     *                      animation traits.
     * 
     * @return {void}
     */
    const __animateText = (items, hero) => {
        items.forEach(element => {
            if (element.classList.contains(options.selectors.down.replace('.', ''))) {
                tl.fromTo(element, {
                    opacity: 0,
                    transform: 'translateY(20px) translateX(-50%) rotate(45deg)'
                }, {
                    duration: 0.5,
                    opacity: 1,
                    transform: 'translateY(0) translateX(-50%) rotate(45deg)'
                });

                __mountDownButton(element, hero);
            } else {
                tl.fromTo(element, {
                    opacity: 0,
                    transform: 'translateY(20px)'
                }, {
                    duration: 0.5,
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    };

    /**
     * Mount the introduction animations.
     * 
     * @param {object}  loadingScreen
     */
    const __mountAnimations = loadingScreen => {
        setTimeout(() => {
            if (circle && loader && hero && heading && summary &&
                videoOpenButton && down && image && registerFormOpenButton
            ) {
                __removeLoader();
                __animateWhiteCircle();
                __animateImage();
                __animateText([heading, summary, videoOpenButton, registerFormOpenButton, down], hero);

                setTimeout(() => {
                    __removeLoadingScreen(loadingScreen);
                }, 3000);
            }
        }, 3000)
    };

    /**
     * Delete the loading screen.
     * 
     * @param {object} loadingScreen An HTMLElement representing the loading screen.
     * 
     * @return {void}
     */
    const __removeLoadingScreen = (loadingScreen) => {
        loadingScreen.parentNode.removeChild(loadingScreen);
    };

    /**
     * Publicly exposed init function.
     */
    const init = () => {
        const loadingScreen = document.querySelector(options.selectors.loadingScreen);

        if (loadingScreen instanceof HTMLElement) {
            __mountAnimations(loadingScreen);
        }
    };

    /**
     * Return the init function
     */
    return Object.freeze({
        init
    });
};

export default CreateAnimatedHero;