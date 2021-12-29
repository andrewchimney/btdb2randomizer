import React from "react";
import Image from "next/image";
class mortar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageSize: 100
        };
    }
    render(){
        return(
            <div className="monkey">
                <h1></h1>
                <p></p>
                <p>Cost to unlock:  monkey money</p> 

            </div>
        )
    }
}
export default mortar;