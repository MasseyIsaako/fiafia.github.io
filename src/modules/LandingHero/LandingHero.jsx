// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import LandingHeroData from './LandingHero.json';
import { translator } from '../../js/utils/utils';

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

    getLandingContent () {
        let landing = false;

        if (LandingHeroData) {
            LandingHeroData.forEach(data => {
                if (data.option === this.props.option) {
                    landing = data;
                }
            });
        }

        return landing;
    }

    render() {
        const landing = this.getLandingContent();

        return (
            landing &&
            <div className="landing-hero" style={{
                backgroundImage: `url(${landing.backgroundImage})`
            }}>
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }}>
                            <h1 className="landing-hero__heading"
                                dangerouslySetInnerHTML={{ __html: translator(landing.title) }}
                            ></h1>
                            <p className="landing-hero__summary"
                                dangerouslySetInnerHTML={{ __html: translator(landing.summary) }}
                            ></p>
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
    option: ''
};

/**
 * Define the prop property types.
 *
 * @type {Object}
 */
LandingHero.propTypes = {
    option: PropTypes.string
};

export default LandingHero;