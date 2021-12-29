import React from "react";
import Image from "next/image";
class sniper extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 100
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Sniper Monkey</h1>
                <p>The Sniper Monkey is a military class tower in BDTB2. The sniper monkey can shoot bloons wherever it can see them and pops 2 layers.</p>
                <p>Cost to unlock: 75 monkey money</p> 
                <Image src="/images/monkeys/Sniper.webp" alt='Sniper Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 

            </div>
        )
    }
}
export default sniper;