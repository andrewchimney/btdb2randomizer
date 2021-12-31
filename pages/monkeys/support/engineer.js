import React from "react";
import Image from "next/image";
class engineer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 400
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Engineer Monkey</h1>
                <p>The Engineer Monkey is a support tower in BTDB2. The Engineer creates sentries that shoot bloons with him.</p>
                <p>Cost to unlock: 250 monkey money</p> 
                <Image src="/images/monkeys/Engineer.webp" alt='Monkey Engineer' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 

            </div>
        )
    }
}
export default engineer;