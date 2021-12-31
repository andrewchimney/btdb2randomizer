import React from "react";
import Image from "next/image";
class ice extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 400
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Ice Monkey</h1>
                <p>The Ice Monkey is a primary class tower in BTDB2. The Ice tower freezes all bloons in it&apos;s radius.</p>
                <p>Cost to unlock: 25 monkey money</p> 
                <Image src="/images/monkeys/Ice.webp" alt='Ice Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 

            </div>
        )
    }
}
export default ice;