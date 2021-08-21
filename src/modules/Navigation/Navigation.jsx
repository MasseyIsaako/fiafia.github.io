// Import dependencies
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Translate from '../Translate/Translate';
import NavigationLinks from './Navigation.json';
import { translator } from '../../js/utils/utils';

// https://greensock.com/docs/v3/GSAP/Timeline/fromTo()
const tl = gsap.timeline();

class Navigation extends React.Component {
    constructor () {
        super();
    }

    /**
     * Toggle the navigation background modifier class,
     * depending on the scroll position of the user.
     * 
     * @param {object} navigation 
     * 
     * @returns {void}
     */
    toggleNavBackground (navigation) {
        if (document.body.scrollTop > 10) {
            navigation.classList.add('navigation--scrolled');
        } else {
            navigation.classList.remove('navigation--scrolled');
        }
    }

    /**
     * If the component has mounted, add the event listener
     * and also run the entrance animation.
     */
    componentDidMount () {
        const navigation = document.querySelector('.navigation');

        if (navigation instanceof HTMLElement) {
            window.addEventListener('scroll', () => {
                this.toggleNavBackground(navigation);
            });

            tl.fromTo(navigation, {
                opacity: 0
            }, {
                duration: 0.5,
                opacity: 1
            });
        }
    }

    getLinks () {
        let links = false;

        if (NavigationLinks.length > 0) {
            links = [];

            NavigationLinks.forEach((item, index) => {
                if (item.slug.length > 0 && item.title) {
                    const link = `${window.location.origin}${item.slug}`;

                    links.push(
                        <li key={index} className="nav-item">
                            <a className="nav-link" href={link} dangerouslySetInnerHTML={{ __html: translator(item.title) }}></a>
                        </li>
                    );
                }
            });
        }

        return links;
    }

    render () {
        const links = this.getLinks();

        return (
            <nav className="navigation">
                <Container>
                    <Row>
                        <Col>
                            <div className="navbar navbar-expand-lg">
                                <button className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarNav"
                                    aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <i className="fa fa-bars"></i>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        {links}
                                    </ul>
                                </div>
                                <Translate />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </nav>
        );
    }
}

export default Navigation;