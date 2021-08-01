// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import Glide from 'react-glidejs';
import ItemsSliderData from './ItemsSlider.json';
// import ReactPlayer from 'react-player/youtube';

/**
 * Create the component.
 * 
 * @param {object} props 
 * 
 * @returns {jsx}
 */
class ItemsSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slides: ItemsSliderData.slides
        };
    }

    buildSlides () {
        let slides = false;

        if (this.state.slides.length > 0) {
            slides = [];

            this.state.slides.forEach((data, index) => {
                slides.push(
                    <div className="items-slider__slide-inner video-button" data-src={data.video} key={index}>
                        <div
                            className="items-slider__slide-image"
                            style={{ backgroundImage: `url(${data.image})` }}
                            role="img"
                        ><i className="items-slider__slide-play"></i></div>
                        <div className="items-slider__slide-content">
                            <p className="items-slider__slide-heading">{data.title}</p>
                        </div>
                    </div>
                );
            });
        }

        return slides;
    }

    render() {
        const slides = this.buildSlides();

        const mobile = {
            className: 'glide',
            perView: 1,
            startAt: 0,
            type: 'carousel',
        };

        const tablet = {
            className: 'glide',
            perView: 2,
            startAt: 0,
            type: 'carousel',
        };

        const desktop = {
            className: 'glide',
            perView: 3,
            startAt: 0,
            type: 'carousel',
        };

        const sliderSettings = {
            ...desktop,
            breakpoints: {
                576: { ...mobile },
                768: { ...mobile },
                992: { ...tablet },
                1200: { ...desktop },
                1400: { ...desktop }
            }
        };

        return (
            slides !== false &&
            <section className="items-slider">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="items-slider__heading">{ItemsSliderData.heading}</h2>
                            <h3 className="items-slider__intro">{ItemsSliderData.intro}</h3>
                        </Col>
                        <Col>
                            <Glide {...sliderSettings}>
                                {slides}
                            </Glide>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
};

/**
 * Defining the default props for the component.
 *
 * @type {Object}
 */
ItemsSlider.defaultProps = {
    slides: [{}],
};

/**
 * Define the prop property types.
 *
 * @type {Object}
 */
ItemsSlider.propTypes = {
    slides: PropTypes.array
};

export default ItemsSlider;