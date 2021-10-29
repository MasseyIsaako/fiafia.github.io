// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { getPic, translator } from '../../js/utils/utils';
import TextData from './Text.json';
import ProfileImages from '../../images/Profiles/*.*';

const Title = ({ title }) => (
    <h2 className="text__title" dangerouslySetInnerHTML={{ __html: translator(title) }}></h2>
);

const Paragraph = ({ paragraph }) => (
    <p className="text__paragraph" dangerouslySetInnerHTML={{ __html: translator(paragraph) }}></p>
);

const Image = ({ img }) => {
    const textImage = getPic(img, ProfileImages);

    return (
        <img src={textImage.slug} style={img.styles} />
    );
};

const __getTextContent = ({ option }) => {
    let data = false;

    TextData.forEach(item => {
        if (item.option === option) {
            data = item;
        }
    });

    return data;
};

/**
 * Consctruct the component.
 *
 * @param {Object} props
 */
const Text = props => {
    const data = __getTextContent(props);

    return (
        data &&
        <section className="text">
            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }}>
                        <Title title={data.title} />
                        <Paragraph paragraph={data.paragraph} />
                        {data.img ? <Image img={data.img} /> : null}
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
    option: 'test'
};

/**
 * Define the prop property types.
 *
 * @type {Object}
 */
Text.propTypes = {
    option: PropTypes.string
};

export default Text;