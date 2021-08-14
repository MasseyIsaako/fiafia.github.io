// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { translator } from '../../js/utils/utils.js';

// Only allow the below color options.
const COLORS = [
    'gold',
    'brown',
    'pink'
];

/**
 * Get the base theme for the component.
 * 
 * @param {string} color The theme color for the component
 * 
 * @returns {string}
 */
const __getThemeClasses = (color, reverse) => {
    let themeClasses = {
        wrapper: 'image-text',
        row: 'flex-column-reverse flex-lg-row'
    };

    if (color.length) {
        themeClasses.wrapper += ` image-text--${color}`;
    }

    if (reverse === true) {
        themeClasses.wrapper += ` image-text--reverse`;
        themeClasses.row = 'flex-column-reverse flex-lg-row-reverse';
    }

    return themeClasses;
};

/**
 * Create the heading component for the image text.
 * 
 * @param {string} heading 
 * 
 * @returns {jsx}
 */
const Heading = ({ heading }) => (
    <h2 className="image-text__heading" dangerouslySetInnerHTML={{ __html: translator(heading) }}></h2>
);

/**
 * Create the paragraph component for the image text.
 * 
 * @param {string} paragraph 
 * 
 * @returns {jsx}
 */
const Paragraph = ({ paragraph }) => (
    <p className="image-text__paragraph" dangerouslySetInnerHTML={{ __html: translator(paragraph) }}></p>
);

/**
 * Create the image component for the image text.
 *
 * @param {string} image
 *
 * @returns {jsx}
 */
const Image = ({ image }) => (
    <div className="image-text__image">
        <div className="image-text__image-inner">
            <img src={image.src} alt={image.credit} />
        </div>
    </div>
);

/**
 * Consctruct the component.
 *
 * @param {Object} props
 */
const ImageText = props => {
    const {
        color,
        reverse,
        heading,
        image,
        paragraph
    } = props;

    const theme = __getThemeClasses(color, reverse);

    return (
        <section className={theme.wrapper}>
            <Container>
                <Row className={theme.row}>
                    <Col lg={5}>
                        <div className="image-text__content">
                            <Heading heading={heading} />
                            <Paragraph paragraph={paragraph} />
                        </div>
                    </Col>
                    <Col lg={7}>
                        <Image image={image} />
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
ImageText.defaultProps = {
    color: '',
    reverse: false,
    heading: {
        en: '',
        sm: ''
    },
    image: {
        src: '',
        credit: '',
    },
    paragraph: {
        en: '',
        sm: ''
    },
};

/**
 * Define the prop property types.
 *
 * @type {Object}
 */
ImageText.propTypes = {
    color: PropTypes.oneOf(COLORS),
    reverse: PropTypes.bool,
    heading: PropTypes.object,
    image: PropTypes.object,
    paragraph: PropTypes.object,
};

export default ImageText;