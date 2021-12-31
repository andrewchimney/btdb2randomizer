import React from "react";
import Image from "next/image";
class village extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 400
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Village</h1>
                <p>The village is a support tower in BTDB2. The village buffs all towers inside of it&apos;s radius.</p>
                <p>Cost to unlock: 250 monkey money</p> 
                <Image src="/images/monkeys/Village.webp" alt='Village' width={this.state.imageSize} height={this.state.imageSize} priority={true}/>

            </div>
        )
    }
}
export default village;