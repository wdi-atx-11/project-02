// src/config/routes.js
import React from 'react'
import {Route} from 'react-router'
import App from '../App'
import TimelineContainer from '../containers/TimelineContainer'
import GalleryContainer from '../containers/GalleryContainer'
import AboutContainer from '../containers/AboutContainer'

export default (
  <Route exact path='/' component={App}>
    <Route path='/timeline' component={TimelineContainer}/>
    <Route path='/gallery' component={GalleryContainer}/>
    <Route path='/about' component={AboutContainer}/>
  </Route>
)
