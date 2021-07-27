// https://greensock.com/docs/v3/GSAP/Timeline/fromTo()
const tl = gsap.timeline();

const CreateRegisterForm = options => {
    const form  = document.querySelector(options.selectors.form);
    const open = document.querySelector(options.selectors.open);
    const close = document.querySelector(options.selectors.close);

    /**
     * Toggle the window scroll, depending on whether the video panel
     * is opening or closing.
     * 
     * @param {*} toggle 
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
    const __mountRegisterForm = () => {
        // Open the form
        open.addEventListener('click', () => {
            tl.to(form, 1, {
                left: '0',
            });

            __toggleWindowScroll('hidden');
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
        if (form && open && close) {
            __mountRegisterForm();
        }
    };

    /**
     * Return the publicly exposed init function.
     */
    return Object.freeze({
        init
    });
};

export default CreateRegisterForm;