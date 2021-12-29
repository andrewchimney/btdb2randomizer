import React from "react";
import Link from "next/link";
class NavBar extends React.Component{
    render(){
        return(
            <nav>
                <ul>
                    <li className="NavButton">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className="NavButton">
                        <Link href="/monkeys/dart">
                            <a>Dart Monkey</a>
                        </Link>
                    </li>
                    <li className="NavButton">
                        <Link href="/monkeys/ace">
                            <a>Monkey Ace</a>
                        </Link>
                    </li>
                </ul>

            </nav>
        )
    }

}
export default NavBar;