import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Alert } from 'react-bootstrap';
class Randomizer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            heroKey: 0,
            towersKey: [0,0,0],
            imageSize: 250,
            heroExcluded: [],
            towersExcluded: []
        };
        this.randomizeHero = this.randomizeHero.bind(this);
        this.DisplayHero = this.DisplayHero.bind(this);
        this.randomizeTower = this.randomizeTower.bind(this);
        this.displayTowers = this.displayTowers.bind(this);
        this.rouletteLoadout = this.rouletteLoadout.bind(this);
        this.rouletteHero = this.rouletteHero.bind(this);
        this.rouletteTower = this.rouletteTower.bind(this);
        this.includesHero = this.includesHero.bind(this);
        this.includesTower =this.includesTower.bind(this);
        this.resetExcludedTowers =this.resetExcludedTowers.bind(this);
        this.resetExcludedHeroes = this.resetExcludedHeroes.bind(this);

    }
    generateTowers(){
        return [Math.floor(Math.random()*22+1), Math.floor(Math.random()*22+1) , Math.floor(Math.random()*22+1) ];
    }
    checkUnique(arr){
        let l = arr.length;
        let s = new Set();
        for(let i=0;i<l;i++){
            s.add(arr[i]);
        }
        return (s.size===arr.length)
    }
    randomizeHero(){
        let hero = (Math.floor(Math.random()*4))+1;
        while(this.includesHero(hero)){
            hero = (Math.floor(Math.random()*4))+1;
        }
        this.setState({heroKey: hero});
    }
    randomizeTower(){
        let towers = this.generateTowers();
        while(!this.checkUnique(towers) || this.includesTower(towers)){
            towers = this.generateTowers();
        }
        this.setState({towersKey: towers});

    }
    rouletteLoadout(){
        this.rouletteHero();
        this.rouletteTower();
    }
    rouletteHero(){
        this.randomizeHero();
        let timer = setInterval(this.randomizeHero, 150);
        setTimeout(function(){
            clearInterval(timer);
        }, 2000);


       
    }
    rouletteTower(){
        this.randomizeTower();
        let timer = setInterval(this.randomizeTower, 150);
        setTimeout(function(){clearInterval(timer);}, 2000);
    }
    displayTowers(props){
        //<Link href=""><a></a></Link>
        switch(this.state.towersKey[props.index]){
            case 0:
                return <Image src="/images/hidden/monkeys/DartHidden.png" alt="hidden Dart Monkey" width={this.state.imageSize} height={this.state.imageSize} priority={true}/>
            case 1:
                return <Link href="monkeys/military/ace"><a><Image className="test"src="/images/monkeys/Ace.webp" alt='Monkey Ace' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> </a></Link>
            case 2:
                return <Link href="monkeys/magic/achemist"><a><Image src="/images/monkeys/Alchemist.webp" alt='Alchemist mMnkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>
            case 3:
                return <Link href="monkeys/support/bananafarm"><a><Image src="/images/monkeys/BananaFarm.webp" alt='Banana Farm' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>
            case 4:
                return <Link href="monkeys/primary/bombshooter"><a><Image src="/images/monkeys/BombShooter.webp" alt='Bomb Shooter' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>
            case 5:
                return <Link href="monkeys/primary/boomerang"><a> <Image src="/images/monkeys/Boomerang.webp" alt='Boomerang Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>
            case 6:
                return <Link href="monkeys/military/buccaneer"><a><Image src="/images/monkeys/Buccaneer.webp" alt='Monkey Buccaneer' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>
            case 7:
                return <Link href="monkeys/primary/dart"><a> <Image src="/images/monkeys/Dart.webp" alt='Dart Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> </a></Link>
            case 8:
                return <Link href="monkeys/military/dartlinggunner"><a><Image src="/images/monkeys/DartlingGunner.webp" alt='Dartling Gunner' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>
            case 9:
                return <Link href="monkeys/magic/druid"><a><Image src="/images/monkeys/Druid.webp" alt='Druid Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>
            case 10:
                return <Link href="monkeys/support/engineer"><a><Image src="/images/monkeys/Engineer.webp" alt='Monkey Engineer' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>
            case 11:
                return <Link href="monkeys/primary/gluegunner"><a><Image src="/images/monkeys/GlueGunner.webp" alt='Glue Gunner Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> </a></Link>
            case 12:
                return <Link href="monkeys/military/helipilot"><a><Image src="/images/monkeys/HeliPilot.webp" alt='Heli Pilot' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>
            case 13:
                return <Link href="monkeys/primary/ice"><a><Image src="/images/monkeys/Ice.webp" alt='Ice Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>
            case 14:
                return  <Link href="monkeys/military/mortar"><a><Image src="/images/monkeys/Mortar.webp" alt='Mortar' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>
            case 15:
                return <Link href="monkeys/magic/ninja"><a><Image src="/images/monkeys/Ninja.webp" alt='Ninja Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>
            case 16:
                return  <Link href="monkeys/military/sniper"><a><Image src="/images/monkeys/Sniper.webp" alt='Sniper Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>
            case 17:
                return <Link href="monkeys/support/spikefactory"><a><Image src="/images/monkeys/SpikeFactory.webp" alt='Spike Factory' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>
            case 18:
                return <Link href="monkeys/military/sub"><a><Image src="/images/monkeys/Sub.webp" alt='Submarine Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>
            case 19:
                return <Link href="monkeys/magic/super"><a><Image src="/images/monkeys/Super.webp" alt='Super Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>
            case 20:
                return <Link href="monkeys/primary/tackshooter"><a><Image src="/images/monkeys/TackShooter.webp" alt='Tackshooter' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> </a></Link>
            case 21:
                return <Link href="monkeys/support/village"><a><Image src="/images/monkeys/Village.webp" alt='Village' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>
            case 22:
                return <Link href="monkeys/magic/wizard"><a><Image src="/images/monkeys/Wizard.webp" alt='Monkey Apprentice' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>
            default:
                return <span>default case returned(error)</span>
        }
    }
    DisplayHero(){
        switch(this.state.heroKey){
            case 0:
                return <Image src="/images/hidden/heroes/QuincyPortraitHidden.png" alt="Hidden Quincy" width={this.state.imageSize} height={this.state.imageSize} priority={true}/>;
            case 1:
                return <Link href="/heroes/quincy"><a><Image src='/images/heroes/QuincyPortrait.webp' alt='Quincy' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> </a></Link>;
            case 2: 
                return <Link href="/heroes/gwendolin"><a><Image src='/images/heroes/GwendolinPortrait.webp' alt='Gwendolin' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>;
            case 3: 
                return <Link href="/heroes/obyn"><a><Image src='/images/heroes/ObynGreenFootPortrait.webp' alt='Obyn' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>;
            case 4: 
                return <Link href="/heroes/strikerjones"><a><Image src='/images/heroes/StrikerJonesPortrait.webp' alt='Striker Jones' width={this.state.imageSize} height={this.state.imageSize} priority={true}/></a></Link>;
            default:
                return <p>default case returned(error)</p>
        }
    }
    excludeHero(val){
        let arr = this.state.heroExcluded;
        let index = arr.indexOf(val);
        let elementId= "h"+val;
        if(!(index===-1)){
            arr.splice(index, 1);
            document.getElementById(elementId).style.backgroundColor="transparent"
        }
        else{
            if(arr.length>2){
                alert("must have at least 1 hero");
            }else{
                arr.push(val);
            document.getElementById(elementId).style.backgroundColor="rgb(200,50,50)";
            }
        }
        this.setState({heroExcluded: arr})
    }
    includesHero(hero){
        for(let i=0;i<this.state.heroExcluded.length;i++){
            if(this.state.heroExcluded[i]===hero){
                return true;
            }

        }
        return false;
    }
    excludeTower(val){
        let arr = this.state.towersExcluded;
        let index = arr.indexOf(val);
        let elementId= "t"+val;
        if(!(index===-1)){
            arr.splice(index, 1);
            document.getElementById(elementId).style.backgroundColor="transparent"
        }
        else{
            console.log(arr.length);
            if(arr.length>18){
                alert("must have at least 3 towers");
            } else{
                arr.push(val);
                document.getElementById(elementId).style.backgroundColor="rgb(200,50,50)";
            }
        }
        this.setState({towersExcluded: arr})
    }
    includesTower(towers){
        for(let i=0;i<this.state.towersExcluded.length;i++){
            for(let j=0;j<towers.length; j++){
                if(this.state.towersExcluded[i]===towers[j]){
                    return true;
                }
            }

        }
        return false;
    }
    resetExcludedTowers(){
        this.setState({towersExcluded: []});
        for(let i=1;i<23;i++){
            let elementId = "t"+i;
            document.getElementById(elementId).style.backgroundColor="transparent"
        }
    }
    resetExcludedHeroes(){
        this.setState({heroExcluded: []});
        for(let i=1;i<5;i++){
            let elementId = "h"+i;
            document.getElementById(elementId).style.backgroundColor="transparent"
        }
    }

    render() {
        return (
            <>
                <button className='randomizeLoadout' onClick={this.rouletteLoadout}>
                    <h2>Random Loadout</h2>
                </button>
                <ul className="randomizerGrid">
                    <li className="r1">
                    <ul className="randomizeHero">
                        <li className="button">
                            <button className='randomizeButton' onClick={this.rouletteHero}>
                                <h2>Random Hero</h2>
                            </button>
                        </li>
                        <li className="button">
                            <DropdownButton id="dropdown-basic-button" title="Exclude Heroes" bsPrefix="excludeButton" autoClose={false}>
                                <Dropdown.Item bsPrefix="ddH" onClick={this.resetExcludedHeroes}>Reset</Dropdown.Item>
                                <Dropdown.Item id="h1" bsPrefix="ddH" onClick={() => this.excludeHero(1)}>Quincy</Dropdown.Item>
                                <Dropdown.Item id="h2" bsPrefix="ddH" onClick={() => this.excludeHero(2)}>Gwen</Dropdown.Item>
                                <Dropdown.Item id="h3" bsPrefix="ddH" onClick={() => this.excludeHero(3)}>Obyn</Dropdown.Item>
                                <Dropdown.Item id="h4" bsPrefix="ddH" onClick={() => this.excludeHero(4)}>Striker</Dropdown.Item>
                            </DropdownButton>
                        </li>

                        <div className="displayHero">
                            <this.DisplayHero />
                        </div>

                    </ul>
                    </li>
                    <li className="r2">
                    <ul className="randomizeTower">
                        <li className="button">
                            <button className='randomizeButton' onClick={this.rouletteTower}>
                                <h2>Random Towers</h2>
                            </button>
                        </li>
                        <li className="button">
                            <DropdownButton id="dropdown-basic-button" title="Exclude Towers" bsPrefix="excludeButton excludeButton-menu" autoClose={false}>
                                <h3>
                                    <Dropdown.Item bsPrefix="ddT" onClick={this.resetExcludedTowers}>Reset</Dropdown.Item>
                                    <Dropdown.Item id="t1" bsPrefix="ddT" onClick={() => this.excludeTower(1)}>Ace</Dropdown.Item>
                                    <Dropdown.Item id="t2" bsPrefix="ddT" onClick={() => this.excludeTower(2)}>Alchemist</Dropdown.Item>
                                    <Dropdown.Item id="t3" bsPrefix="ddT" onClick={() => this.excludeTower(3)}>Banana Farm</Dropdown.Item>
                                </h3>
                                <h3>
                                    <Dropdown.Item id="t4" bsPrefix="ddT" onClick={() => this.excludeTower(4)}>Bombshooter</Dropdown.Item>
                                    <Dropdown.Item id="t5" bsPrefix="ddT" onClick={() => this.excludeTower(5)}>Boomerang</Dropdown.Item>
                                    <Dropdown.Item id="t6" bsPrefix="ddT" onClick={() => this.excludeTower(6)}>Buccaneer</Dropdown.Item>
                                    <Dropdown.Item id="t7" bsPrefix="ddT" onClick={() => this.excludeTower(7)}>Dart</Dropdown.Item>
                                </h3>
                                <h3>
                                    <Dropdown.Item id="t8" bsPrefix="ddT" onClick={() => this.excludeTower(8)}>Dartling</Dropdown.Item>
                                    <Dropdown.Item id="t9" bsPrefix="ddT" onClick={() => this.excludeTower(9)}>Druid</Dropdown.Item>
                                    <Dropdown.Item id="t10" bsPrefix="ddT" onClick={() => this.excludeTower(10)}>Engineer</Dropdown.Item>
                                    <Dropdown.Item id="t11" bsPrefix="ddT" onClick={() => this.excludeTower(11)}>Gluegunner</Dropdown.Item>
                                </h3>
                                <h3>
                                    <Dropdown.Item id="t12" bsPrefix="ddT" onClick={() => this.excludeTower(12)}>Heli</Dropdown.Item>
                                    <Dropdown.Item id="t13" bsPrefix="ddT" onClick={() => this.excludeTower(13)}>Ice</Dropdown.Item>
                                    <Dropdown.Item id="t14" bsPrefix="ddT" onClick={() => this.excludeTower(14)}>Mortar</Dropdown.Item>
                                    <Dropdown.Item id="t15" bsPrefix="ddT" onClick={() => this.excludeTower(15)}>Ninja</Dropdown.Item>
                                </h3>
                                <h3>
                                    <Dropdown.Item id="t16" bsPrefix="ddT" onClick={() => this.excludeTower(16)}>Sniper</Dropdown.Item>
                                    <Dropdown.Item id="t17" bsPrefix="ddT" onClick={() => this.excludeTower(17)}>SpikeFactory</Dropdown.Item>
                                    <Dropdown.Item id="t18" bsPrefix="ddT" onClick={() => this.excludeTower(18)}>Sub</Dropdown.Item>
                                    <Dropdown.Item id="t19" bsPrefix="ddT" onClick={() => this.excludeTower(19)}>Super</Dropdown.Item>
                                </h3>
                                <h3>
                                    <Dropdown.Item id="t20" bsPrefix="ddT" onClick={() => this.excludeTower(20)}>Tackshooter</Dropdown.Item>
                                    <Dropdown.Item id="t21" bsPrefix="ddT" onClick={() => this.excludeTower(21)}>Village</Dropdown.Item>
                                    <Dropdown.Item id="t22" bsPrefix="ddT" onClick={() => this.excludeTower(22)}>Wizard</Dropdown.Item>
                                </h3>
                            </DropdownButton>

                        </li>
                        <div className="displayTowerContainer">
                            <this.displayTowers className="t0" index={0} />
                            <this.displayTowers className="t1" index={1} />
                            <this.displayTowers className="t2" index={2} />
                        </div>
                    </ul>
                    </li>
                </ul>

            </>
        )
    }
}
export default Randomizer;