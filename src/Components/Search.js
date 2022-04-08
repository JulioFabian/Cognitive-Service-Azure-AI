import React, { Component } from "react";

class Search extends Component {

    searchRef = React.createRef();

    handleData = (e) => {
        e.preventDefault();
        const term = this.searchRef.current.value;
        this.props.searchData(term);
    }

    render() {
        return (
            <form onSubmit={this.handleData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input 
                            ref={this.searchRef}
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Search your Image. Example: Futbol"
                        />
                    </div>
                    <div className="form-group col-md-4 d-grid">
                        <input 
                            type="submit"
                            className="btn btn-lg btn-warning btn-block"
                            value="Search..."
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default Search;