import React from "react";
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
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
                    <li>
                        <DropdownButton id="dropdown-basic-button" title="Primary" className="categoryButton">
                            <Dropdown.Item>
                                <Link href="/monkeys/primary/dart">
                                    <a>Dart Monkey</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>

                            </Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li>
                        <DropdownButton id="dropdown-basic-button" title="Military" className="categoryButton">
                            <Dropdown.Item>
                                <Link href="/monkeys/military/ace">
                                    <a>Monkey Ace</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>

                            </Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li>
                        <DropdownButton id="dropdown-basic-button" title="Magic" className="categoryButton">
                            <Dropdown.Item>
                            <Link href="/monkeys/magic/alchemist">
                                    <a>Alchemist Monkey</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>

                            </Dropdown.Item>

                        </DropdownButton>
                    </li>
                    <li>
                        <DropdownButton id="dropdown-basic-button" title="Support" className="categoryButton">
                            <Dropdown.Item>
                                <Link href="/monkeys/support/bananafarm">
                                    <a>Banana Farm</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>

                            </Dropdown.Item>
                        </DropdownButton>
                    </li>
                    
                </ul>

            </nav>
        )
    }

}
export default NavBar;