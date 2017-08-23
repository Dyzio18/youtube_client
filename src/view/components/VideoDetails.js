import React from 'react';
import Iframe from 'react-iframe'
import {getVideoData} from '../../controller/videoController';


export default class VideoDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoDetails: null,
            videoComments: null
        };
    }


    componentWillReceiveProps() {
        if (!this.props.video) {
            return null;
        } else {
            getVideoData(this.props.video.videoId).then(data => {
                this.setState({
                    videoDetails: data
                });
            }).catch(err => {
                error.log(err);
            });
        }
    }


    render() {

        const ratioLike = (details) => {
            if (parseInt(details.likeCount) || parseInt(details.dislikeCount)) {
                return Math.round((
                    parseInt(details.likeCount) / ( parseInt(details.dislikeCount) + parseInt(details.likeCount) )
                ) * 100)
            }
            return '---';
        };

        const displayDetails = (details) => {
            if (details) {
                return (
                    <div className="detailStats">
                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>Views</th>
                                <th>Like</th>
                                <th>Dislike</th>
                                <th>% positive</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{details.viewCount}</td>
                                <td>{details.likeCount} </td>
                                <td>{details.dislikeCount}</td>
                                <td>{ratioLike(this.state.videoDetails)} </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )
            } else {
                return null;
            }
        };

        if (!this.props.video) {
            return <div> Brak wynikow</div>;
        } else {
            const url = `https://www.youtube.com/embed/${this.props.video.videoId}`;
            return (
                <section>
                    <div>
                        <Iframe url={url} position="relative" width="100%" height="320px" allowFullScreen/>
                    </div>
                    <div className="details">
                        <p><span className="label">Tytul:</span> {this.props.video.title} <br/>
                            <span className="label">Autor:</span> <a href={this.props.video.channelUrl}
                                                                     target="_blank"> {this.props.video.channelTitle} </a>
                        </p>
                        {displayDetails(this.state.videoDetails)}
                    </div>
                </section>
            );
        }
    }
}

/* TODO:
    - FIX: Statistic (views,like...) no update on actual video, only on preview
 */


