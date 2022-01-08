import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
class vip extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            gameLength: "Short",
            arena: "Red Bloon Camp",
            gameLength2: "Short",
            arena2: "Red Bloon Camp",
            gameLength3: "Short",
            arena3: "Red Bloon Camp",
            gameLength4: "Short",
            arena4: "Red Bloon Camp",
            vip: "t",
            monkeys: null,



        };
        this.calcGamesOne=this.calcGamesOne.bind(this);
        this.calcGamesTwentyTwo=this.calcGamesTwentyTwo.bind(this);
        this.calcGamesThree=this.calcGamesThree.bind(this);
        this.calcGamesFour =this.calcGamesFour.bind(this);
        this.rvip=this.rvip.bind(this);
    }
    calcGamesOne(){
        let avgExp= 300;
        let multi = 1.00;
        switch(this.state.gameLength){
            case "Short":
                avgExp = 300;
                break;
            case "Medium":
                avgExp = 750;
                break;
            case "Long":
                avgExp =1125;
                break;
        }
        switch(this.state.arena){
            case "Red Bloon Camp":
                multi = 1.00;
                break;
            case "Yellow Stadium":
                multi = 1.00;
                break;
            case "White Wasteland":
                multi =1.05
                break;
            case "Lead Dungeon":
                multi =1.08
                break;
            case "Ceramic Crucible":
                multi =1.10
                break;
            case "MOAB Pit":
                multi =1.15
                break;
            case "BFB Colosseum":
                multi =1.15
                break;
            case "ZOMG Superdome":
                multi =1.15
                break;
            case "Hall Of Masters":
                multi =1.15
                break;
        }
        return (
            <h3>{Math.round(141000/(avgExp*multi))}</h3>
        )
    }
    calcGamesTwentyTwo(){
        let avgExp= 300;
        let multi = 1.00;
        switch(this.state.gameLength2){
            case "Short":
                avgExp = 300;
                break;
            case "Medium":
                avgExp = 750;
                break;
            case "Long":
                avgExp =1125;
                break;
        }
        switch(this.state.arena2){
            case "Red Bloon Camp":
                multi = 1.00;
                break;
            case "Yellow Stadium":
                multi = 1.00;
                break;
            case "White Wasteland":
                multi =1.05
                break;
            case "Lead Dungeon":
                multi =1.08
                break;
            case "Ceramic Crucible":
                multi =1.10
                break;
            case "MOAB Pit":
                multi =1.15
                break;
            case "BFB Colosseum":
                multi =1.15
                break;
            case "ZOMG Superdome":
                multi =1.15
                break;
            case "Hall Of Masters":
                multi =1.15
                break;
        }
        return (
            <h3>{Math.round(3102000/(avgExp*multi))}</h3>
        )
    }
    calcGamesThree(){
        let avgExp= 300;
        let multi = 1.00;
        switch(this.state.gameLength3){
            case "Short":
                avgExp = 300;
                break;
            case "Medium":
                avgExp = 750;
                break;
            case "Long":
                avgExp =1125;
                break;
        }
        switch(this.state.arena3){
            case "Red Bloon Camp":
                multi = 1.00;
                break;
            case "Yellow Stadium":
                multi = 1.00;
                break;
            case "White Wasteland":
                multi =1.05
                break;
            case "Lead Dungeon":
                multi =1.08
                break;
            case "Ceramic Crucible":
                multi =1.10
                break;
            case "MOAB Pit":
                multi =1.15
                break;
            case "BFB Colosseum":
                multi =1.15
                break;
            case "ZOMG Superdome":
                multi =1.15
                break;
            case "Hall Of Masters":
                multi =1.15
                break;
        }
        return (
            <h3>{Math.round(3102000/(avgExp*multi*3))}</h3>
        )

    }
    calcGamesFour(){
        let avgExp= 300;
        let multi = 1.00;
        switch(this.state.gameLength4){
            case "Short":
                avgExp = 300;
                break;
            case "Medium":
                avgExp = 750;
                break;
            case "Long":
                avgExp =1125;
                break;
        }
        switch(this.state.arena4){
            case "Red Bloon Camp":
                multi = 1.00;
                break;
            case "Yellow Stadium":
                multi = 1.00;
                break;
            case "White Wasteland":
                multi =1.05
                break;
            case "Lead Dungeon":
                multi =1.08
                break;
            case "Ceramic Crucible":
                multi =1.10
                break;
            case "MOAB Pit":
                multi =1.15
                break;
            case "BFB Colosseum":
                multi = 1.15
                break;
            case "ZOMG Superdome":
                multi = 1.15
                break;
            case "Hall Of Masters":
                multi = 1.15
                break;
        }
        if (this.state.vip==="t") {
            return <h3>{Math.round(141000 * this.state.monkeys / (avgExp * multi * 3))}</h3>
        } else {
            return <h3>{Math.round(141000 * this.state.monkeys / (avgExp * multi))}</h3>
        }

    }
    rvip(){
        if(this.state.vip==="t"){
            return <>with</>
        } else{
            return <>without</>
        }

    }
    textInput(text){
        
        
        if(text>22){
            text=22;
        }
        if(text<0){
            text=0
        }
        this.setState({monkeys: text});
        
    }
    render(){

        return (<div className="vip">

            <header>
                <h1>Is VIP pass worth it for extra experience?</h1>
                <p>Bloons Tower defense Battles 2, released 2021, is the successor to Bloons Tower Battles 1, released in 2012. BTD Battles 2 brings many improvements to the original game such as heroes, new towers, additional upgrade paths, and more. However, the time to unlock all of these upgrades is rather lengthy. This post will help you answer the question of &quot;Is VIP pass worth it for extra XP?&quot;</p>
                <a href="#fullCalculator"> Skip to full calculator</a>
            </header>
            <main>
                <h2>
                    How much XP does each tier cost?
                </h2>
                <p>
                    In BTD battles 2, the experience per tier varies from path to path and from monkey to monkey. Every tower starts with 150 XP Experience points are tower specific and cannot be shared. The average experience cost per tier is about:
                </p>
                <p>
                </p>
                <ul className="t5">
                    <li className="t51">
                        Tier 1:
                    </li>
                    <li className="t52">
                        unlocked by default (as of patch 1.0.2)
                    </li>
                        <li className="t53">
                            Tier 2:
                        </li>
                        <li className="t54">
                            unlocked by default (as of path 1.0.2)
                        </li>
                        <li className="t55">
                            Tier 3:
                        </li>
                        <li className="t56">
                            ~2000 XP
                        </li>
                        <li className="t57">
                            Tier 4:
                        </li>
                        <li className="t58">
                            ~10,000 XP
                        </li>
                        <li className="t59">
                            Tier 5:
                        </li>
                        <li className="t510">
                            ~35,000 XP
                        </li>
                    </ul>
                
                <h2>
                    How much XP will it takes to unlock an entire monkey?
                </h2>
                <p>
                    In BTD battles 2, each monkey has 3 paths with 5 tiers each. This means that every monkey will have:
                </p>
                <ul className="t3">
                    <li className="t31">
                        3 tier 3&apos;s:
                    </li>
                    <li className="t32">
                        3 * 2,000 = 6,000 XP
                    </li>
                    <li className="t33">
                        3 tier 4&apos;s:
                    </li>
                    <li className="t34">
                        3 * 10,000 XP = 30,000 XP
                    </li>
                    <li className="t35">
                        3 tier 5&apos;s:
                    </li>
                    <li className="t36">
                        3* 35,000 XP = 105,000 XP
                    </li>
                    <li className="t37">
                        total:
                    </li>
                    <li className="t38">
                        ~141,000 XP
                    </li>
                </ul>
                <h2>Well how long would it take me to earn this much XP?</h2>
                <h3>XP is rewarded based on game length and outcome:</h3>
                <ul>
                    <li>
                        For early game losses ~200 tower XP is awarded
                    </li>
                    <li>
                        For early game wins ~400 tower XP is awarded
                    </li>
                    <li>
                        For mid game losses ~500 tower XP is awarded
                    </li>
                    <li>
                        For mid game wins ~1000 tower XP is awarded
                    </li>
                    <li>
                        For late game wins ~750 tower XP in awarded
                    </li>
                    <li>
                        For late game wins ~1500 tower XP is awarded
                    </li>
                </ul>
                <h3>Additionally an XP boost is granted on the arena level:</h3>
                <ul>
                    <li>
                        Red Bloon Camp: 0%
                    </li>
                    <li>
                        Yellow Stadium: 0%
                    </li>
                    <li>
                        White Wasteland: 5%
                    </li>
                    <li>
                        Lead Dungeon: 8%
                    </li>
                    <li>
                        Ceramic Crucible: 10%
                    </li>
                    <li>
                        MOAB Pit: 15%
                    </li>
                    <li>
                        BFB Colosseum: 15%
                    </li>
                    <li>
                        ZOMG Superdome: 15%
                    </li>
                    <li>
                        Hall Of Masters: 15%
                    </li>

                </ul>
                <p>
                    Using the stats above we can calculate how many games to play in order to fully unlock a monkey
                </p>
                <Form>
                    <Form.Group>
                        <Form.Control className="shadow-none" as="select" onChange={() => this.setState({ gameLength: event.target.value })}>
                            <option >Short</option>
                            <option >Medium</option>
                            <option >Long</option>
                        </Form.Control>
                        <Form.Control className="shadow-none" as="select" onChange={() => this.setState({ arena: event.target.value })}>
                            <option >Red Bloon Camp</option>
                            <option>Yellow Stadium</option>
                            <option>White Wasteland</option>
                            <option>Lead Dungeon</option>
                            <option>Ceramic Crucible</option>
                            <option>MOAB Pit</option>
                            <option>BFB Colosseum</option>
                            <option>ZOMG Superdome</option>
                            <option>Hall Of Masters</option>
                        </Form.Control >
                    </Form.Group>
                </Form>
                <div>
                    <p>It would take you:</p>
                    <this.calcGamesOne />
                    <p>games to unlock one entire monkey (assumed win loss rate is 50% and that only one tower is used the entire game to mitigate XP splitting)</p>
                </div>
                <h2>How many games for all of the monkeys?</h2>
                <p>In BTD Battles 2, there are 22 monkeys total</p>
                <p>22 Monkeys * 141000 XP = 3,102,000 XP</p>
                <Form>
                    <Form.Group>
                        <Form.Control className="shadow-none" as="select" onChange={() => this.setState({ gameLength2: event.target.value })}>
                            <option>Short</option>
                            <option>Medium</option>
                            <option>Long</option>
                        </Form.Control>
                        <Form.Control className="shadow-none" as="select" onChange={() => this.setState({ arena2: event.target.value })}>
                            <option>Red Bloon Camp</option>
                            <option>Yellow Stadium</option>
                            <option>White Wasteland</option>
                            <option>Lead Dungeon</option>
                            <option>Ceramic Crucible</option>
                            <option>MOAB Pit</option>
                            <option>BFB Colosseum</option>
                            <option>ZOMG Superdome</option>
                            <option>Hall Of Masters</option>
                        </Form.Control >
                    </Form.Group>
                </Form>
                <div>
                    <p>It would take you:</p>
                    <this.calcGamesTwentyTwo />
                    <p>games to unlock all 22 monkeys (assumed win loss rate is 50%)</p>
                </div>
                <h2>Well what about VIP?</h2>
                <p>The VIP pass triples the amount of tower XP earned, as well as battle points and monkey money. Battle points can be used to unlock chests which give additional XP. The VIP pass can be purchased for 30 days for $4.99 or 90 days for $11.99.</p>
            </main>
            <Form>
                <Form.Group>
                    <Form.Control className="shadow-none" as="select" onChange={() => this.setState({ gameLength3: event.target.value })}>
                        <option >Short</option>
                        <option>Medium</option>
                        <option>Long</option>
                    </Form.Control>
                    <Form.Control className="shadow-none" as="select" onChange={() => this.setState({ arena3: event.target.value })}>
                        <option>Red Bloon Camp</option>
                        <option>Yellow Stadium</option>
                        <option>White Wasteland</option>
                        <option>Lead Dungeon</option>
                        <option>Ceramic Crucible</option>
                        <option>MOAB Pit</option>
                        <option>BFB Colosseum</option>
                        <option>ZOMG Superdome</option>
                        <option>Hall Of Masters</option>
                    </Form.Control >
                </Form.Group>
            </Form>
            <div>
                <p>It would take you:</p>
                <this.calcGamesThree />
                <p>games to unlock all 22 monkeys with VIP (assumed win loss rate is 50%)</p>
            </div>
            <h2 id="fullCalculator">Full Calculator</h2>
            <Form>
                <Form.Group>
                    <Form.Control className="shadow-none" type="text" onChange={() => this.textInput(event.target.value)} value={this.state.monkeys} placeholder="Number of monkeys to unlock">

                    </Form.Control>
                    <Form.Control className="shadow-none" as="select" onChange={() => this.setState({ gameLength4: event.target.value })}>
                        <option>Short</option>
                        <option>Medium</option>
                        <option>Long</option>
                    </Form.Control>
                    <Form.Control className="shadow-none" as="select" onChange={() => this.setState({ arena4: event.target.value })}>
                        <option>Red Bloon Camp</option>
                        <option>Yellow Stadium</option>
                        <option>White Wasteland</option>
                        <option>Lead Dungeon</option>
                        <option>Ceramic Crucible</option>
                        <option>MOAB Pit</option>
                        <option>BFB Colosseum</option>
                        <option>ZOMG Superdome</option>
                        <option>Hall Of Masters</option>
                    </Form.Control>
                    <Form.Control className="shadow-none" as="select" onChange={() => this.setState({ vip: event.target.value })}>
                        <option value={"t"}>With VIP</option>
                        <option value={"f"}>Without VIP</option>
                    </Form.Control>
                </Form.Group>
            </Form>
            <div>
                <p>It would take you:</p>
                <this.calcGamesFour/>
                <p>games to unlock {this.state.monkeys} monkeys <this.rvip/> VIP (assumed win loss rate is 50%)</p>
            </div>
        </div>
        )
    }

}
export default vip;