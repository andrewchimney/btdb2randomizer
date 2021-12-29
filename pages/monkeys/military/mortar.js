import React from "react";
import Image from "next/image";
class mortar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 100
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Mortar Monkey</h1>
                <p>The Mortar Monkey is a military class tower in BDTB2. The mortar monkey launches explosive shells that land wherever you put the target.</p>
                <p>Cost to unlock: 75 monkey money</p> 
                <Image src="/images/monkeys/Mortar.webp" alt='Mortar' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 

            </div>
        )
    }
}
export default mortar;