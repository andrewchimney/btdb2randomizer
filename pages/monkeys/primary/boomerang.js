import React from "react";
import Image from "next/image";
class boomerang extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 400
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Boomerang Monkey</h1>
                <p>The Boomerang monkey is a primary class tower in BTDB2. The Boomerand Monkey throws a Boomerang that flies in a curved path.</p>
                <p>Cost to unlock: 25 monkey money</p> 
                <Image src="/images/monkeys/Boomerang.webp" alt='Boomerang Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/>

            </div>
        )
    }
}
export default boomerang;