import React from "react";
import Image from "next/image";
class sub extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 400
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Submarine Monkey</h1>
                <p>The Submarine Monkey is a military class tower in BDTB2. The submarine monkey is a water tower that fires homing torp-e-darts.</p>
                <p>Cost to unlock: 75 monkey money</p> 
                <Image src="/images/monkeys/Sub.webp" alt='Submarine Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 

            </div>
        )
    }
}
export default sub;