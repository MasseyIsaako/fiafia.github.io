// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';

/**
 * Create the component.
 * 
 * @param {object} props 
 * 
 * @returns {jsx}
 */
class LandingHero extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            heading,
            backgroundImage
        } = this.props;

        return (
            <div className="landing-hero" style={{
                backgroundImage: `url(${backgroundImage})`
            }}>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="landing-hero__heading">{heading}</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};

/**
 * Defining the default props for the component.
 *
 * @type {Object}
 */
LandingHero.defaultProps = {
    backgroundImage: '',
    heading: ''
};

/**
 * Define the prop property types.
 *
 * @type {Object}
 */
LandingHero.propTypes = {
    backgroundImage: PropTypes.string,
    heading: PropTypes.string,
};

export default LandingHero;