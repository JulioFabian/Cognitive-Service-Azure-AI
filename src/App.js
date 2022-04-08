import React, { Component } from 'react';
import Search from './Components/Search';
import Result from './Components/Result';

class App extends Component {

  state = {
    term: '',
    images: [],
    page: 0
  }

  scroll = () => {
    const element = document.querySelector('.bg-dark');
    element.scrollIntoView('smooth', 'start');
  }

  previousPage = () => {
    let page = this.state.page;

    if (page === 1) return null

    page--;

    this.setState({
      page
    }, () => {
      this.consultApi();
      this.scroll();
    });

    // console.log(page);
  }

  nextPage = () => {
    let page = this.state.page;

    page++;

    this.setState({
      page
    }, () => {
      this.consultApi();
      this.scroll();
    });

    // console.log(page);
  }

  consultApi = () => {
    const term = this.state.term;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=26571664-344025cfacbf15156ec41de31&q=${term}&per_page=30&page=${page}`;

    //console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({ images: result.hits }))
  }

  searchData = (term) => {
    this.setState({
      term: term,
      page: 1
    }, () => {
      this.consultApi();
    })
  }

  render() {
    return (
      <div className="app container">
        <div className="bg-dark p-5">
          <p className="lead text-center">Search your Images</p>
          <Search 
            searchData = {this.searchData}
          />
        </div>
        <div className="column justify-content-evenly">
          <Result 
            images={this.state.images}
            previousPage={this.previousPage}
            nextPage={this.nextPage}
          />
        </div>
      </div>
      // <div>
      //   <ModalAnalisys />
      // </div>
    );
  }
}

export default App;
