import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getAlbum } from '../actions';   // will get 'index.js' by default
import { bindActionCreators } from 'redux';

class AlbumDetail extends React.Component {
   
    componentWillMount() {
        this.props.getAlbum(this.props.params.id);   // call the action creator
    }

    renderAlbum() {
        if (this.props.selectedAlbum === undefined) {
            return <div style={{ textAlign: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                    Loading...
                  </div>
            </div>
        }

        return (
            <div key={this.props.selectedAlbum.AlbumId} className="album-detail-container">
                 <div className="album-details-header-area">
                    <div className="thumbnail-image">
                        <img src={this.props.selectedAlbum.ThumbnailImage} alt="" />
                    </div>

                    <div className="album-details-info">
                        <div className="album-list-item">
                            Artist: {this.props.selectedAlbum.Artist}
                        </div>
                        
                        <div className="album-list-item">
                            Title: {this.props.selectedAlbum.Title}
                        </div>
                    </div>

                    <div className="album-item-link">
                        <div className="album-list-item">
                            <a href={this.props.selectedAlbum.AmazonUrl} target="_blank" className="btn btn-primary btn-sm">
                                Buy from Amazon
                            </a>
                    
                        </div>
                    </div>
                </div> 


                <div className="image-detail-area">
                    <div className="main-image">
                        <img src={this.props.selectedAlbum.MainImage} alt="" />
                    </div>

                    <div className="lorem-ipsum">
                        {this.props.selectedAlbum.Description}
                    </div>
                </div>    
            </div>
            );
    
    }

    render() {
        return (
            <div>
                <div className="back-button-area">
                    <Link to="/" className="btn btn-default">
                        Back to Album List
                    </Link>
                </div>

                <div>
                    {this.renderAlbum()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { selectedAlbum: state.selectedAlbum.selectedAlbum }
}

// Anything returned will show up as props inside of this file (AlbumList)
function mapDispatchToProps(dispatch) {
    // whenever getAlbums is called, thre resuld should be passed to all of our reducers
    return bindActionCreators( { getAlbum }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);