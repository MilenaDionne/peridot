// JavaScript source code
import React, { Component } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

class PageTitle extends Component {

    render() {
        const { changeLanguage } = this.props
        return (
            <div className="bg-dark w-100">
                <Row className="justify-content-end">
                    <Col sm="1">
                        <div>
                            <select onChange={(e) => changeLanguage(e.target.value)}>
                                <option value='en' id='languageEN'>English</option>
                                <option value='fr' id='languageFR'>Français</option>
                            </select>
                        </div>
                    </Col>
                </Row> 
                <Row>
                    <Col>
                        <div >
                            <h1 className="text-center text-white" style={{height: '80px'}}>Peridot</h1>
                        </div>
                    </Col>
                </Row> 
            
            </div>
        )
    }
}

export default PageTitle;