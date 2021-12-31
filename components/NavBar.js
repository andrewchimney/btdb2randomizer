import React from "react";
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class NavBar extends React.Component{
    render(){
        return(
            <nav>
                <ul className="navGrid">
                    <li className="home">
                        <Link className="navButton" href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className="heroes">
                        <DropdownButton id="dropdown-basic-button" title="Heroes" bsPrefix="navButton">
                            <Dropdown.Item bsPrefix="ddItem" href="/heroes/quincy">Quincy</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/heroes/gwendolin">Gwen</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/heroes/obyn">Obyn</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/heroes/strikerjones">Striker</Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li className="primary">
                        <DropdownButton id="dropdown-basic-button" title="Primary" bsPrefix="navButton">
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/primary/dart">Dart</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/primary/bombshooter">Bomb</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/primary/boomerang">Boomer</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/primary/gluegunner">Glue</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/primary/ice">Ice</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/primary/tackshooter">Tack</Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li className="military">
                        <DropdownButton id="dropdown-basic-button" title="Military" bsPrefix="navButton">
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/military/ace">Ace</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/military/buccaneer">Ship</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/military/dartlinggunner">Dartling</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/military/helipilot">Heli</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/military/mortar">Mortar</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/military/sniper">Sniper</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/military/sub">Sub</Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li className="magic">
                        <DropdownButton id="dropdown-basic-button" title="Magic" bsPrefix="navButton">
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/magic/alchemist">Alchemist</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/magic/druid">Druid</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/magic/ninja">Ninja</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/magic/super">Super</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/magic/wizard">Wizard</Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li className="support">
                        <DropdownButton id="dropdown-basic-button" title="Support" bsPrefix="navButton">
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/support/bananafarm">Farm</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/support/engineer">Engineer</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/support/spikefactory">Spike Factory</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/support/village">Village</Dropdown.Item> 
                        </DropdownButton>
                    </li>
                    
                </ul>

            </nav>
        )
    }

}
export default NavBar;