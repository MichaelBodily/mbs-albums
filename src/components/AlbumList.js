import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Fetch from 'whatwg-fetch';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getAlbums, deleteAlbum } from '../actions/index';
import { bindActionCreators } from 'redux';

class AlbumList extends React.Component {
     
    // for navigation after form submit
   static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.getAlbums();   // call the action creator
        this.state = {
            showDeletePrompt: false
        }
    };

    handleShowDeleteConfirm(id) {
        const item = "#show_" + id;
        $(item).parent().parent().parent().find(".delete-confirm").addClass("make-visible");
    }

    handleDismissDeleteConfirm(id) {
        const item = "#dismiss_" + id;
        $(item).parent().parent().removeClass("make-visible");
    }

    handleOnDelete(id) {    
        this.props.deleteAlbum(id)
        .then((json) => {
            // New album has been created, navigate user to the index
            // we navigate by calling this.context.router.push with the path to navigate to
            if(json.payload.data === true) {
                window.location.href = "/";
            }
        });
    }

    renderAppStartList() {
        if (this.props.albumList.list == undefined) {
            return <div style={{ textAlign: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                    <img src="img/loading.gif" alt="" />
                </div>

                <div style={{ textAlign: 'center' }}>
                    Loading...
                  </div>
            </div> 
        } else {

            return this.props.albumList.list.map((album) => {
                return (
                    <div key={album.AlbumId} className="album-list-container">
                        <div className="album-item-details">
                            <div className="album-list-item">
                                Artist: {album.Artist}
                            </div>
                            
                            <div className="album-list-item">
                                Title: {album.Title}
                            </div>
                        </div>

                        <div className="album-item-link">
                            <div className="album-list-item">
                                <Link 
                                to={"Albums/" + album.AlbumId} 
                                className="btn btn-primary btn-sm"
                                style={{ marginRight: "12px"}}>
                                    View Details
                                </Link>
                                <button 
                                id={"show_" + album.AlbumId}
                                className="btn btn-danger btn-sm" 
                                onClick={() => {this.handleShowDeleteConfirm(album.AlbumId)}}>
                                    Delete
                                </button>
                            </div>
                        </div>

                        <div className="delete-confirm">
                            <div className="delete-item">Are you sure you want to delete this album?</div>
                            <div className="delete-item">
                                <button 
                                className="btn btn-primary btn-sm"
                                onClick={() => {this.handleOnDelete(album.AlbumId)}}>
                                    Yes
                                </button>
                            </div>
                            <div className="delete-item">
                                <button
                                id={"dismiss_" + album.AlbumId}
                                className="btn btn-secondary btn-sm"
                                onClick={() => {this.handleDismissDeleteConfirm(album.AlbumId)}}>
                                    No
                                </button>
                            </div>
                            <div className="triangle-right"></div>
                        </div>

                    </div>
                ); 
            })
            
        }   // end else if
    }       // end render start app list

    render() {
        return (
            <div className="container">
                <div className="headline">
                    Simple Album List
                </div>

                {this.renderAppStartList()}
         
                <div className="col-md-right" style={{ float: 'right', marginTop:'14px', marginRight:'20px', marginBottom: '20px'}}>
                    <Link to="/new" className="btn btn-secondary">Create New</Link>
                </div>
           
            </div>
        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of this file (AlbumList)
    return { albumList: state.albums}
}

// Anything returned will show up as props inside of this file (AlbumList)
function mapDispatchToProps(dispatch) {
    // whenever getAlbums is called, thre resuld should be passed to all of our reducers
    return bindActionCreators( { getAlbums, deleteAlbum }, dispatch)
}

// Promotes this file from a component to a container that can read state and has access to action creators
export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);