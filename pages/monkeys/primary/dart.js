import React from "react";
import Image from "next/image";
class dart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 400
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1>Dart Monkey</h1>
                <p>Dart monkey is primary class tower in BTDB2. Dart monkey throws darts with low pierce.</p>
                <p>Cost to unlock: unlocked at start</p>
                <Image src="/images/monkeys/Dart.webp" alt='Dart Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/>
            </div>
        )
    }
}
export default dart;