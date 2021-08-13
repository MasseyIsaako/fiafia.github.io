// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import ItemsSliderData from './ItemsSlider.json';
import Slider from './Slider';

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
        return (
            <section className="items-slider">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <h2 className="items-slider__heading">
                                <span className="english">{ItemsSliderData.heading.en}</span>
                                <span className="samoan">{ItemsSliderData.heading.sm}</span>
                            </h2>
                            <h3 className="items-slider__intro">
                                <span className="english">{ItemsSliderData.intro.en}</span>
                                <span className="samoan">{ItemsSliderData.intro.sm}</span>
                            </h3>
                        </Col>
                        <Col sm={12}>
                            <Slider slides={ItemsSliderData.slides} />
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