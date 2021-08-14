// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { translator } from '../../js/utils/utils';

const Heading = ({ heading }) => (
    <h2 className="text__heading" dangerouslySetInnerHTML={{ __html: translator(heading) }}></h2>
);

const Paragraph = ({ paragraph }) => (
    <p className="text__paragraph" dangerouslySetInnerHTML={{ __html: translator(paragraph) }}></p>
);

/**
 * Consctruct the component.
 *
 * @param {Object} props
 */
const Text = props => {
    const {
        heading,
        paragraph
    } = props;

    return (
        <section className="text">
            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }}>    
                        <Heading heading={heading} />
                        <Paragraph paragraph={paragraph} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

/**
 * Defining the default props for the component.
 *
 * @type {Object}
 */
Text.defaultProps = {
    heading: {
        en: '',
        sm: ''
    },
    paragraph: {
        en: '',
        sm: ''
    }
};

/**
 * Define the prop property types.
 *
 * @type {Object}
 */
Text.propTypes = {
    heading: PropTypes.object,
    paragraph: PropTypes.object
};

export default Text;