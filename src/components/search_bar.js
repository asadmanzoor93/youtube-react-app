import React from 'react';
import { debounce } from 'lodash';


class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { term: ''};
        this.handleCriteriaChange = this.handleCriteriaChange.bind(this);
    }

    raiseDoSearchWhenUserStoppedTyping = debounce(() => {
        this.props.onSearchTermChange(this.state.term);
    }, 500);

    handleCriteriaChange = (event) => {
        this.setState({ term: event.target.value }, () => {
            this.raiseDoSearchWhenUserStoppedTyping();
        });
    }

    render() {
        return (
            <div>
                <input className="searchbar" value={this.state.term} 
                    onChange={this.handleCriteriaChange} 
                    onKeyPress={this.handleCriteriaChange} 
                    placeholder="Please enter term to search" />
            </div>
        )
    }
}

export default SearchBar;
