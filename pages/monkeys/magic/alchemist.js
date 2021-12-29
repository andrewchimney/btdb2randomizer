import React from "react";
import Image from "next/image";
class alchemist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 100
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Alchemist Monkey</h1>
                <p>The Alchemist Monkey is a magic tower in BTDB2. The alchemist monkey throws potions over walls and buff allies or pop bloons.</p>
                <p>Cost to unlock: 150 monkey money</p>
                <Image src="/images/monkeys/Alchemist.webp" alt='Alchemist mMnkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            </div>
        )
    }
}
export default alchemist;