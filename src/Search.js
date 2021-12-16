// JavaScript source code
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import SortBy from './SortBy'
import l from './locate'

class Search extends Component {
    state = {
        query: ''
    }

    updatequery = (q) => {
        this.setState({ query: q })
    }
    search = (e, func) => {
        e.preventDefault();
        func(this.state.query);

    }

    render() {
        const { updateSearchParam, language } = this.props;
        return (
            <Form inline onSubmit={(e) => this.search(e, updateSearchParam)}>
                <FormControl type="text" placeholder={l(language, 'Search')} className="mr-sm-2" style={{ width: '60%' }} onChange={(e) => this.updatequery(e.target.value)} />
                <Button variant="outline-light" className="mr-sm-2" onClick={(e) => this.search(e, updateSearchParam)}>{l(language, 'Search')}</Button>
                <SortBy sortBy={this.props.sortBy} language={language} />
            </Form>
        )

    }

}

export default Search;