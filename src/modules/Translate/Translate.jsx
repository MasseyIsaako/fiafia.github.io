// Import dependencies
import React from 'react';

/**
 * Create the component.
 * 
 * @param {object} props 
 * 
 * @returns {jsx}
 */
class Translate extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * Toggle the dropdown field.
     * 
     * @return {void}
     */
    toggleDropdown (e) {
        e.stopPropagation();

        e.target.parentNode.classList.toggle('translate__dropdown--active');
    };

    /**
     * Set the language
     * 
     * @param {string} lang 
     */
    setLang (lang) {
        const isHome = document.querySelector('.home');
        const body = document.querySelector('body');
        const langSpans = document.querySelectorAll(`[data-lang]`);

        body.classList = isHome instanceof HTMLElement ? `home ${lang}` : lang;

        if (langSpans.length > 0) {
            langSpans.forEach(span => {
                if (span.dataset.lang === lang) {
                    span.setAttribute('aria-hidden', false);
                } else {
                    span.setAttribute('aria-hidden', true);
                }
            });
        }
    };

    /**
     * Set the default language in localStorage.
     * 
     * @param {object} e 
     * @param {object} localStorage 
     * 
     * @returns {void}
     */
    toggleLanguage (e, localStorage) {
        e.stopPropagation();

        this.setLang(e.target.dataset.lang);
        localStorage.setItem('defaultLang', e.target.dataset.lang);
    };

    /**
     * Component has mounted in the DOM.
     */
    componentDidMount () {
        // window.addEventListener('load', () => {
            const localStorage = window.localStorage;
            const defaultLang = localStorage.getItem('defaultLang');
    
            if (defaultLang && defaultLang.length > 0) {
                this.setLang(defaultLang);
            } else {
                localStorage.setItem('defaultLang', 'english');
            }
    
            window.addEventListener('click', e => {
                if (!e.target.classList.contains('translate')) {
                    const dropdown = document.querySelector('.translate__dropdown');
    
                    dropdown.classList.remove('translate__dropdown--active');
                }
            });
        // })
    }

    render () {
        return (
            <div className="translate">
                <div className="translate__dropdown dropdown" onClick={e => (this.toggleDropdown(e))}>
                    <button
                        className="btn dropdown-toggle fa fa-language translate__icon"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Select a language</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <span className="dropdown-item" data-lang="english" onClick={e => (this.toggleLanguage(e, localStorage))}>English</span>
                        <span className="dropdown-item" data-lang="samoan" onClick={e => (this.toggleLanguage(e, localStorage))}>Samoan</span>
                    </div>
                </div>
            </div>
        );
    }
};

export default Translate;