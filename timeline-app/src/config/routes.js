// src/config/routes.js
import React from 'react'
import {Route} from 'react-router'
import App from '../App'
import TimelineContainer from '../containers/TimelineContainer'
import GalleryContainer from '../containers/GalleryContainer'

export default (
  <Route path='/' component={App}>
    <Route path='/timeline' component={TimelineContainer}/>
    <Route path='/gallery' component={GalleryContainer}/>
  </Route>
)
