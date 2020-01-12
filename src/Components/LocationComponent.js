import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Loading from './Loading'
class LocationComponent extends Component {
    // (i) constructor
    // (ii)render method
    // (iii)Component did mount(cdm)
    constructor(props)
    {
        super(props)
        this.state = {
            arr : [],
            loading:true
        }
    }
    componentDidMount()
    {
        // location endpoint
        fetch('https://rickandmortyapi.com/api/location')
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            this.setState({arr:res.results,loading:false})
        })
    }
    render() {
        if(this.state.loading)
        {
            return <Loading/>
        }
        return (
            <div className="content">
            <h1><i><b>Locations</b></i></h1>
            <hr/>
            <div className="row">
            {
                this.state.arr.map((key,index)=>{
                    return (
                    
                    <div className="border col-3">
                    <Link style={{textDecoration:"none",color:"black"}} to={"/location/"+key.id}>
                      <div className="type">{key.type}</div>
                        <div className="name "> {key.name}</div>
                        <div className="residents">{key.residents.length}</div>
                        
                        </Link>
                        </div>
                    )
                })
            }
            </div>
            </div>
        )
    }
}

export default LocationComponent;
