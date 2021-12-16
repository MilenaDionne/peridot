import React, { Component } from 'react';
import ItemsContainer from './ItemsContainer';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FilterContainer from './FilterContainer'
import Search from './Search'
import NewPost from './components/NewPost';
import Navbar from 'react-bootstrap/esm/Navbar';
import l from './locate'
class App extends Component {
  size = {
    XS: 'Extra Small',
    S: 'Small',
    M: 'Medium',
    L: 'Large',
    XL: 'Extra Large'
  }

  colors = ["Red", "Yellow", "Blue", "Purple", "Grey", "Brown", "Black", "White", "Green", "Orange", "Pink", "Gold", "Silver", "Bronze"]

  state = {
    language: 'en',
    idCount: 4,

    items: [
      {
        id: 1,
        name: 'Company 1',
        imgSrc: '../images/building-on-crescent-4303ld.png',
        adress: '3256 route nowhere',
        cost: 50,
        size: this.size.M,
        type: 'Software Developer',
        description: 'Slack is looking for a Software Engineer for the Developer Productivity team, a group of engineers who design and build tools and solutions that will give our engineers greater control over internal systems while improving their ability to deliver software in a sustainable manner, quickly. This team will be taking on greenfield projects while working to improve the long term sustainability of Slack’s engineering model. Software Engineers at Slack work in a highly collaborative environment, and that is particularly true within Developer Productivity where we are passionate about improving the working lives of our fellow engineers across the company. One size does not fit all so please bring your bag of tricks and ability to teach them to others.',

        ownername: 'JL',
        owneremail: 'fakeemail@gmail.com',
        ownerphone: '819-123-4568'
      }, {
        id: 2,
        name: 'Company 2',
        imgSrc: '../images/abstract-cuboid-building-4519ld.png',
        adress: '3256 route nowhere',
        cost: 40,
        size: this.size.S,
        type: 'System Engineer',
        description: "Nous sommes présentement à la recherche d'un Développeur Java pour un contrat d'une durée de 6 mois avec possibilité de renouvellement",

        ownername: 'JL',
        owneremail: 'fakeemail@gmail.com',
        ownerphone: '819-123-4568'

      },
      {
        id: 3,
        name: 'Company 3',
        imgSrc: '../images/1626068668-181804171260ebd6bcf116b5-27635942-500x500.jpg',
        adress: '3256 route nowhere',
        cost: 40,
        size: this.size.L,
        type: 'Web Designer',
        description: 'Slack is looking for a Software Engineer for the Developer Productivity team, a group of engineers who design and build tools and solutions that will give our engineers greater control over internal systems while improving their ability to deliver software in a sustainable manner, quickly. This team will be taking on greenfield projects while working to improve the long term sustainability of Slack’s engineering model. Software Engineers at Slack work in a highly collaborative environment, and that is particularly true within Developer Productivity where we are passionate about improving the working lives of our fellow engineers across the company. One size does not fit all so please bring your bag of tricks and ability to teach them to others.',

        ownername: 'JL',
        owneremail: 'fakeemail@gmail.com',
        ownerphone: '819-123-4568'

      }],
    sortBy: 'cost',
    ascendingOrder: true,
    resultList: [],
    appliedFilters: { Size: [], Type: [] },
    searchQuery: '',

    filters: [
      {
        name: 'Size',
        values: [...Object.values(this.size)]
      },
      {
        name: 'Type',
        values: ["Tops", "Pants", "Dresses", "Hats", "Jewerly"]
      }
    ]
  }

  componentDidMount() {
    this.setState({ resultList: this.state.items }, this.buildResultList)
  }

  addNewPost = (item) => {
    item.id = this.state.idCount;
    let items = [...this.state.items, item]
    this.setState({
      idCount: this.stateidCount + 1,
      items: items
    }, this.buildResultList)
    console.log('form submitted', item);
  }

  changeLanguage = (lang) => {
    this.setState({ language: lang });
  }

  //https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
  compare(property, order) {
    var sortOrder = order ? 1 : -1;
    return function (a, b) {
      if (a[property] < b[property]) {
        return -1 * sortOrder;
      } else if (a[property] > b[property]) {
        return 1 * sortOrder;
      }
      else {
        return 0;
      }
    }
  }

  sortBy = (criteria) => {
    var attr = criteria.split('_')[0];
    var order = criteria.split('_')[1];
    this.setState({ sortBy: attr, ascendingOrder: order === 'Ascending' }, this.buildResultList);
  }

  getFilters = (f, value) => {
    var attr = { ...this.state.appliedFilters };
    if (attr[f].includes(value)) {
      attr[f].splice(attr[f].indexOf(value), 1);
    } else {
      attr[f].push(value);
    }
    this.setState(
      {
        appliedFilters: attr
      }, this.buildResultList);

  }

  removeFilters = (e, filter) => {
    e.preventDefault();
    var filters = { ...this.state.appliedFilters };
    filters[filter] = [];
    this.setState({ appliedFilters: filters }, this.buildResultList)
  }

  updateSearchParam = (param) => {
    this.setState({ searchQuery: param }, this.buildResultList);
  }


  buildResultList = () => {
    var list = this.state.items;
    //applying filters
    Object.keys(this.state.appliedFilters).forEach((k) => {
      list = list.filter(item => {
        if (this.state.appliedFilters[k].length > 0) {
          return this.state.appliedFilters[k].includes(item[k.toLowerCase()]);
        }
        return true;
      })
    })

    //applying query
    var wordsArray = list;
    if (this.state.searchQuery !== '') {
      wordsArray = []
      var query = this.state.searchQuery.split(' ');

      var searchKeys = ['name', 'size', 'type', 'ownername']
      query.forEach(word => {
        list.forEach(item => {
          var valid = false;
          searchKeys.forEach(key => {

            if (item[key].toLowerCase().split(' ').includes(word.toLowerCase())) {
              valid = true;
            }
          })
          if (valid) {
            wordsArray.push(item)
          }
        })
      })
      //removing duplicates
      list = Array.from(new Set(wordsArray));
    }


    //Sorting
    //Default is cost ascending
    this.setState({
      resultList: list.sort(this.compare(this.state.sortBy, this.state.ascendingOrder))
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="dark" className="py-3">
          <Navbar.Brand className="text-white"><img style={{ width: '40px' }} src='../icons/tunic.png' alt="Peridot"></img>&nbsp; Peridot</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Col xs={2}>
              <NewPost addNewPost={this.addNewPost} language={this.state.language} filters={this.state.filters[1]} sizes={[...Object.values(this.size)]} colors={this.colors}></NewPost>
            </Col>
            <Col xs={9}>
              <Search sortBy={this.sortBy} updateSearchParam={this.updateSearchParam} language={this.state.language} />
            </Col>
            <Col className="col-auto">
              <select onChange={(e) => this.changeLanguage(e.target.value)}>
                <option value='en' id='languageEN'>English</option>
                <option value='fr' id='languageFR'>Français</option>
              </select>
            </Col>
          </Navbar.Collapse>
        </Navbar>
        <Row>
          <Col>
            <br></br>
            {<ItemsContainer items={this.state.resultList} language={this.state.language} sizes={this.size}></ItemsContainer>}
          </Col>
        </Row>
      </div >
    );
  }
}


export default App;
