import React, { Component } from 'react'
import ReactTooltip from "react-tooltip";
import ItemModalView from './ItemModalView';
import l from './locate';

class Item extends Component {
    state = {
        show: false
    }
    closeModal = () => {
        this.setState({ show: false });
    }
    render() {
        const { item, language } = this.props;

        return (
            <div className="card m-3" style={{ width: '100%' }}>
                <div className="card-body card-title text-center">
                    <div className="row font-weight-bold">
                        <div>
                            <img src={item.imgSrc} alt="" className="card-img" style={{ height: '40px' }} />
                        </div>
                        <div className="font-weight-bold ml-4">
                            {item.name}
                        </div>
                    </div>
                    <div className="row text-left font-italic">
                        {item.adress}
                    </div>
                </div>
                
                <span className="ml-1 font-weight-bold" data-tip data-for={item.id + 'type'}>
                    {item.type}
                </span>

                <div className="ml-1 mt-2 text-left">
                    {item.description}
                </div>
                <div className="row ml-1 mt-2">
                    <p class="text-left">Salaire:</p>
                    <span className="ml-1" data-tip data-for={item.id + 'cost'}>{item.cost} $</span>
                </div>
                <button className="float-right btn btn-dark" style={{ width: '10rem' }} onClick={() => this.setState({ show: true })}>{l(language, 'MoreInformation')} </button>
                
                <ReactTooltip id={item.id + 'cost'}>{l(language, 'ItemPrice')}</ReactTooltip>
                <ReactTooltip id={item.id + 'type'}>{l(language, 'ItemType')}</ReactTooltip>
                <ItemModalView
                    show={this.state.show}
                    item={item}
                    closeModal={this.closeModal}
                    language={language}

                >
                </ItemModalView>

            </div >
        )
    }
}

export default Item;