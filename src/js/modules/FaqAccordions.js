const CreateFaqAccordions = options => {
    /**
     * A simple method that toggles the sub navigation.
     *
     * @param  {object} e Used to capture the click event.
     *
     * @todo  Keyboard navigation, set hidden submenu's to tabindex of -1.
     *
     * @return {void}
     */
    const __toggleAccordion = (e, activeAccordionClass, timing) => {
        // Ensure that only click and keydown events trigger the accordion
        if (e.type === 'click' ||
            (e.type === 'keydown' && e.key === 'Enter')
        ) {
            const srcElement = e.srcElement;
            const accordion = srcElement.parentNode.nextElementSibling;
            const parentAccordion = srcElement.parentNode;

            // Toggle activeAccordionClass based on switch and call the
            // open/close handlers.
            switch (srcElement.classList.contains(activeAccordionClass)) {
                // User is hiding the accordion
                case true:
                    srcElement.classList.remove(activeAccordionClass);
                    accordion.setAttribute('aria-hidden', true);
                    accordion.setAttribute('aria-expanded', false);
                    parentAccordion.classList.remove(activeAccordionClass);
                    __closeAccordion(accordion), timing;
                    break;

                // User is showing the accordion
                case false:
                    srcElement.classList.add(activeAccordionClass);
                    accordion.setAttribute('aria-hidden', false);
                    accordion.setAttribute('aria-expanded', true);
                    parentAccordion.classList.add(activeAccordionClass);
                    __openAccordion(accordion, timing);
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
    const __openAccordion = (accordion, timing) => {
        accordion.style.display = 'block';
        accordion.style.height = `${accordion.scrollHeight}px`;

        // After 1.5s, set accordion height to auto so that the container
        // flexes to the content
        setTimeout(() => {
            accordion.style.height = 'auto';
        }, timing);
    };

    /**
     * Method to handle closing the accordion.
     *
     * @param  {object} subMenu An HTMLElement of the selected
     *                          accordion.
     *
     * @return {void}
     */
    const __closeAccordion = (accordion, timing) => {
        // Set transition to none so that js frame method
        // can handle the timing.
        accordion.style.transition = 'none';

        // Set the variables for the closing animation.
        let scrollHeight = accordion.scrollHeight;
        let el = setInterval(frame, timing / scrollHeight);

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
        // Identify all accordion links
        const activeAccordionClass = options.activeAccordionClass;
        const accordions = Array.from(document.querySelectorAll(options.accordionLink));
        const timing = options.timing;

        // If we have accordions, we want to bind the toggle function to it.
        if (accordions.length > 0) {
            accordions.forEach((el) => {
                el.addEventListener('click', e => {
                    e.preventDefault();
                    e.stopPropagation();

                    __toggleAccordion(e, activeAccordionClass, timing)
                });
                el.addEventListener('keydown', e => {
                    e.preventDefault();
                    e.stopPropagation();

                    __toggleAccordion(e, activeAccordionClass, timing)
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
