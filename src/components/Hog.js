
import React from "react";
// import { Card } from "semantic-ui-react";
import augustus_gloop from "../hog-imgs/augustus_gloop.jpg";
import babe from '../hog-imgs/babe.jpg'
import bailey from "../hog-imgs/bailey.jpg";
import cherub from "../hog-imgs/cherub.jpg";
import galaxy_note from "../hog-imgs/galaxy_note.jpg";
import leggo_my_eggo from "../hog-imgs/leggo_my_eggo.jpg";
import peppa from "../hog-imgs/peppa.jpg";
import piggy_smalls from "../hog-imgs/piggy_smalls.jpg";
import piglet from '../hog-imgs/piglet.jpg'
import trouble from '../hog-imgs/trouble.jpg'
import porkchop from '../hog-imgs/porkchop.jpg'
import truffle_shuffle from '../hog-imgs/truffle_shuffle.jpg'

let hogImages = {
    'Augustus Gloop': augustus_gloop,
    'Babe': babe,
    'Bailey': bailey,
    'Cherub': cherub,
    'Galaxy Note': galaxy_note,
    'Leggo My Eggo':leggo_my_eggo,
    'Peppa':peppa,
    'Piggy smalls':piggy_smalls,
    'Piglet':piglet,
    'Porkchop':porkchop,
    'Trouble':trouble,
    'Truffle Shuffle':truffle_shuffle
}

class Hog extends React.Component{
    state={
        selected: false,
        visible: true
    }

    handleClick = () => {
        this.setState({
          selected: !this.state.selected
        })
    }

    hideHog = (e) => {
        if (this.state.visible) {
            this.setState({visible: false})
            e.target.parentNode.querySelector('.pig-div').style.visibility = 'hidden'
        } else {
            this.setState({visible: true})
            e.target.parentNode.querySelector('.pig-div').style.visibility = 'visible'
        }
    }

    render(){
        console.log(this.state.selected)
        return(
            <div className={'ui eight wide column card'} >
                <div onClick={this.handleClick} className={'pig-div'}>
                    <h2>{this.props.hog.name}</h2>
                    {this.state.selected === true ? <div>
                        <h5>Specialty: {this.props.hog.specialty}</h5>
                        <h5>{this.props.hog.greased ? "I'm so greasy" : "Oil me up!"}</h5>
                        <h5>Weight: {this.props.hog.weight} tons</h5>
                        <h5>Best Medal: {this.props.hog['highest medal achieved']}</h5>
                    </div> : <img className={'pig-img'} src={hogImages[this.props.hog.name]} />}
                </div>
                <button onClick={this.hideHog}>{this.state.visible ? 'Hide Hog' : 'Show Hog'}</button>
            </div>
        )
    }
}

export default Hog