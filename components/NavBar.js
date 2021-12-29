import React from "react";
import Link from "next/link";
class NavBar extends React.Component{
    render(){
        return(
            <div className="NavBar">
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/monkeys/dart">
                            <a>Dart Monkey</a>
                        </Link>
                    </li>
                </ul>

            </div>
        )
    }

}
export default NavBar;