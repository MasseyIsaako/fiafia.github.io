// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import ItemsSliderData from './ItemsSlider.json';
import Slider from './Slider';
import { translator } from '../../js/utils/utils.js';

/**
 * Create the component.
 * 
 * @param {object} props 
 * 
 * @returns {jsx}
 */
class ItemsSlider extends React.Component {
    constructor() {
        super();

        this.state = { ...ItemsSliderData };
    }

    getHeading () {
        return (
            <h2 className="items-slider__heading" dangerouslySetInnerHTML={{ __html: translator(this.state.heading) }}></h2>
        );
    }

    getIntro () {
        return (
            <h3 className="items-slider__intro" dangerouslySetInnerHTML={{ __html: translator(this.state.intro) }}></h3>
        );
    }

    render() {
        const heading = this.getHeading();
        const intro = this.getIntro();

        return (
            <section className="items-slider">
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }}>
                            {heading}
                            {intro}
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Slider slides={this.state.slides} />
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
};

export default ItemsSlider;