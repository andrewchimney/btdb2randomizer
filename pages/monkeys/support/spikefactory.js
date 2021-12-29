import React from "react";
import Image from "next/image";
class spikefactory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 100
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Spike Factory</h1>
                <p>The Spike Factory is a support class tower in BTDB2. The spike factory creates piles of spikes that pop bloons</p>
                <p>Cost to unlock: 250 monkey money</p> 
                <Image src="/images/monkeys/SpikeFactory.webp" alt='Spike Factory' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 

            </div>
        )
    }
}
export default spikefactory;