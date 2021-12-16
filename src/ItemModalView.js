import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import l from './locate';

class ItemModalView extends Component {
    state = {
        hideOwnerInfo: true,
        contactOwnerBtnText: 'Contact Owner'
    }
    componentDidUpdate(prevProps) {
        if (prevProps.language !== this.props.language) {
            this.setState({ contactOwnerBtnText: l(this.props.language, 'ItemContactOwner') })
        }
    }


    changeHideOwnerInfo = () => {
        this.setState({ hideOwnerInfo: !this.state.hideOwnerInfo });
    }

    changeContactOwnerBtnText = (language) => {
        if (this.state.hideOwnerInfo) {
            this.setState({
                contactOwnerBtnText: l(language, 'ItemHideOwnerInfo')
            })
        }
        else {
            this.setState({
                contactOwnerBtnText: l(language, 'ItemContactOwner')
            })
        }
    }

    btnOnClick = (language) => {
        this.changeContactOwnerBtnText(language);
        this.changeHideOwnerInfo();
    }
    render() {
        const { item, modalSize, show, closeModal, language } = this.props;

        return (
            <Modal
                keyboard={false}
                show={show}
                size={modalSize}
                onHide={closeModal}
                onExit={closeModal}
            >
                <ModalTitle className="text-left">
                    <img src={item.imgSrc} alt="" className="img-fluid" style={{ height: '40px' }}/>
                    {item.name}
                    <button className="close mr-2" onClick={closeModal}>&times;</button>
                    <div className='ml-1 font-italic' style={{fontSize: '15px'}}>
                        {item.adress}
                    </div>
                </ModalTitle>
                <ModalBody>
                    <div className="row">
                        <div>
                            <table className="table text-left">
                                <tbody>
                                    <tr>
                                        <th className="pr-8" >{item.type}</th>
                                    </tr>
                                    <tr>
                                        <th className="pr-4" scope="row"> {l(language, 'ItemDescription')}</th>
                                        <td>{item.description}</td>
                                    </tr>
                                    <tr>
                                    <th className="pr-4" scope="row">
                                        {l(language, 'ItemPrice')}
                                        <img src="./icons/dollarIcon.png" alt="" className="img-fluid ml-1" style={{ width: '1rem' }} />
                                    </th>
                                    <td>{item.cost}$</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="text-center mt-2 mb-2">
                        <button className="btn  btn-dark" onClick={() => this.btnOnClick(language)}>{this.state.contactOwnerBtnText}</button>
                    </div>
                    <div hidden={this.state.hideOwnerInfo}>

                        <table className="table text-center">
                            <tbody>
                                <tr>
                                    <th>{l(language, 'Name')}</th>
                                    <td>{item.ownername}</td>
                                </tr>
                                <tr>
                                    <th>{l(language, 'Email')}</th>
                                    <td>{item.owneremail}</td>
                                </tr>
                                <tr>
                                    <th>{l(language, 'PhoneNumber')}</th>
                                    <td>{item.ownerphone}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </ModalBody>
            </Modal >

        )
    }
}

export default ItemModalView;