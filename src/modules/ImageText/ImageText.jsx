// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { translator } from '../../js/utils/utils.js';
import ImageTextData from './ImageText.json';

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

const __getImageTextContent = option => {
    let data = false;

    if (ImageTextData.length > 0) {
        ImageTextData.forEach(item => {
            if (item.option === option) {
                data = item;
            }
        });
    }

    return data;
};

const Title = ({ title }) => (
    <h2 className="image-text__title" dangerouslySetInnerHTML={{ __html: translator(title) }}></h2>
);

const Paragraph = ({ paragraph }) => (
    <p className="image-text__paragraph" dangerouslySetInnerHTML={{ __html: translator(paragraph) }}></p>
);

const Image = ({ image }) => (
    <div className="image-text__image">
        <div className="image-text__image-inner">
            <img src={image} alt="" />
        </div>
    </div>
);

const CTA = ({ cta }) => (
    cta !== false &&
    <a className={`${cta.iconClasses} btn image-text__cta`}
        dangerouslySetInnerHTML={{ __html: translator(cta.title) }}
        href={cta.link}
    ></a>
);

const ImageText = props => {
    const {
        color,
        cta,
        image,
        paragraph,
        reverse,
        title
    } = __getImageTextContent(props.option);
    const theme = __getThemeClasses(color, reverse);

    return (
        <section className={theme.wrapper}>
            <Container>
                <Row className={theme.row}>
                    <Col lg={5}>
                        <div className="image-text__content">
                            <Title title={title} />
                            <Paragraph paragraph={paragraph} />
                            <CTA cta={cta} />
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
    option: 'test'
};

/**
 * Define the prop property types.
 *
 * @type {Object}
 */
ImageText.propTypes = {
    option: PropTypes.string
};

export default ImageText;