import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { translator } from '../../js/utils/utils';
import UploadItemsFormData from './UploadItemsForm.json';

class UploadItemsForm extends React.Component {
    constructor () {
        super();

        this.state = {
            active: false
        };
    }

    injectFormFacade () {
        const s = document.createElement('script');
        s.setAttribute("src", "https://formfacade.com/include/107715893633229583315/form/1FAIpQLSeonv0ii6ScYc63mDI88NYHOKVDJgUpURX-w65f10N39JH8Ew/bootstrap.js?div=uploadItemsForm");

        document.body.appendChild(s);
    }

    toggleWindowScroll () {
        const body = document.querySelector('body');

        body.classList.toggle('upload-items-form-active');
    }

    toggleUploadForm (action) {
        console.log(action);
        if (action === 'toggle' ||
            action.target.classList.contains('upload-items-form-open') ||
            action.target.parentNode.classList.contains('upload-items-form-open') ||
            action.target.classList.contains('upload-items-form-close')
        ) {
            this.setState({
                active: !this.state.active
            });

            this.toggleWindowScroll();
        }
    }

    mountOpenUpload () {
        const openBtns = Array.from(
            document.querySelectorAll('.upload-items-form-open')
        );

        if (openBtns.length > 0) {
            openBtns.forEach(btn => {
                btn.addEventListener('click', e => {
                    e.preventDefault();

                    this.toggleUploadForm(e);

                    return false;
                });
            });
        }
    }

    openForm () {
        this.toggleUploadForm('toggle');
        window.open(UploadItemsFormData.btn.link);
    }

    componentDidMount() {
        // this.injectFormFacade();
        this.mountOpenUpload();
    }

    render() {
        const classes = this.state.active ?
            'upload-items-form upload-items-form-close active' :
            'upload-items-form'
        ;

        return (
            <section className={classes} onClick={e => { this.toggleUploadForm(e); }}>
                <Container className="upload-items-form-close">
                    <Row className="upload-items-form-close">
                        <Col sm={12} md={{ span: 8, offset: 2 }} xl={{ span: 6, offset: 3 }} className="upload-items-form-close">
                            <div className="upload-items-form__inner">
                                <h1 className="upload-items-form__title"
                                    dangerouslySetInnerHTML={{
                                        __html: translator(UploadItemsFormData.title)
                                    }}
                                ></h1>
                                <p className="upload-items-form__summary"
                                    dangerouslySetInnerHTML={{
                                        __html: translator(UploadItemsFormData.summary)
                                    }}
                                ></p>
                                <button className="btn btn-lg upload-items-form__btn"
                                    dangerouslySetInnerHTML={{
                                        __html: translator(UploadItemsFormData.btn.yes)
                                    }}
                                    onClick={() => { this.openForm(); }}
                                ></button>
                                <button className="btn btn-lg upload-items-form__btn upload-items-form__btn--no"
                                    onClick={() => { this.toggleUploadForm('toggle'); }}
                                    dangerouslySetInnerHTML={{
                                        __html: translator(UploadItemsFormData.btn.no)
                                    }}
                                ></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
};

export default UploadItemsForm;