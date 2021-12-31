import React from "react";
import Image from "next/image";
class strikerjones extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 400
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Striker Jones</h1>
                <p>Striker Jones is a hero in BTDB2. Striker Jones blasts bloons with his bazooka and buffs explosive towers around him.</p>
                <p>Cost to unlock: 3000 monkey money</p> 
                <Image src='/images/heroes/StrikerJonesPortrait.webp' alt='Striker Jones' width={this.state.imageSize} height={this.state.imageSize}  />

            </div>
        )
    }
}
export default strikerjones;