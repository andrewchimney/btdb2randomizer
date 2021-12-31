import React from "react";
import Image from "next/image";
class helipilot extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 400
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Heli Pilot</h1>
                <p>The Heli Pilot is a military class tower in BDTB2.. The heli pilot shoots darts from it&apo;s twin guns and follows your mouse or wherever you last touched.</p>
                <p>Cost to unlock: 75 monkey money</p> 
                <Image src="/images/monkeys/HeliPilot.webp" alt='Heli Pilot' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 

            </div>
        )
    }
}
export default helipilot;