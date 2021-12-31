import React from "react";
import Image from "next/image";
class ace extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 400
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Ace Monkey</h1>
                <p>Monkey Ace is a military class tower in BTDB2. The monkey ace flies around it&apos;s landing strip and shoots out darts in all directions.</p>
                <p>Cost to unlock: 75 monkey money</p>
                <Image src="/images/monkeys/Ace.webp" alt='Monkey Ace' width={this.state.imageSize} height={this.state.imageSize} priority={true}/>
            </div>
        )
    }
}
export default ace;