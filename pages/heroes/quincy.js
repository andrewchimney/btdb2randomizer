import React from "react";
import Image from "next/image";
class quincy extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 400
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Quincy</h1>
                <p>Quincy is a hero in BTDB2. Quincy uses his bow to shoot the bloons.</p>
                <p>Cost to unlock: unlocked at start</p> 
                <Image src='/images/heroes/QuincyPortrait.webp' alt='Quincy' width={this.state.imageSize} height={this.state.imageSize}  />

            </div>
        )
    }
}
export default quincy;