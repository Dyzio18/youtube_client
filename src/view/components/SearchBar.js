import React from 'react';
import ReactDOM from 'react-dom';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchData: ''
        };
    }


    render() {
        return (
            <div>
                <form className="control-group center-block">
                    <label className="control-label" htmlFor="searchBar">Wyszukaj: </label>
                    <div className="controls">
                        <input type="text" id="searchBar" className="input-xxlarge"
                               value={this.state.searchData}
                               onChange={event => this.onInputChange(event.target.value)}/>
                    </div>
                </form>
            </div>
        )
    }

    onInputChange(searchData) {
        this.setState({searchData});
        this.props.onSearchDataChange(searchData);
    }

}