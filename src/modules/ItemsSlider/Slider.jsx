// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';
import Glide from '@glidejs/glide';

/**
 * Create the component.
 * 
 * @param {object} props 
 * 
 * @returns {jsx}
 */
class Slider extends React.Component {
    constructor(props) {
        super(props);
    }

    buildSlides() {
        let slides = false;

        if (this.props.slides.length > 0) {
            slides = [];

            this.props.slides.forEach((data, index) => {
                slides.push(
                    <li className="glide__slide" key={index}>
                        <div className="items-slider__slide-inner video-button" data-src={data.video}>
                            <div
                                className="items-slider__slide-image"
                                style={{ backgroundImage: `url(${data.image})` }}
                                role="img"
                            ><i className="items-slider__slide-play"></i></div>
                            <div className="items-slider__slide-content">
                                <p className="items-slider__slide-heading">
                                    <span className="english">{data.title.en}</span>
                                    <span className="samoan">{data.title.sm}</span>
                                </p>
                            </div>
                        </div>
                    </li>
                );
            });
        }

        return slides;
    }

    getSliderConfig() {
        const mobile = {
            peek: {
                before: 0,
                after: 50
            },
            perView: 1,
            startAt: 0,
            type: 'carousel',
        };

        const tablet = {
            peek: {
                before: 0,
                after: 0
            },
            perView: 2,
            startAt: 0,
            type: 'carousel',
        };

        const desktop = {
            peek: {
                before: 0,
                after: 0
            },
            perView: 3,
            startAt: 0,
            type: 'carousel',
        };

        return {
            ...desktop,
            breakpoints: {
                576: { ...mobile },
                768: { ...mobile },
                992: { ...tablet },
                1200: { ...desktop },
                1400: { ...desktop },
                2000: { ...desktop }
            }
        };
    }

    componentDidMount() {
        // We mount the carousel after React has rendered it in the DOM.
        const carousel = new Glide('.glide', this.getSliderConfig());
        carousel.mount();
    }

    render() {
        const slides = this.buildSlides();

        return (
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {slides}
                    </ul>
                    <div data-glide-el="controls">
                        <button aria-label="left-arrow" data-glide-dir="<" className="_10XKC Glide-leftArrow">
                            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <polyline fill="none" stroke="#37474F" points="17.5 22 6.5 12 17.5 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline>
                            </svg>
                        </button>
                        <button aria-label="right-arrow" data-glide-dir=">" className="_10XKC Glide-rightArrow">
                            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <polyline fill="none" stroke="#37474F" points="6.5 2 17.5 12 6.5 22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

/**
 * Defining the default props for the component.
 *
 * @type {Object}
 */
Slider.defaultProps = {
    slides: [{}],
};

/**
 * Define the prop property types.
 *
 * @type {Object}
 */
Slider.propTypes = {
    slides: PropTypes.array
};

export default Slider;