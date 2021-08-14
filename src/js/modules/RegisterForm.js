// https://greensock.com/docs/v3/GSAP/Timeline/fromTo()
const tl = gsap.timeline();

const CreateRegisterForm = options => {
    const close = document.querySelector(options.selectors.close);
    const form  = document.querySelector(options.selectors.form);

    /**
     * Toggle the window scroll, depending on whether the video panel
     * is opening or closing.
     * 
     * @param {string} toggle 
     * 
     * @returns {void}
     */
    const __toggleWindowScroll = toggle => {
        const body = document.querySelector('body');

        if (body instanceof HTMLElement) {
            body.style.overflow = toggle;
        }
    };

    /**
     * Add the open and close animations to the register form.
     * 
     * @returns {void}
     */
    const __mountRegisterForm = openButtons => {
        // Open the form
        openButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                tl.to(form, 1, {
                    left: '0',
                });
    
                __toggleWindowScroll('hidden');
            });
        });

        // Close the form
        close.addEventListener('click', () => {
            tl.to(form, 1, {
                left: '-110%',
            });

            __toggleWindowScroll('scroll');
        });
    }
    
    /**
     * Public init function.
     */
    const init = () => {
        window.addEventListener('load', () => {
            const openButtons = Array.from(
                document.querySelectorAll(options.selectors.openButtons)
            );

            if (close instanceof HTMLElement &&
                form instanceof HTMLElement &&
                openButtons.length > 0
            ) {
                __mountRegisterForm(openButtons);
            }
        });
    };

    /**
     * Return the publicly exposed init function.
     */
    return Object.freeze({
        init
    });
};

export default CreateRegisterForm;