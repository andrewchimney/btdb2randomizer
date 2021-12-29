import React from "react";
import Image from "next/image";
class druid extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 100
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Druid Monkey</h1>
                <p>The Druid Monkey is a magic class tower in BTDB2. The druid monkey uses thorns along with magic powers to pop bloons.</p>
                <p>Cost to unlock: 150 monkey money</p> 
                <Image src="/images/monkeys/Druid.webp" alt='Druid Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/>
            </div>
        )
    }
}
export default druid;