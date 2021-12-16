import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import l from '../locate';
import Image from 'react-bootstrap/Image'
import './NewPost.css'

class NewPost extends Component {

    flag = false;
    state = {
        imgSrc: '../../images/addImage.png'
    }


    handleChange = (e) => {
        console.log('target id: ', e.target.id)
        if (e.target.id === 'imgSrc') {
            this.setState({
                [e.target.id]: URL.createObjectURL(e.target.files[0])
            })

        } else if (e.target.id === 'agreement') {

        } else {
            this.setState({
                [e.target.id]: e.target.value
            })
        }

        var bt = document.getElementById('submit');
        var type = document.getElementById('type');
        var size = document.getElementById('size');
        var name = document.getElementById('name');
        var cost = document.getElementById('cost');
        var owneremail = document.getElementById('owneremail');
        var ownerphone = document.getElementById('ownerphone');
        var mainColor = document.getElementById('mainColor');
        var agreement = document.getElementById('agreement');
        if (size.value !== '' && type.value !== '' && agreement.checked === true && name.value !== '' && mainColor.value !== '' && cost.value !== '' && (owneremail.value !== '' || ownerphone !== '')) {
            bt.disabled = false;   // Enable the button.

        }
        else {
            bt.disabled = true;   // Disable the button.
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewPost(this.state);

        this.closeModal();

    }

    openModal() {
        document.getElementById("backdrop").style.display = "block"
        document.getElementById("newPostModal").style.display = "block"
        document.getElementById("newPostModal").className += "show"
    }

    closeModal = () => {
        document.getElementById("backdrop").style.display = "none"
        document.getElementById("newPostModal").style.display = "none"
        document.getElementById("newPostModal").className += document.getElementById("newPostModal").className.replace("show", "")
        document.getElementById("newPostModalForm").reset();
        this.setState({ imgSrc: '../../images/addImage.png' })
    }



    render() {
        const { language, filters, sizes, colors } = this.props;



        const valueColors = colors.map((value, key) => {
            return (
                <option key={key}>{l(language, value)}</option>
            )
        })

        const clothsType = filters.values.map((value, key) => {
            return (
                <option key={key}>{l(language, value)}</option>
            )
        })

        const clothsSize = sizes.map((value, key) => {
            return (
                <option key={key}>{l(language, value)}</option>
            )
        })

        return (
            <Col >
                <button type="button" className="btn w-100 bgNewPost" onClick={this.openModal}>
                    {l(language, 'NewPostTitle')}
                </button>
                <div className="modal fade" id="newPostModal" tabIndex="-1" role="dialog" aria-labelledby="newPostModalLabel" aria-modal="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="newPostModalLabel">{l(language, 'NewPostTitle')}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <Form onSubmit={this.handleSubmit} id="newPostModalForm">
                                <div className="modal-body">
                                    <Form.Row>
                                        <div className="col-5">
                                            <Row>
                                                <label className="btn btn-default p-0">
                                                    <input type="file" id="imgSrc" accept=".jpg, .jpeg, .png, .jfif" onChange={this.handleChange} />
                                                </label>
                                            </Row>
                                            <div className="row-cols-2 text-center ">
                                                <Image src={this.state.imgSrc} className="img-fluid" alt="Responsive image"></Image>
                                            </div>
                                        </div>
                                        <div className="col-1"></div>
                                        <div className="col-6">
                                            <Form.Group as={Row} className="was-validated">
                                                <Form.Label column sm="2">
                                                    {l(language, 'Name')}
                                                </Form.Label>
                                                <Col sm="10">
                                                    <Form.Control type="name" id="name" className="is-invalid" placeholder={l(language, 'Name')} onChange={this.handleChange} aria-describedby="validationServerUsernameFeedback" required />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} className="was-validated">
                                                <Form.Label column sm="4">
                                                    {l(language, 'ItemType')}
                                                </Form.Label>
                                                <Col sm="8">
                                                    <Form.Control as="select" id="type" className="my-1 mr-sm-2 is-invalid" custom onChange={this.handleChange} required>
                                                        <option value=""> {l(language, 'SelectType')}</option>
                                                        {clothsType}
                                                    </Form.Control>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} className="was-validated">
                                                <Form.Label column sm="2">
                                                    {l(language, 'ItemPrice')}
                                                </Form.Label>
                                                <Col sm="10">
                                                    <Form.Control type="number" step="0.01" className="is-invalid" id="cost" placeholder={l(language, 'ItemPrice')} onChange={this.handleChange} required />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} className="was-validated">
                                                <Form.Label column sm="2">
                                                    {l(language, "ItemSize")}
                                                </Form.Label>
                                                <Col sm="10">
                                                    <Form.Control as="select" id="size" className="my-1 mr-sm-2 is-invalid" custom onChange={this.handleChange} required>
                                                        <option value="">{l(language, "ChooseSize")}</option>
                                                        {clothsSize}
                                                    </Form.Control>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Description</Form.Label>
                                                <Form.Control as="textarea" id="description" rows={3} onChange={this.handleChange} />
                                            </Form.Group>
                                            <Form.Group>
                                                <Row>
                                                    <Col className="was-validated">
                                                        <Form.Control as="select" id="mainColor" className="my-1 mr-sm-2 is-invalid" custom onChange={this.handleChange} required>
                                                            <option value=""> {l(language, "Color1")}</option>
                                                            {valueColors}
                                                        </Form.Control>
                                                    </Col>
                                                    <Col>
                                                        <Form.Control as="select" id="secondaryColor" className="my-1 mr-sm-2" custom onChange={this.handleChange}>
                                                            <option value="">{l(language, "Color2")}</option>
                                                            {valueColors}
                                                        </Form.Control>
                                                    </Col>
                                                </Row>
                                            </Form.Group>
                                        </div>
                                    </Form.Row>
                                    <div>
                                        <h4>{l(language, 'NewContactInfo')}</h4>
                                    </div>
                                    <Row>
                                        <Col>
                                            <Form.Control placeholder={l(language, 'NewContactName')} id="ownername" onChange={this.handleChange} />

                                        </Col>
                                        <Col className="was-validated">
                                            <Form.Control type="email" placeholder={l(language, 'NewContactEmail')} id="owneremail" className="is-invalid" onChange={this.handleChange} required />
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Form.Row>
                                        <Col>
                                            <Form.Control pattern="[0-9]{10}" placeholder={l(language, 'NewContactPhone')} title="Phone number should be 10 digits" id="ownerphone" onChange={this.handleChange} />
                                        </Col>
                                        <Col className="was-validated">
                                            <Form.Group>
                                                <Form.Check type="checkbox" id="agreement" label={l(language, 'NewAgreementConditions')} onChange={this.handleChange} required />
                                            </Form.Group>
                                        </Col>
                                    </Form.Row>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={this.closeModal}>{l(language, 'Cancel')}</button>
                                    <button type="submit" id="submit" className="btn btn-primary" disabled>{l(language, 'AddPost')}</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade show" id="backdrop" style={{ display: 'none' }}></div>
            </Col>

        )
    }
}

export default NewPost;