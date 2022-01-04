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
            <p>{Math.round(141000/(avgExp*multi))}</p>
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
            <p>{Math.round(3102000/(avgExp*multi))}</p>
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
            <p>{Math.round(3102000/(avgExp*multi*3))}</p>
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
            return <p>{Math.round(141000 * this.state.monkeys / (avgExp * multi * 3))}</p>
        } else {
            return <p>{Math.round(141000 * this.state.monkeys / (avgExp * multi))}</p>
        }

    }
    rvip(){
        console.log(this.state.vip)
        console.log(this.state.vip==="t")
        if(this.state.vip==="t"){
            console.log("with")
            return <>with</>
        } else{
            console.log("without")
            return <>without</>
        }

    }
    render(){

        return (<>

            <header>
                <h1>Is VIP pass worth it for extra experience?</h1>
                <p>Bloons Tower defense Battles 2, released 2021, is the successor to Bloons Tower Battles 1, realeased in 2012. BTD Battles 2 brings many improvements to the original game such as heroes, new towers, additional upgrade paths, and more. However, the time to unlock all of these upgrades is rather lengthy. This post will help you answer the question of "Is VIP pass worth it for extra exp?"</p>
            </header>
            <main>
                <h2>
                    How much XP does each tier cost?
                </h2>
                <p>
                    In BTD battles 2, the experience per tier varies from path to path and from monkey to monkey. Every tower starts with 150 XP Experience points are tower specific and cannot be shared. The average experience cost per tier is about:
                </p>
                    <ul>
                        <li>
                            Tier 1:
                        </li>
                        <li>
                            unlocked by default(as of patch 1.0.2)
                        </li>
                        <li>
                            Tier 2:
                        </li>
                        <li>
                            unlocked by default(as of path 1.0.2)
                        </li>
                        <li>
                            Tier 3:
                        </li>
                        <li>
                            ~2000 XP
                        </li>
                        <li>
                            Tier 4:
                        </li>
                        <li>
                            ~10,000 XP
                        </li>
                        <li>
                            Tier 5:
                        </li>
                        <li>
                            ~35,000 XP
                        </li>
                    </ul>
                
                <h2>
                    How much XP will it takes to unlock an entire monkey?
                </h2>
                <p>
                    In BTD battles 2, each monkey has 3 paths with 5 tiers each. This means that every monkey will have:
                    </p>
                    <ul>
                        <li>
                            3 tier 3's: 
                        </li>
                        <li>
                            3 * 2,000 = 6,000 XP
                        </li>
                        <li>
                            3 tier 4's:
                        </li>
                    <li>
                        3 * 10,000 XP = 30,000 XP
                    </li>
                    <li>
                        3 tier 5's:
                    </li>
                    <li>
                        3* 35,000 XP = 105,000 XP
                    </li>
                    <li>
                        total:
                    </li>
                    <li>
                        ~141,000 XP
                    </li>
                </ul>
                <h2>Well how long would it take me to earn this much XP?</h2>
                <h3>XP stats:</h3>
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
                        For mid game wins ~1000 tower xp is awarded
                    </li>
                    <li>
                        For Late game wins ~750 tower xp in awarded
                    </li>
                    <li>
                        For late game wins ~1500 tower XP is awarded
                    </li>
                </ul>
                <ul>
                    <li>
                        Additionally an XP boost is granted on the arena level:
                    </li>
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
                        <Form.Control as="select" onChange={() => this.setState({ gameLength: event.target.value })}>
                            <option>Short</option>
                            <option>Medium</option>
                            <option>Long</option>
                        </Form.Control>
                        <Form.Control as="select" onChange={() => this.setState({ arena: event.target.value })}>
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
                    <this.calcGamesOne />
                    <p>games to unlock one entire monkey</p>
                    <p>(assumed win loss rate is 50% and that only one tower is used the entire game to mitigate XP splitting)</p>
                </div>
                <h2>How many games for all of the monkeys?</h2>
                <h3>In BTD Battles 2, there are 22 monkeys total</h3>
                <p>22 Monkeys * 141000 XP = 3,102,000 XP</p>
                <Form>
                    <Form.Group>
                        <Form.Control as="select" onChange={() => this.setState({ gameLength2: event.target.value })}>
                            <option>Short</option>
                            <option>Medium</option>
                            <option>Long</option>
                        </Form.Control>
                        <Form.Control as="select" onChange={() => this.setState({ arena2: event.target.value })}>
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
                    <p>games to unlock all 22 monkeys</p>
                    <p>(assumed win loss rate is 50%)</p>
                </div>
                <h2>Well what about VIP?</h2>
                <p>The VIP pass triples the amount of tower XP earned, among other benefits.</p>
            </main>
            <Form>
                <Form.Group>
                    <Form.Control as="select" onChange={() => this.setState({ gameLength3: event.target.value })}>
                        <option>Short</option>
                        <option>Medium</option>
                        <option>Long</option>
                    </Form.Control>
                    <Form.Control as="select" onChange={() => this.setState({ arena3: event.target.value })}>
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
                <p>games to unlock all 22 monkeys with VIP</p>
                <p>(assumed win loss rate is 50%)</p>
            </div>
            <h2>Full Calculator</h2>
            <Form>
                <Form.Group>
                    <Form.Control type="text" onChange={() => this.setState({monkeys: event.target.value})} value={this.state.monkeys} placeholder="Number of monkeys to unlock">

                    </Form.Control>
                    <Form.Control as="select" onChange={() => this.setState({ gameLength4: event.target.value })}>
                        <option>Short</option>
                        <option>Medium</option>
                        <option>Long</option>
                    </Form.Control>
                    <Form.Control as="select" onChange={() => this.setState({ arena4: event.target.value })}>
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
                    <Form.Control as="select" onChange={() => this.setState({ vip: event.target.value })}>
                        <option value={"t"}>With VIP</option>
                        <option value={"f"}>Without VIP</option>
                    </Form.Control>
                </Form.Group>
            </Form>
            <div>
                <p>It would take you:</p>
                <this.calcGamesFour/>
                <p>games to unlock {this.state.monkeys} monkeys <this.rvip/> VIP</p>
                <p>(assumed win loss rate is 50%)</p>
            </div>

        </>
        )
    }

}
export default vip;