import React from "react";
import Image from "next/image";
class bananafarm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 400
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Banana Farm</h1>
                <p>The banana farm is a support tower in BTDB2. It producse bananas that harvest into cash.</p>
                <p>Cost to unlock: 250 monkey money</p>
                <Image src="/images/monkeys/BananaFarm.webp" alt='Banana Farm' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            </div>
        )
    }
}
export default bananafarm;