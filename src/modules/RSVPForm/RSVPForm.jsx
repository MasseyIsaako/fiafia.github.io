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

    injectFormFacade () {
        const s = document.createElement('script');
        s.setAttribute("src", "https://formfacade.com/include/107715893633229583315/form/1FAIpQLSe_XAwoG9v5JDc2LhtkFIeS0W2CfoJGZQcT6Gqv1Ygf9ewUsg/bootstrap.js?div=rsvp-form-iframe");

        document.body.appendChild(s);
    }

    componentDidMount () {
        this.injectFormFacade();

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
                        <Col sm={12} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} className="d-flex justify-content-end">
                            <span className="rsvp-form__close"></span>
                        </Col>
                        <Col sm={12} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                            <div className="rsvp-form__inner">
                                <div className="rsvp-form__iframe" id="rsvp-form-iframe"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
};

export default RSVPForm;