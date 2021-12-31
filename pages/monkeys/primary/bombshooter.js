import React from "react";
import Image from "next/image";
class bombshooter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 400
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Bomb Shooter</h1>
                <p>The Bomb Shooter is a primary class tower in BTDB2. The Bomb Shooter lauches bombs that have an aoe affect.</p>
                <p>Cost to unlock: unlocked at start</p> 
                <Image src="/images/monkeys/BombShooter.webp" alt='Bomb Shooter' width={this.state.imageSize} height={this.state.imageSize} priority={true}/>
            </div>
        )
    }
}
export default bombshooter;