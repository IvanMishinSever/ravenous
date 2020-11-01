import React from 'react';
import './SearchBar.css';

/*const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'

}
*/
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        // by default there is NO data, and throw ERRROR!
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        }
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        
        }
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSortByChange = this.handleSortByChange.bind(this);
    }
    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } 
            return '';
        }
    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption});
    }
//Handle a Sorting Option Change (On Click)
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionsValue = this.sortByOptions[sortByOption];
            return <li onClick ={this.handleSortByChange.bind(this, sortByOptionsValue)} className={this.getSortByClass(sortByOptionsValue)} key={sortByOptionsValue}>{sortByOption}</li>;
        });
    }

    //Handle a Term or Location Change
    handleTermChange(event) {
        this.setState({
            term: event.target.value
        });
    }
    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        });
    }
    //Handle a Search
    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault(); /// Интересная функция)
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div onClick={this.handleSearch} className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}
export default SearchBar;