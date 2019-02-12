import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search_bar';
import YoutubeAPISearch from 'youtube-api-search';
import VideoList from './components/video_list'; 
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDng2gxyY6QiWVXqOT17FbWf4KXDScNIfw';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Beautiful Northern Pakistan')
  }

  videoSearch(term) {
    YoutubeAPISearch({key: API_KEY, term: term}, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  videoSelect(userSelected) {
    this.setState({
      selectedVideo: userSelected
    });
    
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }

  render() {
    return (
      <div>
        <div className="col-4">
          <h4 className="page-heading">Youtube Search App</h4>
          <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)} />
          <br />
        </div>

        <div  className="video-detail">
          <VideoDetail video={this.state.selectedVideo} />
        </div>

        <div className="related-videos">
          <h4 className="related-videos-heading">Related Videos</h4>
          <VideoList onVideoSelect={userSelected => this.videoSelect(userSelected)}
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
