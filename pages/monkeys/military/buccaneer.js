import React from "react";
import Image from "next/image";
class buccaneer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 400
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Monkey Buccaneer</h1>
                <p>The Monkey Buccaneer is a military class tower in BDTB2. The Monkey Buccaneer is a water tower that shoots darts from both sides of it&apos;s ship.</p>
                <p>Cost to unlock: 75 monkey money</p> 
                <Image src="/images/monkeys/Buccaneer.webp" alt='Monkey Buccaneer' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 

            </div>
        )
    }
}
export default buccaneer;