// https://greensock.com/docs/v3/GSAP/Timeline/fromTo()
const tl = gsap.timeline();

// Import dependencies
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class Video extends React.Component {
    constructor () {
        super();
    }

    toggleWindowScroll (toggle) {
        const body = document.querySelector('body');

        if (body instanceof HTMLElement) {
            body.style.overflow = toggle;
        }
    };

    setVideo (src, videoIframe) {
        videoIframe.setAttribute('src', src);
    };

    sanitizeSrc (src) {
        return src.replace('watch?v=', 'embed/');
    };

    mountVideoButton (videoButtons,
        videoWrapper,
        videoClose,
        videoIframe
    ) {
        const additionalParams = '?rel=0&modestbranding=1&autoplay=1';

        // Open the video panel
        videoButtons.forEach(btn => {
            btn.addEventListener('click', e => {
                const src = `${this.sanitizeSrc(btn.dataset.src)}${additionalParams}`;

                e.stopPropagation();
                e.preventDefault();

                tl.to(videoWrapper, 1, {
                    left: '0',
                });

                this.setVideo(src, videoIframe);
                this.toggleWindowScroll('hidden');
            });
        });

        // Close the video panel
        videoClose.addEventListener('click', e => {
            const src = `${this.sanitizeSrc(videoIframe.getAttribute('src'))}${additionalParams}`;
            e.stopPropagation();

            console.log(src);

            tl.to(videoWrapper, 1, {
                left: '-110%',
            });

            videoIframe.setAttribute('src', src);
            this.toggleWindowScroll('scroll');
        });
    };

    componentDidMount () {
        // Allow the content to load in the DOM wait for other
        // components to load for 3s before mounting the triggers.
        window.addEventListener('load', () => {
            setTimeout(() => {
                const videoButtons = Array.from(
                    document.querySelectorAll('.video-button')
                );
                const videoClose = document.querySelector('.video__close');
                const videoIframe = document.querySelector('.video__iframe');
                const videoWrapper = document.querySelector('.video');

                if (videoButtons.length > 0 &&
                    videoWrapper instanceof HTMLElement &&
                    videoClose instanceof HTMLElement &&
                    videoIframe instanceof HTMLElement
                ) {
                    this.mountVideoButton(videoButtons, videoWrapper, videoClose, videoIframe);
                }
            }, 3000);
        });
    }

    render() {
        return (
            <div className="video">
                <Container>
                    <Row>
                        <Col sm={12} className="position-relative">
                            <span className="video__close"></span>
                        </Col>
                        <Col sm={12}>
                            <div className="video__wrapper">
                                <div className="video__inner">
                                    <iframe className="video__iframe"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};

export default Video;