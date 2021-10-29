// Import dependencies
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ItemCardsData from './ItemCards.json';
import ItemPopup from './ItemPopup.jsx';
import { getPic, translator } from '../../js/utils/utils';
import ItemCardsImages from '../../images/ItemPopup/*.*';

class ItemCards extends React.Component {
    constructor() {
        super();

        this.closeItem = this.closeItem.bind(this);

        this.state = {
            item: ''
        };
    }

    closeItem() {
        const body = document.querySelector('body');
        body.classList.remove('item-popup-open');

        this.setState({
            item: ''
        });
    }

    openItem (card) {
        const body = document.querySelector('body');
        body.classList.add('item-popup-open');

        this.setState({
            item: card
        });
    }

    buildCards() {
        let cards = false;

        if (ItemCardsData.cards.length > 0) {
            cards = [];

            ItemCardsData.cards.forEach((card, index) => {
                const image = getPic(card.image, ItemCardsImages);

                cards.push(
                    <Col key={index} lg={3} className="pb-3 d-flex">
                        <div className="item-card" onClick={() => { this.openItem(card) }}>
                            <h2 className="item-card__heading">
                                <span className="english">{`${index + 1}) ${card.previewHeading.en}`}</span>
                                <span className="samoan">{`${index + 1}) ${card.previewHeading.sm}`}</span>
                            </h2>
                            <div className="item-card__image"
                                style={{ backgroundImage: `url('${image.slug}')` }}
                            ></div>
                        </div>
                    </Col>
                );
            });
        }

        return cards;
    }

    render() {
        const cards = this.buildCards();

        return (
            cards &&
            <>
                <section className="item-cards">
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <h1 className="item-cards__heading" dangerouslySetInnerHTML={{ __html: translator(ItemCardsData.heading) }}></h1>
                                <h3 className="item-cards__summary" dangerouslySetInnerHTML={{ __html: translator(ItemCardsData.summary) }}></h3>
                            </Col>
                        </Row>
                        <Row>
                            {cards}
                        </Row>
                    </Container>
                </section>
                <ItemPopup
                    closeItem={this.closeItem}
                    item={this.state.item}
                    images={ItemCardsImages}
                />
            </>
        );
    }
}

export default ItemCards;