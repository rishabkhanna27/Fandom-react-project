import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Loading from './Loading'
class LocationDetails extends Component {
    // (i) constructor
    // (ii)render method
    // (iii)Component did mount(cdm)
    constructor(props)
    {
        super(props)
        this.state = {
            res:{},
            loading:true,
            characters : []
        }
    }
    componentDidMount()
    {
        // location
        console.log(this.props.match.params)
        fetch(`https://rickandmortyapi.com/api/location/${this.props.match.params.id}`)
        .then(res=>res.json())
        .then(res=>{
            for(var a=0;a<res.residents.length;a++)
            {
                this.getName(res.residents[a]);
            }
            this.setState({res:res,loading:false})
        })
    }
    getName =  (val)=>{
        fetch(val)
        .then(res=> res.json())
        .then(res=>{
            let characters = this.state.characters;
            characters.push(res)
            this.setState({characters:characters});
        })
    }
    render() {
        if(this.state.loading)
        {
            return <Loading/>
        }
        return (
            <div className="content">
            {<div>
                <h1><b><i>Location - {this.state.res.name}</i></b></h1>
                <hr/>
                <ul>
                    <li><b>Type : </b>{this.state.res.type}</li>
                    <li><b>Dimensions : </b>{this.state.res.dimension}</li>
                    <li><b>Created : </b>{this.state.res.created}</li>
                </ul>
                <b>Residents </b>
                <ol>
                    {
                        this.state.characters.map((val,index)=>{
                            return (
                            <li><Link to={"/character/"+val.id}>{val.name}</Link></li>
                            )
                        })
                    }
                </ol>
            </div>
            }
            </div>
        )
    }
}

export default LocationDetails;
