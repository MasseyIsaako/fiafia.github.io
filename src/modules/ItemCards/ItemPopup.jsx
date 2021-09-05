// Import dependencies
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getPic, translator } from '../../js/utils/utils.js';

class ItemPopup extends React.Component {
    constructor(props) {
        super(props);

        this.closeItem = this.closeItem.bind(this);
    }

    closeItem(e) {
        if (e.target.classList.contains('item-popup-close')) {
            this.props.closeItem();
        }
    }

    render() {
        const active = typeof this.props.item === 'object';
        const popupClasses = active ?
            'item-popup item-popup-close active' :
            'item-popup'
        ;
        const image = active ?
            getPic(this.props.item.image, this.props.images) :
            ''
        ;

        return (
            <section className={popupClasses} onClick={(e) => { this.closeItem(e) }}>
                <Container className="item-popup-close">
                    <Row className="item-popup-close">
                        <Col sm={12} md={{ span: 8, offset: 2 }} xl={{ span: 6, offset: 3 }} className="item-popup-close">
                            {
                                active &&
                                <div className="item-popup__card">
                                    <button className="item-popup__card-close item-popup-close">
                                        <i className="fa fa-close item-popup-close"></i>
                                    </button>
                                    <div className="item-popup__card-image"
                                        style={{ backgroundImage: `url('${image.slug}')`, backgroundPosition: image.position }}
                                        role="img"
                                        aria-label="An image"
                                    ></div>
                                    <div className="item-popup__card-content">
                                        {/* <div className="item-popup__card-content"> */}
                                            <h2 dangerouslySetInnerHTML={{ __html: translator(this.props.item.heading) }}
                                                className="item-popup__card-heading"
                                            ></h2>
                                            <p dangerouslySetInnerHTML={{ __html: translator(this.props.item.text) }}
                                                className="item-popup__card-text"
                                            ></p>
                                        {/* </div> */}
                                    </div>
                                </div>
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

/**
 * Defining the default props for the component.
 *
 * @type {Object}
 */
ItemPopup.defaultProps = {
    images: {},
    item: ''
};

/**
 * Define the prop property types.
 *
 * @type {Object}
 */
ItemPopup.propTypes = {
    closeItem: PropTypes.func,
    images: PropTypes.object,
    item: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
};

export default ItemPopup;