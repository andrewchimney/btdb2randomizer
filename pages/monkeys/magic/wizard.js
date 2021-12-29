import React from "react";
import Image from "next/image";
class wizard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 100
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Wizard Monkey</h1>
                <p>The wizard Monkey is a magic class tower in BTDB2. It hurl magical bolts on erngy at the nloons</p>
                <p>Cost to unlock: 150 monkey money</p> 
                <Image src="/images/monkeys/Wizard.webp" alt='Monkey Apprentice' width={this.state.imageSize} height={this.state.imageSize} priority={true}/>

            </div>
        )
    }
}
export default wizard;