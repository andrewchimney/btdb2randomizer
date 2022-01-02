import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { ModalBody } from 'react-bootstrap';

class Randomizer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            heroKey: 0,
            towersKey: [0,0,0],
            imageSize: 250,
            heroExcluded: [],
            towersExcluded: [],
            heroAlert: false,
            towerAlert: false,
            heroSelectionShow: false,
            towerSelectionShow: false
        };
        this.randomizeHero = this.randomizeHero.bind(this);
        this.DisplayHero = this.DisplayHero.bind(this);
        this.randomizeTower = this.randomizeTower.bind(this);
        this.displayTowers = this.displayTowers.bind(this);
        this.includesHero = this.includesHero.bind(this);
        this.includesTower =this.includesTower.bind(this);
        this.resetExcludedTowers =this.resetExcludedTowers.bind(this);
        this.resetExcludedHeroes = this.resetExcludedHeroes.bind(this);
        this.showHeroAlert = this.showHeroAlert.bind(this)
        this.showTowerAlert = this.showTowerAlert.bind(this)
        this.randomizeLoadout=this.randomizeLoadout.bind(this)
        this.excludeHeroLoad =this.excludeHeroLoad.bind(this);
        this.excludeTowerLoad=this.excludeTowerLoad.bind(this);

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
    randomizeLoadout(){
        this.randomizeHero();
        this.randomizeTower();
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
            document.getElementById(elementId).style.opacity="1"
            this.setState({heroAlert: false});
        }
        else{
            if(arr.length>2){
                this.setState({heroAlert: true});
            }else{
                arr.push(val);
            document.getElementById(elementId).style.opacity=".5";
            }
        }
        this.setState({heroExcluded: arr})
    }
    excludeHeroLoad(){
        for(let i=0;i<this.state.heroExcluded.length;i++){
            let elementId= "h"+(this.state.heroExcluded[i]);
            console.log(elementId);
            document.getElementById(elementId).style.opacity="0.5"

        }
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
            document.getElementById(elementId).style.opacity="1";
            this.setState({towerAlert: false});
        }
        else{
            console.log(arr.length);
            if(arr.length>18){
                this.setState({towerAlert: true})
            } else{
                arr.push(val);
                document.getElementById(elementId).style.opacity=".5";
            }
        }
        this.setState({towersExcluded: arr})
    }
    excludeTowerLoad(){
        for(let i=0;i<this.state.towersExcluded.length;i++){
            let elementId= "t"+(this.state.towersExcluded[i]);
            document.getElementById(elementId).style.opacity="0.5"

        }
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
    showHeroAlert(){
        return <>
            <Alert show={this.state.heroAlert}>
                <Alert.Heading>
                    Must have at least one hero
                </Alert.Heading>
            </Alert>
            
        </>
    }
    showTowerAlert(){
        return<>
            <Alert show={this.state.towerAlert}>
                <Alert.Heading>
                    Must have at least 3 towers
                </Alert.Heading>
            </Alert>
        </>
    }

    render() {
        return (
            <>
                <Button className='randomizeLoadout shadow-none' onClick={this.randomizeLoadout}>
                    <h2>Random Loadout</h2>
                </Button>
                <div className="randomizerGrid">
                    <div className="r1">

                        <div className="buttons1">
                            <ButtonGroup>
                                <Button className="shadow-none" onClick={this.randomizeHero}>
                                    Random Hero
                                </Button>
                                <Button className="shadow-none" onClick={() => this.setState({ heroSelectionShow: true })}>
                                    Exclude Heroes
                                </Button>
                            </ButtonGroup>
                        </div>


                    <Modal show={this.state.heroSelectionShow} centered={true} onEntering={this.excludeHeroLoad} onHide={()=>this.setState({heroSelectionShow: false})}>
                                <Modal.Header closeButton>
                                    Select heroes to exclude
                                </Modal.Header>
                                <ModalBody>
                                    <div className="heroExcludeContainer">
                                    <Button className="b1 shadow-none" onClick={() => this.excludeHero(1)}> 
                                        <Image className="b1"id="h1"src='/images/heroes/QuincyPortrait.webp' alt='Quincy' width="100%" height="100%" priority={true}/>
                                    </Button>
                                    <Button className="b2 shadow-none" onClick={() => this.excludeHero(2)}> 
                                    <Image className="b2"id="h2" src='/images/heroes/GwendolinPortrait.webp' alt='Gwendolin' width="100%" height="100%" priority={true}/>
                                    </Button>
                                    <Button className="b3 shadow-none" onClick={() => this.excludeHero(3)}> 
                                        <Image className="b3"id="h3" src='/images/heroes/ObynGreenFootPortrait.webp' alt='Obyn' width="100%" height="100%" priority={true}/>
                                    </Button>
                                    <Button className="b4 shadow-none" onClick={() => this.excludeHero(4)}> 
                                        <Image className="b4"id="h4" src='/images/heroes/StrikerJonesPortrait.webp' alt='Striker' width="100%" height="100%" priority={true}/>
                                    </Button>
                                    </div>
                                    <this.showHeroAlert/>
                                </ModalBody>
                            </Modal>
                        <div className="displayHero">
                            <this.DisplayHero />
                        </div>
                    </div>


                    <div className="r2">
                        <div className="buttons2">
                        <ButtonGroup>
                            <Button className="shadow-none" onClick={this.randomizeTower}>
                                Random Tower
                            </Button>
                            <Button className="shadow-none" onClick={() => this.setState({ towerSelectionShow: true })}>
                                Exclude Towers
                            </Button>
                        </ButtonGroup>
                        </div>
                        <Modal className="towersModal" show={this.state.towerSelectionShow} centered={true} onEntering={this.excludeTowerLoad}onHide={()=>this.setState({towerSelectionShow: false})}>
                                <Modal.Header closeButton>
                                    Select towers to exclude
                                </Modal.Header>
                                <ModalBody>
                                    <div className="towerExcludeContainer">
                                        <div className="excludePrimary">
                                            <Button className="bp1 shadow-none" onClick={() => this.excludeTower(7)}>
                                                <Image className="bp1 " id="t7" src='/images/monkeys/Dart.webp' alt='Dart Monkey' width="100%" height="100%" priority={true} />
                                            </Button>
                                            <Button className="bp2 shadow-none" onClick={() => this.excludeTower(5)}>
                                                <Image className="bp2" id="t5" src='/images/monkeys/Boomerang.webp' alt='Boomerang Monkey' width="100%" height="100%" priority={true} />
                                            </Button>
                                            <Button className="bp3 shadow-none" onClick={() => this.excludeTower(4)}>
                                                <Image className="bp3" id="t4" src='/images/monkeys/BombShooter.webp' alt='Bomb Bhooter' width="100%" height="100%" priority={true} />
                                            </Button>
                                            <Button className="bp4 shadow-none" onClick={() => this.excludeTower(20)}>
                                                <Image className="bp4" id="t20" src='/images/monkeys/Tackshooter.webp' alt='Tackshooter' width="100%" height="100%" priority={true} />
                                            </Button>
                                            <Button className="bp5 shadow-none" onClick={() => this.excludeTower(13)}>
                                                <Image className="bp5" id="t13" src='/images/monkeys/Ice.webp' alt='Ice Monkey' width="100%" height="100%" priority={true} />
                                            </Button>
                                            <Button className="bp6 shadow-none" onClick={() => this.excludeTower(11)}>
                                                <Image className="bp6" id="t11" src='/images/monkeys/GlueGunner.webp' alt='GlueGunner' width="100%" height="100%" priority={true} />
                                            </Button>
                                           

                                        </div>
                                        <div className="excludeMilitary">
                                            <Button className="bmi1 shadow-none" onClick={() => this.excludeTower(16)}>
                                                <Image className="bmi1" id="t16" src='/images/monkeys/Sniper.webp' alt='Sniper Monkey' width="100%" height="100%" priority={true} />
                                            </Button>
                                            <Button className="bmi2 shadow-none" onClick={() => this.excludeTower(18)}>
                                                <Image className="bmi2" id="t18" src='/images/monkeys/Sub.webp' alt='Submarine Monkey' width="100%" height="100%" priority={true} />
                                            </Button>
                                            <Button className="bmi3 shadow-none" onClick={() => this.excludeTower(6)}>
                                                <Image className="bmi3" id="t6" src='/images/monkeys/Buccaneer.webp' alt='Monkey Buccaneer' width="100%" height="100%" priority={true} />
                                            </Button>
                                            <Button className="bmi4 shadow-none" onClick={() => this.excludeTower(1)}>
                                                <Image className="bmi4" id="t1" src='/images/monkeys/Ace.webp' alt='Monkey Ace' width="100%" height="100%" priority={true} />
                                            </Button>
                                            <Button className="bmi5 shadow-none" onClick={() => this.excludeTower(12)}>
                                                <Image className="bmi5" id="t12" src='/images/monkeys/HeliPilot.webp' alt='Heli Pilot' width="100%" height="100%" priority={true} />
                                            </Button>
                                            <Button className="bmi6 shadow-none" onClick={() => this.excludeTower(14)}>
                                                <Image className="bmi6" id="t14" src='/images/monkeys/Mortar.webp' alt='Mortar Monkey' width="100%" height="100%" priority={true} />
                                            </Button>
                                            <Button className="bmi7 shadow-none" onClick={() => this.excludeTower(8)}>
                                                <Image className="bmi7" id="t8" src='/images/monkeys/DartlingGunner.webp' alt='DartlingGunner' width="100%" height="100%" priority={true} />
                                            </Button>
                                        </div>
                                        <div className="excludeMagic">
                                        <Button className="bma1 shadow-none" onClick={() => this.excludeTower(22)}>
                                                <Image className="bma1" id="t22" src='/images/monkeys/Wizard.webp' alt='Wizard Monkey' width="100%" height="100%" priority={true} />
                                            </Button>
                                            <Button className="bma2 shadow-none" onClick={() => this.excludeTower(19)}>
                                                <Image className="bma2" id="t19" src='/images/monkeys/Super.webp' alt='Super Monkey' width="100%" height="100%" priority={true} />
                                            </Button>
                                            <Button className="bma3 shadow-none" onClick={() => this.excludeTower(15)}>
                                                <Image className="bma3" id="t15" src='/images/monkeys/Ninja.webp' alt='Ninja Monkey' width="100%" height="100%" priority={true} />
                                            </Button>
                                            <Button className="bma4 shadow-none" onClick={() => this.excludeTower(2)}>
                                                <Image className="bma4" id="t2" src='/images/monkeys/Alchemist.webp' alt='Alchemist' width="100%" height="100%" priority={true} />
                                            </Button>
                                            <Button className="bma5 shadow-none" onClick={() => this.excludeTower(9)}>
                                                <Image className="bma5" id="t9" src='/images/monkeys/Druid.webp' alt='Druid' width="100%" height="100%" priority={true} />
                                            </Button>




                                        </div>
                                        <div className="excludeSupport">
                                            <Button className="bs1 shadow-none" onClick={() => this.excludeTower(21)}>
                                                <Image className="bs1" id="t21" src='/images/monkeys/Village.webp' alt='Village' width="100%" height="100%" priority={true} />
                                            </Button>
                                            <Button className="bs2 shadow-none" onClick={() => this.excludeTower(3)}>
                                                <Image className="bs2" id="t3" src='/images/monkeys/BananaFarm.webp' alt='Banana Farm' width="100%" height="100%" priority={true} />
                                            </Button>
                                            <Button className="bs3 shadow-none" onClick={() => this.excludeTower(17)}>
                                                <Image className="bs3" id="t17" src='/images/monkeys/SpikeFactory.webp' alt='Spike Factory' width="100%" height="100%" priority={true} />
                                            </Button>
                                            <Button className="bs4 shadow-none" onClick={() => this.excludeTower(10)}>
                                                <Image className="bs4" id="t10" src='/images/monkeys/Engineer.webp' alt='Engineer' width="100%" height="100%" priority={true} />
                                            </Button>




                                        </div>
                                    </div>
                                    <this.showTowerAlert/>
                                </ModalBody>
                            </Modal>
                        <div className="displayTowerContainer">
                            <this.displayTowers className="t0" index={0} />
                            <this.displayTowers className="t1" index={1} />
                            <this.displayTowers className="t2" index={2} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Randomizer;