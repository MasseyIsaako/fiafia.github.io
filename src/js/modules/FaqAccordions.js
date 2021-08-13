const CreateFaqAccordions = options => {
    // Identify all accordion links
    const accordions = Array.from(
        document.querySelectorAll(options.selectors.accordionLink)
    );

    /**
     * A simple method that toggles the sub navigation.
     *
     * @param  {object} e Used to capture the click event.
     *
     * @todo  Keyboard navigation, set hidden submenu's to tabindex of -1.
     *
     * @return {void}
     */
    const __toggleAccordion = (e) => {
        // Ensure that only click and keydown events trigger the accordion
        if (e.type === 'click' ||
            (e.type === 'keydown' && e.key === 'Enter')
        ) {
            const srcElement = !e.srcElement.classList.contains(options.selectors.accordionLink.replace('.', '')) ?
                e.srcElement.parentNode :
                e.srcElement
            ;
            const accordion = srcElement.parentNode.nextElementSibling;
            const parentAccordion = srcElement.parentNode;

            // Toggle activeAccordionClass based on switch and call the
            // open/close handlers.
            switch (srcElement.classList.contains(options.toggleClasses.active)) {
                // User is hiding the accordion
                case true:
                    srcElement.classList.remove(options.toggleClasses.active);
                    accordion.setAttribute('aria-hidden', true);
                    accordion.setAttribute('aria-expanded', false);
                    parentAccordion.classList.remove(options.toggleClasses.active);
                    __closeAccordion(accordion, options.timing);
                    break;

                // User is showing the accordion
                case false:
                    srcElement.classList.add(options.toggleClasses.active);
                    accordion.setAttribute('aria-hidden', false);
                    accordion.setAttribute('aria-expanded', true);
                    parentAccordion.classList.add(options.toggleClasses.active);
                    __openAccordion(accordion, options.timing);
                    break;
            }
        }
    };

    /**
     * Method to handle opening the accordion.
     *
     * @param  {object} accordion An HTMLElement of the selected
     *                            accordion.
     *
     * @return {void}
     */
    const __openAccordion = accordion => {
        accordion.style.display = 'block';
        accordion.style.height = `${accordion.scrollHeight}px`;

        // After 1.5s, set accordion height to auto so that the container
        // flexes to the content
        setTimeout(() => {
            accordion.style.height = 'auto';
        }, options.timing);
    };

    /**
     * Method to handle closing the accordion.
     *
     * @param  {object} subMenu An HTMLElement of the selected
     *                          accordion.
     *
     * @return {void}
     */
    const __closeAccordion = accordion => {
        // Set transition to none so that js frame method
        // can handle the timing.
        accordion.style.transition = 'none';

        // Set the variables for the closing animation.
        let scrollHeight = accordion.scrollHeight;
        let el = setInterval(frame, options.timing / scrollHeight);

        // The function that handles the changing height.
        function frame() {
            if (scrollHeight <= 0) {
                clearInterval(el);

                // Removing style attribute to clear transition timing.
                accordion.removeAttribute('style');
            } else {
                scrollHeight = scrollHeight - 4;
                accordion.style.height = scrollHeight + 'px';
            }
        }
    };

    /**
     * Initialise the accordions
     *
     * @return {void}
     */
    const init = () => {
        // If we have accordions, we want to bind the toggle function to it.
        if (accordions.length > 0) {
            accordions.forEach((el) => {
                el.addEventListener('click', e => {
                    e.preventDefault();
                    e.stopPropagation();

                    __toggleAccordion(e);
                });
                el.addEventListener('keydown', e => {
                    e.preventDefault();
                    e.stopPropagation();

                    __toggleAccordion(e);
                });
            });
        }
    }

    /**
     * Return a public init function
     */
    return Object.freeze({
        init
    });
}

export default CreateFaqAccordions;
