import React from "react";
import Image from "next/image";
class gwendolin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 400
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Gwendolin</h1>
                <p>Gwendolin is a hero in BTDB2. Gwendolin shoots blast of fire to incinerate the bloons.</p>
                <p>Cost to unlock: unlocked after completing battle school</p> 
                <Image src='/images/heroes/GwendolinPortrait.webp' alt='Gwendolin' width={"100"} height={"100"}/>

            </div>
        )
    }
}
export default gwendolin;