// Import dependencies
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RSVPBannerData from './RSVPBanner.json';

class RSVPBanner extends React.Component {
    constructor() {
        super();

        this.state = {
            ...RSVPBannerData
        }
    }

    getHeading () {
        return (
            <h1 className="rsvp-banner__heading">
                <span className="english">{this.state.heading.en}</span>
                <span className="samoan">{this.state.heading.sm}</span>
            </h1>
        );
    }

    getSummary () {
        return (
            <p className="rsvp-banner__summary">
                <span className="english">{this.state.summary.en}</span>
                <span className="samoan">{this.state.summary.sm}</span>
            </p>
        );
    }

    getImage () {
        return (
            <div className="rsvp-banner__image"
                style={{ backgroundImage: `url('${this.state.img.src}')` }}
                aria-label={this.state.img.alt}
            ></div>
        );
    }

    getCTA () {
        return (
            <button type="button"
                className="btn btn-primary btn-lg register-form-open rsvp-banner__cta"
            >
                <span className="english">{this.state.cta.en}</span>
                <span className="samoan">{this.state.cta.sm}</span>
            </button>
        );
    }

    render() {
        const classTheme = `rsvp-banner rsvp-banner--${this.state.theme}`;
        const heading = this.getHeading();
        const summary = this.getSummary();
        const image = this.getImage();
        const cta = this.getCTA();

        return (
            <section className={classTheme}>
                <Container>
                    <Row className="flex-column-reverse flex-md-row">
                        <Col sm={12} md={5}>
                            <div className="rsvp-banner__content">
                                <div className="rsvp-banner__text">
                                    { heading }
                                    { summary }
                                    { cta }
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={7}>
                            { image }
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default RSVPBanner;