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
                        <DropdownButton id="dropdown-basic-button" title="heroes" className="categoryButton">
                            <Dropdown.Item>
                                <Link href="/heroes/quincy">
                                    <a>Quincy</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/heroes/gwendolin">
                                    <a>Gwen</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/heroes/obyn">
                                    <a>Obyn</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/heroes/strikerjones">
                                    <a>Striker</a>
                                </Link>
                            </Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li>
                        <DropdownButton id="dropdown-basic-button" title="Primary" className="categoryButton">
                            <Dropdown.Item>
                                <Link href="/monkeys/primary/dart">
                                    <a>Dart Monkey</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/monkeys/primary/bombshooter">
                                    <a>Bomb Shooter</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/monkeys/primary/boomerang">
                                    <a>Boomerang Monkey</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/monkeys/primary/gluegunner">
                                    <a>Gluegunner</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/monkeys/primary/ice">
                                    <a>Ice Monkey</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/monkeys/primary/tackshooter">
                                    <a>Tackshooter</a>
                                </Link>
                            </Dropdown.Item>

                        </DropdownButton>
                    </li>
                    <li>
                        <DropdownButton id="dropdown-basic-button" title="Military" className="categoryButton">
                            <Dropdown.Item>
                                <Link href="/monkeys/military/ace">
                                    <a>Ace</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/monkeys/military/buccaneer">
                                    <a>Buccaneer</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/monkeys/military/dartlinggunner">
                                    <a>Dartling Gunner</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/monkeys/military/helipilot">
                                    <a>Heli Pilot</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/monkeys/military/mortar">
                                    <a>Mortar</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/monkeys/military/sniper">
                                    <a>Sniper</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/monkeys/military/sub">
                                    <a>Sub</a>
                                </Link>
                            </Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li>
                        <DropdownButton id="dropdown-basic-button" title="Magic" className="categoryButton">
                            <Dropdown.Item>
                            <Link href="/monkeys/magic/alchemist">
                                    <a>Alchemist</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/monkeys/magic/druid">
                                    <a>Druid</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/monkeys/magic/ninja">
                                    <a>Ninja</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/monkeys/magic/super">
                                    <a>Super</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Link href="/monkeys/magic/wizard">
                                    <a>Wizard</a>
                                </Link>
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
                                <Link href="/monkeys/support/engineer">
                                    <a>Engineer</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/monkeys/support/spikefactory">
                                    <a>Spike Factory</a>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/monkeys/support/village">
                                    <a>Village</a>
                                </Link>
                            </Dropdown.Item>
                            
                        </DropdownButton>
                    </li>
                    
                </ul>

            </nav>
        )
    }

}
export default NavBar;