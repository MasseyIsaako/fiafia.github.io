// https://greensock.com/docs/v3/GSAP/Timeline/fromTo()
const tl = gsap.timeline();

// Import dependencies
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class RSVPForm extends React.Component {
    constructor () {
        super();
    }

    toggleWindowScroll (toggle) {
        const body = document.querySelector('body');

        if (body instanceof HTMLElement) {
            body.style.overflow = toggle;
        }
    };

    mountForm (close, form, openButtons) {
        // Open the form
        openButtons.forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                tl.to(form, 1, {
                    left: '0',
                });

                this.toggleWindowScroll('hidden');
            });
        });

        // Close the form
        close.addEventListener('click', () => {
            tl.to(form, 1, {
                left: '-110%',
            });

            this.toggleWindowScroll('scroll');
        });
    }

    componentDidMount () {
        window.addEventListener('load', () => {
            const close = document.querySelector('.rsvp-form__close');
            const form = document.querySelector('.rsvp-form');
            const openButtons = Array.from(
                document.querySelectorAll('.rsvp-form-open')
            );

            if (close instanceof HTMLElement &&
                form instanceof HTMLElement &&
                openButtons.length > 0
            ) {
                this.mountForm(close, form, openButtons);
            }
        });
    };

    render() {
        return (
            <section className="rsvp-form">
                <Container>
                    <Row>
                        <Col sm={12} className="d-flex justify-content-end">
                            <span className="rsvp-form__close"></span>
                        </Col>
                        <Col sm={12} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                            <div className="rsvp-form__inner">
                                <iframe
                                    className="rsvp-form__iframe"
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSe_XAwoG9v5JDc2LhtkFIeS0W2CfoJGZQcT6Gqv1Ygf9ewUsg/viewform?embedded=true"
                                    frameBorder="0"
                                    title="RSVP Form"
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
};

export default RSVPForm;