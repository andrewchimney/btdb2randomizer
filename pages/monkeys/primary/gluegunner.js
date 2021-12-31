import React from "react";
import Image from "next/image";
class gluegunner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 400
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Gluegunner</h1>
                <p>the Gluegunner is a primary class tower in BTDB2. The Gluegunner shoots blobs of glue which slow down bloons.</p>
                <p>Cost to unlock: 25 monkey money</p> 
                <Image src="/images/monkeys/GlueGunner.webp" alt='Glue Gunner Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 

            </div>
        )
    }
}
export default gluegunner;