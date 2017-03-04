import { combineReducers } from 'redux';
import AlbumsReducer from './AlbumsReducer';
import AlbumSelectedReducer from './AlbumSelectedReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  albums: AlbumsReducer,
  selectedAlbum: AlbumSelectedReducer,
  form: formReducer
});

export default rootReducer;
