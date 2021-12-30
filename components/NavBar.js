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
                        <DropdownButton id="dropdown-basic-button" title="Heroes" bsPrefix="categoryButton">
                            <Dropdown.Item bsPrefix="ddItem" href="/heroes/quincy">Quincy</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/heroes/gwendolin">Gwen</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/heroes/obyn">Obyn</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/heroes/strikejones">Striker</Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li>
                        <DropdownButton id="dropdown-basic-button" title="Primary" bsPrefix="categoryButton">
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/primary/dart">Dart</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/primary/bombshooter">Bombshooter</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/primary/boomerang">Boomerang</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/primary/gluegunner">Gluegunner</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/primary/ice">Ice</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/primary/tackshooter">Tackshooter</Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li>
                        <DropdownButton id="dropdown-basic-button" title="Military" bsPrefix="categoryButton">
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/military/ace">Ace</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/military/buccaneer">Buccaneer</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/military/dartlinggunner">Dartling</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/military/helipilot">Heli</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/military/mortar">Mortar</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/military/sniper">Sniper</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/military/sub">Submarine</Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li>
                        <DropdownButton id="dropdown-basic-button" title="Magic" bsPrefix="categoryButton">
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/magic/alchemist">Alchemist</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/magic/druid">Druid</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/magic/ninja">Ninja</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/magic/super">Super</Dropdown.Item>
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/magic/wizard">Wizard</Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li>
                        <DropdownButton id="dropdown-basic-button" title="Support" bsPrefix="categoryButton">
                            <Dropdown.Item bsPrefix="ddItem" href="/monkeys/support/bananafarm">Banana Farm</Dropdown.Item>
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