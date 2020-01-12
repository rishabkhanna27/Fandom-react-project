import React , {Component} from 'react';
import {Link} from 'react-router-dom'
import Loading from './Loading'
class Character extends Component
{
    // (i) constructor
    // (ii)render method
    // (iii)Component did mount(cdm)
	constructor(props)
	{
		super(props)
		this.state = {
			loading:true,
			episodes : []
		}
	}
	componentDidMount()
	{
        // Character
		console.log(this.props)
		fetch(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
		.then(res=>res.json())
		.then(res=>{
			console.log(res);
			for(var a=0;a<res.episode.length;a++)
            {
                this.getEpisode(res.episode[a]);
            }
			this.setState({res:res,loading:false});
		})
	}
	getEpisode = (val)=>{
		fetch(val)
        .then(res=> res.json())
        .then(res=>{
            let episodes = this.state.episodes;
            episodes.push(res)
            console.log(episodes)
            this.setState({episodes:episodes});
        })
	}
	render()
	{
		if(this.state.loading)
        {
            return <Loading/>
        }
        return <div className="content">
            {<div>
                <h1><b><i>Character - {this.state.res.name}</i></b></h1>
                <hr/>
                <div style={{display:"flex"}}>
                <img src={this.state.res.image}></img>
                <ul>
                    <li><b>Species : </b>{this.state.res.species}</li>
                    <li><b>Status : </b>{this.state.res.status}</li>
                    <li><b>Gender : </b>{this.state.res.gender}</li>
                    <li><b>Origin : </b>{this.state.res.origin.name}</li>
                    <li><b>Last Location : </b>{this.state.res.location.name}</li>
                </ul>
                </div><br></br>
                <b>Episodes</b>
                <ol>
                	{
                		this.state.episodes.map((val,index)=>{
                			return <li><Link to={"/episode/"+val.id}>{val.name}</Link></li>
                		})
                	}
                </ol>
            </div>
            }
            </div>
	}
}
export default Character;