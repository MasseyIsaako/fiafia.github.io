// https://greensock.com/docs/v3/GSAP/Timeline/fromTo()
const tl = gsap.timeline();

// Import dependencies
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class RegisterForm extends React.Component {
    constructor () {
        super();
    }

    toggleWindowScroll (toggle) {
        const body = document.querySelector('body');

        if (body instanceof HTMLElement) {
            body.style.overflow = toggle;
        }
    };

    mountRegisterForm (close, form, openButtons) {
        // Open the form
        openButtons.forEach(btn => {
            btn.addEventListener('click', () => {
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
            const close = document.querySelector('.register-form__close');
            const form = document.querySelector('.register-form');
            const openButtons = Array.from(
                document.querySelectorAll('.register-form-open')
            );

            if (close instanceof HTMLElement &&
                form instanceof HTMLElement &&
                openButtons.length > 0
            ) {
                this.mountRegisterForm(close, form, openButtons);
            }
        });
    };

    render() {
        return (
            <section className="register-form">
                <Container>
                    <Row>
                        <Col sm={12} className="d-flex justify-content-end">
                            <span className="register-form__close"></span>
                        </Col>
                        <Col sm={12}>
                            <div className="register-form__inner">
                                <iframe className="register-form__iframe"
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSe_XAwoG9v5JDc2LhtkFIeS0W2CfoJGZQcT6Gqv1Ygf9ewUsg/viewform?embedded=true"
                                    frameBorder="0"
                                    marginHeight="0"
                                    marginWidth="0"
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
};

export default RegisterForm;