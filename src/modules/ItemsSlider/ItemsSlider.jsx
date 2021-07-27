// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import Glide from 'react-glidejs';
import ReactPlayer from 'react-player/youtube';

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
    }

    render() {
        const standardSliderConfig = {
            className: 'glide',
            perView: 2,
            slideClassName: 'slider__frame',
            startAt: 0,
            throttle: 0,
            type: 'carousel',
        };

        const sliderSettings = {
            ...standardSliderConfig,
            breakpoints: {
                300: { ...standardSliderConfig },
                500: { ...standardSliderConfig },
                700: { ...standardSliderConfig },
                900: { ...standardSliderConfig },
                1000: { ...standardSliderConfig },
                1100: { ...standardSliderConfig },
                1200: { ...standardSliderConfig },
                1400: { ...standardSliderConfig },
                1600: { ...standardSliderConfig },
                1800: { ...standardSliderConfig },
                2000: { ...standardSliderConfig },
                2200: { ...standardSliderConfig }
            }
        };

        const videoSettings = {
            className: 'items-slider__slide-video',
            light: true,
            height: '100%',
            width: '100%'
        };

        return (
            <section className="items-slider">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="items-slider__heading">Need ideas for an item?</h2>
                            <h3 className="items-slider__intro">Check out these awesome examples below!</h3>
                        </Col>
                        <Col>
                            <Glide {...sliderSettings}>
                                <div className="items-slider__slide-inner">
                                    <p>Text</p>
                                    <ReactPlayer {...videoSettings} url='https://www.youtube.com/embed/nWwpyclIEu4' />
                                </div>
                                <div className="items-slider__slide-inner">
                                    <p>Text</p>
                                    <ReactPlayer {...videoSettings} url='https://www.youtube.com/embed/nWwpyclIEu4' />
                                </div>
                                <div className="items-slider__slide-inner">
                                    <p>Text</p>
                                    <ReactPlayer {...videoSettings} url='https://www.youtube.com/embed/nWwpyclIEu4' />
                                </div>
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