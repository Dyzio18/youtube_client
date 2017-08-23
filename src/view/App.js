import React from 'react';
import _ from 'lodash';

/* Views */
import Navigation from './layout/Navigation';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetails';
import VideoList from './components/VideosList';
import Footer from './layout/Footer';

/* Controller */
import {findVideos} from './../controller/searchController'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
        };
    }

    videoSearch(searchData) {
        findVideos(searchData).then(data => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });
        }).catch(err => {
            error.log(err);
        });
    }


    render() {
        const videoSearch = _.debounce((searchData) => {
            this.videoSearch(searchData)
        }, 500);

        return (
            <div>
                <Navigation/>
                <div className="container center">
                    <div className="row-fluid">
                        <div className="span5">
                            <SearchBar onSearchDataChange={videoSearch}/>
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="span1">

                        </div>
                        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                                   videos={this.state.videos}/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}