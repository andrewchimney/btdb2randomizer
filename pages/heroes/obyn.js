import React from "react";
import Image from "next/image";
class obyn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 100
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Obyn Greenfoot</h1>
                <p>Obyn Greenfoot is a hero in BTDB2. Obyn can attack through obstacles with his spirit wolf.</p>
                <p>Cost to unlock: 3000 monkey money</p> 
                <Image src='/images/heroes/ObynGreenFootPortrait.webp' alt='Obyn' width={"100"} height={"100"} priority={true}/>

            </div>
        )
    }
}
export default obyn;