import React from "react";
import Image from "next/image";
class ninja extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 400
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Ninja Monkey</h1>
                <p>The ninja monkey is a magic class tower in BTDB2. The ninja monkey throw shurikens to pop bloons</p>
                <p>Cost to unlock: 150 monkey money</p> 
                <Image src="/images/monkeys/Ninja.webp" alt='Ninja Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            </div>
        )
    }
}
export default ninja;