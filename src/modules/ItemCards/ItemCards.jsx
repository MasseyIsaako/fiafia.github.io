// Import dependencies
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ItemCardsData from './ItemCards.json';
import { translator } from '../../js/utils/utils';

class ItemCards extends React.Component {
    constructor () {
        super();

        this.state = { ...ItemCardsData };
    }

    buildCards () {
        let cards = false;

        if (this.state.cards.length > 0) {
            cards = [];

            this.state.cards.forEach((card, index) => {
                cards.push(
                    <Col key={index} md={6} className="pb-3">
                        <div className="item-card">
                            <h2 className="item-card__heading">
                                <span className="english">{card.previewHeading.en}</span>
                                <span className="samoan">{card.previewHeading.sm}</span>
                            </h2>
                            <div className="item-card__image"
                                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1515249094873-c9763a456e05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80')` }}>
                                <span className="item-card__number">{index + 1}</span>
                            </div>
                        </div>
                    </Col>
                );
            });
        }

        return cards;
    }

    componentDidMount() {
        console.log('Component mounted');
    }

    render() {
        const cards = this.buildCards();

        return (
            cards &&
            <section className="item-cards">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <h1 className="item-cards__heading">{this.state.heading}</h1>
                        </Col>
                    </Row>
                    <Row>
                        {cards}
                    </Row>
                </Container>
            </section>
        );
    }
}

export default ItemCards;