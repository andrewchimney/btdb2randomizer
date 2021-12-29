import React from "react";
import Image from "next/image";
class superMonkey extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 100
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Super Monkey</h1>
                <p>The Super Monkey is a magic class tower in BDTB2. The Super Monkey throws darts rapidly at bloons</p>
                <p>Cost to unlock: 150 monkey money</p> 
                <Image src="/images/monkeys/Super.webp" alt='Super Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 

            </div>
        )
    }
}
export default superMonkey;