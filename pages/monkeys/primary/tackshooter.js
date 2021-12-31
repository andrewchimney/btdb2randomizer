import React from "react";
import Image from "next/image";
class tackshooter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 400
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Tackshooter</h1>
                <p>The Tackshooter is a primary class tower in BTDB2. The tackshooter sprays a volley of tacks around itself.</p>
                <p>Cost to unlock: unlocked at start</p> 
                <Image src="/images/monkeys/TackShooter.webp" alt='Tackshooter' width={this.state.imageSize} height={this.state.imageSize} priority={true}/>

            </div>
        )
    }
}
export default tackshooter;