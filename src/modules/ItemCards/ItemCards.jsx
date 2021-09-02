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
                    <Col key={index}>
                        <h2 dangerouslySetInnerHTML={{ __html: translator(card.heading) }}></h2>
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
            <section>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <h1>{this.state.heading}</h1>
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