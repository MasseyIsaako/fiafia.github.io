// Import dependencies
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FaqAccordionsData from './FaqAccordions.json';
import { translator } from '../../js/utils/utils.js';

class FaqAccordions extends React.Component {
    constructor () {
        super();

        this.state = { ...FaqAccordionsData };
    }

    openAccordion (accordion, timing) {
        accordion.style.display = 'block';
        accordion.style.height = `${accordion.scrollHeight}px`;

        // After 1.5s, set accordion height to auto so that the container
        // flexes to the content
        setTimeout(() => {
            accordion.style.height = 'auto';
        }, timing);
    };

    closeAccordion (accordion, timing) {
        // Set transition to none so that js frame method
        // can handle the timing.
        accordion.style.transition = 'none';

        // Set the variables for the closing animation.
        let scrollHeight = accordion.scrollHeight;
        let el = setInterval(frame, timing / scrollHeight);

        // The function that handles the changing height.
        function frame() {
            if (scrollHeight <= 0) {
                clearInterval(el);

                // Removing style attribute to clear transition timing.
                accordion.removeAttribute('style');
            } else {
                scrollHeight = scrollHeight - 4;
                accordion.style.height = scrollHeight + 'px';
            }
        }
    };

    toggleAccordion (e) {
        // Ensure that only click and keydown events trigger the accordion
        if (e.type === 'click' ||
            (e.type === 'keydown' && e.key === 'Enter')
        ) {
            const srcElement = !e.target.classList.contains('faq-accordion__link') ?
                e.target.parentNode :
                e.target
            ;
            const accordion = srcElement.parentNode.nextElementSibling;
            const parentAccordion = srcElement.parentNode;

            // Toggle activeAccordionClass based on switch and call the
            // open/close handlers.
            switch (srcElement.classList.contains('active')) {
                // User is hiding the accordion
                case true:
                    srcElement.classList.remove('active');
                    accordion.setAttribute('aria-hidden', true);
                    accordion.setAttribute('aria-expanded', false);
                    parentAccordion.classList.remove('active');
                    this.closeAccordion(accordion, 500);
                    break;

                // User is showing the accordion
                case false:
                    srcElement.classList.add('active');
                    accordion.setAttribute('aria-hidden', false);
                    accordion.setAttribute('aria-expanded', true);
                    parentAccordion.classList.add('active');
                    this.openAccordion(accordion, 500);
                    break;
            }
        }
    }

    getHeading (heading) {
        return (
            <h2 className="faq__heading" dangerouslySetInnerHTML={{ __html: translator(heading) }}></h2>
        );
    }

    getQuestion ({ en, sm }, index) {
        return (
            <button className="faq-accordion__link" onClick={e => { this.toggleAccordion(e) }}>
                <span className="faq-accordion__number">{index + 1}</span>
                <span className="english">{en}</span>
                <span className="samoan">{sm}</span>
            </button>
        );
    }

    getAnswer (answer) {
        return (
            <div className="faq-accordion__content" dangerouslySetInnerHTML={{ __html: translator(answer) }}></div>
        );
    }

    getAccordions () {
        let accordions = false;

        if (this.state.accordions.length > 0) {
            accordions = [];

            this.state.accordions.forEach((accordion, index) => {
                const question = this.getQuestion(accordion.question, index);
                const answer = this.getAnswer(accordion.answer);

                accordions.push(
                    <article className="faq-accordion__item" key={index}>
                        <div className="faq-accordion__item-header">{question}</div>
                        <div className="faq-accordion__target"
                            aria-hidden="true"
                            aria-expanded="false"
                        >{answer}</div>
                    </article>
                );
            });
        }

        return accordions;
    }

    render () {
        const accordions = this.getAccordions();
        const heading = this.getHeading(this.state.heading);

        return (
            <section className="faq">
                <Container>
                    <Row>
                        <Col sm={12}>
                            { heading }
                        </Col>
                        <Col sm={12} md={{ span: 8, offset: 2}}>
                            <div className="faq-accordion">
                                { accordions }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default FaqAccordions;