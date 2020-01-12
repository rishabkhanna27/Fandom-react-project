import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Logo from '../images/image.jpeg'
class HeaderComponent extends Component
{
    // header logo,search
    render(){
        return <div className="Header">
            <Link to="/"><img className="logo" src={Logo}></img></Link> 
            {/* logo work */}
            <div className="search">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" style={{backgroundColor:"lightGrey"}}>SearchBy</span>
                    {/* Search box */}
                    </div>
                        <input type="text" className="form-control"placeholder="Episode or Character or Location" />
                    <div className="input-group-append">
                        <button className="btn" style={{backgroundColor:"lightGrey"}}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    }

}
export default HeaderComponent;