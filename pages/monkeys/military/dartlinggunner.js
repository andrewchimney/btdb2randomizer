import React from "react";
import Image from "next/image";
class dartlinggunner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 100
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Dartling Gunner</h1>
                <p>The Dartling Gunner is a military class tower in BDTB2. The Dartling Gunner uses a dart machine guns that shoots at your mouse or wherever you last touched.</p>
                <p>Cost to unlock: 75 monkey money</p> 
                <Image src="/images/monkeys/DartlingGunner.webp" alt='Dartling Gunner' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 

            </div>
        )
    }
}
export default dartlinggunner;