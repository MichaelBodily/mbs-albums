import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createAlbum } from '../actions/index';
import { Link } from 'react-router';

class AlbumNew extends React.Component {
   // for navigation after form submit
   static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(formProps) {
        this.props.createAlbum(formProps)
        .then((json) => {
            console.log("Got here... createAlbum.then");
            console.log(json);

            // New album has been created, navigate user to the index
            // we navigate by calling this.context.router.push with the path to navigate to
            this.context.router.push("/");
        });
    }

    render() {
        const  { fields: { Title, Artist,Description,AmazonUrl,MainImage,ThumbnailImage}, handleSubmit } = this.props;

        return (
            <form onSubmit ={handleSubmit(this.onSubmit.bind(this))}>
                <div style={{ marginTop: '20px' }}>
                    <h3>Create a New Album</h3>
                </div>

                <hr />

                <div className={ `form-group ${Title.touched && Title.invalid ? 'has-danger' : ''}` }>
                    <label>Title</label>
                    <input type="text" className="form-control" {...Title} placeholder="Enter a Title" />
                    <div className="text-help">
                        {Title.touched ? Title.error : ""}
                    </div>
                </div>

                <div className={ `form-group ${Artist.touched && Artist.invalid ? 'has-danger' : ''}` }>
                    <label>Artist</label>
                    <input type="text" className="form-control" {...Artist} placeholder="Enter an Artist" />
                    <div className="text-help">
                        {Artist.touched ? Artist.error : ""}
                    </div>
                </div>

                <div className={ `form-group ${Description.touched && Description.invalid ? 'has-danger' : ''}` }>
                    <label>Description</label>
                    <textarea type="text" className="form-control" {...Description} placeholder="Enter a Description" />
                    <div className="text-help">
                        {Description.touched ? Description.error : ""}
                    </div>
                </div>

                <div className={ `form-group ${AmazonUrl.touched && AmazonUrl.invalid ? 'has-danger' : ''}` }>
                    <label>Where to Buy</label>
                    <input type="text" className="form-control" {...AmazonUrl} placeholder="Enter an Amazon Url" />
                    <div className="text-help">
                        {AmazonUrl.touched ? AmazonUrl.error : ""}
                    </div>
                </div>

                <div className={ `form-group ${MainImage.touched && MainImage.invalid ? 'has-danger' : ''}` }>
                    <label>Main Image</label>
                    <input type="text" className="form-control" {...MainImage} placeholder="Enter a Url for the main image" />
                    <div className="text-help">
                        {MainImage.touched ? MainImage.error : ""}
                    </div>
                </div>

                <div className={ `form-group ${ThumbnailImage.touched && ThumbnailImage.invalid ? 'has-danger' : ''}` }>
                    <label>Atist's Image</label>
                    <input type="text" className="form-control" {...ThumbnailImage} placeholder="Enter a Url for the artist's image" />
                    <div className="text-help">
                        {ThumbnailImage.touched ? ThumbnailImage.error : ""}
                    </div>
                </div>

                <hr />

                <div style={{ float: 'right', textAlign: 'right' }}>    
                    <button type="submit" className="btn btn-primary" style={{ marginRight:'6px'}}>Submit</button>
                    <Link to="/" className="btn btn-secondary">Cancel</Link>
                </div>

            </form>
        )
    }
}

// VALIDATION:
function validate(values) {
    const errors = {};

    if(!values.Title) {
        errors.Title = 'Enter a Title';
    }

    if(!values.Artist) {
        errors.Artist = 'Enter an Artist';
    }

    if(!values.Description) {
        errors.Description = 'Enter a Description';
    }

    if(!values.AmazonUrl) {
        errors.AmazonUrl = 'Enter an Amazon Url';
    }

    if(!values.MainImage) {
        errors.MainImage = 'Enter a Url for the main image';
    }

    if(!values.ThumbnailImage) {
        errors.ThumbnailImage = 'Enter a Url for the artist\'s image';
    }
    return errors;
}

 
//reduxForm: 1: form config   2: mapStateToProps     3: mapDispatchToProps
export default reduxForm({
    form: 'AlbumNewForm', 
    fields: ['Title','Artist','Description','AmazonUrl','MainImage','ThumbnailImage'],
    validate 
    }, null, {createAlbum})(AlbumNew);