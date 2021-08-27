// Import dependencies
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RSVPBannerData from './RSVPBanner.json';
import { ReactComponent as RSVPIcon } from '../../svg/form-icon-white.svg';
import { translator } from '../../js/utils/utils';

class RSVPBanner extends React.Component {
    constructor (props) {
        super(props);

        if (RSVPBannerData.length > 0) {
            RSVPBannerData.forEach(data => {
                if (data.option === this.props.option) {
                    this.state = { ...data };
                }
            });
            
        }

    }

    getHeading () {
        return (
            <h1 className="rsvp-banner__heading" dangerouslySetInnerHTML={{ __html: translator(this.state.heading) }}></h1>
        );
    }

    getSummary () {
        return (
            <p className="rsvp-banner__summary" dangerouslySetInnerHTML={{ __html: translator(this.state.summary) }}></p>
        );
    }

    getImage () {
        return (
            <div className="rsvp-banner__image"
                style={{ backgroundImage: `url('${this.state.img.src}')` }}
                aria-label={this.state.img.alt}
                role="img"
            ></div>
        );
    }

    getRSVPIcon () {
        return (
            <svg version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 219.376 219.376"
                fill="#ffffff"
            >
                <path d="M127.518,0H40.63c-6.617,0-12,5.383-12,12v195.376c0,6.617,5.383,12,12,12h138.117c6.617,0,12-5.383,12-12V59.227
                    c0-3.204-1.248-6.217-3.514-8.484l-51.364-47.36C133.619,1.2,130.661,0,127.518,0z M175.747,204.376H43.63V15h71.768v40.236
                    c0,8.885,7.225,16.114,16.105,16.114h44.244V204.376z M131.503,56.35c-0.609,0-1.105-0.5-1.105-1.114v-31.58l34.968,32.693H131.503z
                    M65.499,97.805c-5.14,0-9.321,4.182-9.321,9.321c0,5.14,4.182,9.321,9.321,9.321c5.14,0,9.321-4.182,9.321-9.321
                    C74.82,101.987,70.638,97.805,65.499,97.805z M82.499,99.627h79.5v15h-79.5V99.627z M65.499,127.805
                    c-5.14,0-9.321,4.182-9.321,9.321s4.182,9.321,9.321,9.321c5.14,0,9.321-4.182,9.321-9.321S70.638,127.805,65.499,127.805z
                    M82.499,129.626h79.5v15h-79.5V129.626z M65.499,157.805c-5.14,0-9.321,4.182-9.321,9.321s4.182,9.321,9.321,9.321
                    c5.14,0,9.321-4.182,9.321-9.321S70.638,157.805,65.499,157.805z M82.499,159.626h79.5v15h-79.5V159.626z"
                />
            </svg>

        );
    }

    getCTA () {
        const rsvpIcon = this.getRSVPIcon();

        return (
            <button type="button"
                className="btn btn-primary btn-lg rsvp-banner__cta rsvp-form-open"
            >
                <span className="rsvp-banner__cta-icon">
                    { rsvpIcon }
                </span>
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