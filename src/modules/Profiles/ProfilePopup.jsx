// Import dependencies
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getProfilePic } from '../../js/utils/utils';
import { translator } from '../../js/utils/utils.js';

class ProfilePopup extends React.Component {
    constructor (props) {
        super(props);

        this.closeProfile = this.closeProfile.bind(this);
    }

    closeProfile (e) {
        if (e.target.classList.contains('profile-popup-close')) {
            this.props.closeProfile();
        }
    }

    render() {
        const active = typeof this.props.profile === 'object';
        const popupClasses = active ?
            'profile-popup profile-popup-close active' :
            'profile-popup'
        ;
        const pfp = active ?
            getProfilePic(this.props.profile.img, this.props.profileImages) :
            ''
        ;

        return (
            <section className={popupClasses} onClick={this.closeProfile}>
                <Container className="profile-popup-close">
                    <Row className="profile-popup-close">
                        <Col sm={12} md={{ span: 8, offset: 2 }} xl={{ span: 6, offset: 3 }} className="profile-popup-close">
                            {
                                active &&
                                <div className="profiles__card">
                                    <button className="profiles__card-close profile-popup-close" onClick={this.closeProfile}>
                                        <span className="profiles__card-close-icon profile-popup-close"></span>
                                    </button>
                                    <div className="profiles__card-img-wrapper">
                                        <div className="profiles__card-img"
                                            aria-label={this.props.profile.name}
                                            role="img"
                                            style={{
                                                backgroundImage: `url('${pfp.slug ? pfp.slug : undefined}')`,
                                                backgroundPosition: pfp.position
                                            }}
                                        ></div>
                                    </div>
                                    <div className="profiles__card-content">
                                        <h4 className="profiles__card-name">{this.props.profile.name}</h4>
                                        <p className="profiles__card-role">{this.props.profile.role}</p>
                                        <p className="profiles__card-blurb" dangerouslySetInnerHTML={{ __html: translator(this.props.profile.blurb) }}></p>
                                    </div>
                                </div>
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

/**
 * Defining the default props for the component.
 *
 * @type {Object}
 */
ProfilePopup.defaultProps = {
    profile: '',
    profileImages: []
};

/**
 * Define the prop property types.
 *
 * @type {Object}
 */
ProfilePopup.propTypes = {
    closeProfile: PropTypes.func,
    profile: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    profileImages: PropTypes.object
};

export default ProfilePopup;