import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import AlbumList from './components/AlbumList';
import AlbumDetail from './components/AlbumDetail';
import AlbumNew from './components/AlbumNew';
 


export default (
    <Route path="/" component={App}>
        <IndexRoute component={AlbumList} />
        <Route path="Albums/:id" component={AlbumDetail} />
        <Route path="New" component={AlbumNew} />
    </Route>
);