import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { term: 'Beautiful Northern Pakistan'};
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
        this.props.onSearchTermChange(event.target.value);
    }

    render() {
        return (
            <div>
                <input value={this.state.term} onChange={this.onInputChange} 
                    placeholder="Please enter term to search" />
            </div>
            
        )
    }
}

export default SearchBar;
