import React , {Component} from 'react';
import {Link} from 'react-router-dom'
import image from '../images/loading.gif'
// Loading image
class Loading extends Component
{
	render()
	{
		return <div className="content"><img width="100px" src={image} /></div>
	}
}
export default Loading;