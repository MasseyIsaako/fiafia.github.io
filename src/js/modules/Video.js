// https://greensock.com/docs/v3/GSAP/Timeline/fromTo()
const tl = gsap.timeline();

const CreateVideo = options => {
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
     * Toggle the video iframe src to the desired video.
     * 
     * @param {src} src 
     * @param {object} videoIframe
     * 
     * @returns {void}
     */
    const __setVideo = (src, videoIframe) => {
        videoIframe.setAttribute('src', src);
    };

    /**
     * Sanitize the video source.
     * 
     * @param {string} src 
     * 
     * @returns {void}
     */
    const __sanitizeSrc = src => {
        return src.replace('watch?v=', 'embed/');
    };

    /**
     * Add a click event listener to the button to play the video.
     * 
     * @param {object} videoButtons 
     * @param {object} videoWrapper 
     * @param {object} videoClose
     * 
     * @returns {void}
     */
    const __mountVideoButton = (videoButtons, videoWrapper, videoClose, videoIframe) => {
        // Open the video panel
        videoButtons.forEach(btn => {
            btn.addEventListener('click', e => {
                const src = __sanitizeSrc(btn.dataset.src);

                e.stopPropagation();
                e.preventDefault();

                tl.to(videoWrapper, 1, {
                    left: '0',
                });

                __setVideo(src, videoIframe);
                __toggleWindowScroll('hidden');
            });
        });

        // Close the video panel
        videoClose.addEventListener('click', e => {
            const src = __sanitizeSrc(videoIframe.getAttribute('src'));
            e.stopPropagation();

            tl.to(videoWrapper, 1, {
                left: '-110%',
            });

            videoIframe.setAttribute('src', src);
            __toggleWindowScroll('scroll');
        });
    };

    /**
     * Init the video.
     * 
     * @returns {void}
     */
    const init = () => {
        document.addEventListener('DOMContentLoaded', () => {
            const videoButtons = Array.from(
                document.querySelectorAll(options.selectors.videoButtons)
            );
            const videoClose = document.querySelector(options.selectors.videoClose);
            const videoIframe = document.querySelector(options.selectors.videoIframe)
            const videoWrapper = document.querySelector(options.selectors.videoWrapper);

            if (videoButtons.length && videoWrapper && videoClose && videoIframe) {
                __mountVideoButton(videoButtons, videoWrapper, videoClose, videoIframe);
            }
        });
    };

    /**
     * Return the publicly available init function.
     */
    return Object.freeze({
        init,
    });
}

export default CreateVideo;