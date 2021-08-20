// Import dependencies
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProfileImages from '../../images/Profiles/*.*';
import ProfilesData from './Profiles.json';
import ProfilePopup from './ProfilePopup';
import { getProfilePic } from '../../js/utils/utils';

class Profiles extends React.Component {
    constructor () {
        super();

        this.closeProfile = this.closeProfile.bind(this);

        this.state = {
            profile: ''
        };
    }

    sortProfiles () {
        return ProfilesData.sort((a, b) => a.name.localeCompare(b.name));
    }

    openProfile (profile) {
        const body = document.querySelector('body');
        body.classList.add('profiles-popup-open');

        this.setState({
            profile: profile
        });
    }

    getCards () {
        const orderedProfiles = this.sortProfiles();
        let cards = false;

        if (ProfilesData) {
            cards = [];

            orderedProfiles.forEach((profile, i) => {
                const pfp = getProfilePic(profile.img, ProfileImages);
                const colProps = {
                    sm: 12,
                    md: 6,
                    lg: 4,
                    key: i
                };
                const searchParams = {
                    name: profile.name.toLowerCase(),
                    role: profile.role.toLowerCase(),
                };

                cards.push(
                    <Col {...colProps}
                        data-name={searchParams.name}
                        data-role={searchParams.role}
                    >
                        <div className="profiles__card" onClick={() => { this.openProfile(profile) }}>
                            <img src={pfp.slug ? pfp.slug : undefined}
                                alt={profile.name}
                                className="profiles__card-img"
                                style={{
                                    backgroundPosition: pfp.position
                                }}
                            />
                            <div className="profiles__card-content">
                                <h4 className="profiles__card-name">{profile.name}</h4>
                                <p className="profiles__card-role">{profile.role}</p>
                            </div>
                        </div>
                    </Col>
                );
            });
        }

        return cards;
    }

    searchProfiles (e) {
        const query = e.target.value.toLowerCase();

        this.profileTiles.forEach(tile => {
            if (tile.dataset.name.indexOf(query) > -1) {
                tile.style.display = 'block';
            } else {
                tile.style.display = 'none';
            }
        });
    }

    clearSearch () {
        this.searchInput.value = '';

        this.profileTiles.forEach(tile => {
            tile.style.display = 'block';
        });
    }

    getSearch () {
        return (
            <div className="profiles__search">
                <div className="form-group">
                    <label htmlFor="profiles-search-text">Search</label>
                    <input type="text"
                        className="form-control profiles__search-input"
                        id="profiles-search-text"
                        placeholder="Type here..."
                        onKeyUp={(e) => {this.searchProfiles(e)}}
                    />
                </div>
                <div className="form-group">
                    <button type="button"
                        className="btn btn-md profiles__search-reset"
                        onClick={() => (this.clearSearch())}
                    >Reset</button>
                </div>
            </div>
        );
    }

    closeProfile () {
        const body = document.querySelector('body');
        body.classList.remove('profiles-popup-open');

        this.setState({
            profile: ''
        });
    }

    componentDidMount () {
        const profileTiles = Array.from(document.querySelectorAll('[data-name][data-role]'));
        const searchInput = document.querySelector('.profiles__search-input');

        if (profileTiles.length > 0 && searchInput instanceof HTMLElement) {
            this.profileTiles = profileTiles;
            this.searchInput = searchInput;
        }
    }

    render () {
        const cards = this.getCards();
        const search = this.getSearch();

        return (
            cards &&
            <>
                <section className="profiles">
                    <Container>
                        <Row>
                            <Col sm={12} md={5}>
                                {search}
                            </Col>
                        </Row>
                        <Row>
                            {cards}
                        </Row>
                    </Container>
                </section>
                <ProfilePopup
                    closeProfile={this.closeProfile}
                    profile={this.state.profile}
                    profileImages={ProfileImages}
                />
            </>
        );
    }
}

export default Profiles;