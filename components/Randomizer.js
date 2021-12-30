import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
class Randomizer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            heroKey: 0,
            towersKey: [0,0,0,0],
            imageSize: 100
        };
        this.randomizeHero = this.randomizeHero.bind(this);
        this.DisplayHero = this.DisplayHero.bind(this);
        this.randomizeTower = this.randomizeTower.bind(this);
        this.displayTowers = this.displayTowers.bind(this);
        this.rouletteLoadout = this.rouletteLoadout.bind(this);
        this.rouletteHero = this.rouletteHero.bind(this);
        this.rouletteTower = this.rouletteTower.bind(this);
    }
    generateTowers(){
        return [Math.floor(Math.random()*22+1), Math.floor(Math.random()*22+1) , Math.floor(Math.random()*22+1)  , Math.floor(Math.random()*22+1)];
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
        while(this.state.heroKey===hero){
            hero = (Math.floor(Math.random()*4))+1;
        }
        this.setState({heroKey: hero});

    }
    randomizeTower(){
        let towers = this.generateTowers();
        while(!this.checkUnique(towers)){
            towers = this.generateTowers();
        }
        this.setState({towersKey: towers});
    }
    rouletteLoadout(){
        this.rouletteHero();
        this.rouletteTower();
    }
    rouletteHero(){
        clearInterval(timer)
        this.randomizeHero();
        let timer = setInterval(this.randomizeHero, 150);
        setTimeout(function(){clearInterval(timer);}, 2000);
       
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
                return <Image src="/images/hidden/monkeys/DartHidden.png" alt="hidden Dart Monkey" width={this.state.imageSize} height={this.state.imageSize}/>
            case 1:
                return <Link href="monkeys/military/ace"><a><Image src="/images/monkeys/Ace.webp" alt='Monkey Ace' width={this.state.imageSize} height={this.state.imageSize} /> </a></Link>
            case 2:
                return <Link href="monkeys/magic/achemist"><a><Image src="/images/monkeys/Alchemist.webp" alt='Alchemist mMnkey' width={this.state.imageSize} height={this.state.imageSize} /></a></Link>
            case 3:
                return <Link href="monkeys/support/bananafarm"><a><Image src="/images/monkeys/BananaFarm.webp" alt='Banana Farm' width={this.state.imageSize} height={this.state.imageSize} /></a></Link>
            case 4:
                return <Link href="monkeys/primary/bombshooter"><a><Image src="/images/monkeys/BombShooter.webp" alt='Bomb Shooter' width={this.state.imageSize} height={this.state.imageSize} /></a></Link>
            case 5:
                return <Link href="monkeys/primary/boomerang"><a> <Image src="/images/monkeys/Boomerang.webp" alt='Boomerang Monkey' width={this.state.imageSize} height={this.state.imageSize} /></a></Link>
            case 6:
                return <Link href="monkeys/military/buccaneer"><a><Image src="/images/monkeys/Buccaneer.webp" alt='Monkey Buccaneer' width={this.state.imageSize} height={this.state.imageSize} /></a></Link>
            case 7:
                return <Link href="monkeys/primary/dart"><a> <Image src="/images/monkeys/Dart.webp" alt='Dart Monkey' width={this.state.imageSize} height={this.state.imageSize} /> </a></Link>
            case 8:
                return <Link href="monkeys/military/dartlinggunner"><a><Image src="/images/monkeys/DartlingGunner.webp" alt='Dartling Gunner' width={this.state.imageSize} height={this.state.imageSize} /></a></Link>
            case 9:
                return <Link href="monkeys/magic/druid"><a><Image src="/images/monkeys/Druid.webp" alt='Druid Monkey' width={this.state.imageSize} height={this.state.imageSize} /></a></Link>
            case 10:
                return <Link href="monkeys/support/engineer"><a><Image src="/images/monkeys/Engineer.webp" alt='Monkey Engineer' width={this.state.imageSize} height={this.state.imageSize} /></a></Link>
            case 11:
                return <Link href="monkeys/primary/gluegunner"><a><Image src="/images/monkeys/GlueGunner.webp" alt='Glue Gunner Monkey' width={this.state.imageSize} height={this.state.imageSize} /> </a></Link>
            case 12:
                return <Link href="monkeys/military/helipilot"><a><Image src="/images/monkeys/HeliPilot.webp" alt='Heli Pilot' width={this.state.imageSize} height={this.state.imageSize} /></a></Link>
            case 13:
                return <Link href="monkeys/primary/ice"><a><Image src="/images/monkeys/Ice.webp" alt='Ice Monkey' width={this.state.imageSize} height={this.state.imageSize} /></a></Link>
            case 14:
                return  <Link href="monkeys/military/mortar"><a><Image src="/images/monkeys/Mortar.webp" alt='Mortar' width={this.state.imageSize} height={this.state.imageSize} /></a></Link>
            case 15:
                return <Link href="monkeys/magic/ninja"><a><Image src="/images/monkeys/Ninja.webp" alt='Ninja Monkey' width={this.state.imageSize} height={this.state.imageSize} /></a></Link>
            case 16:
                return  <Link href="monkeys/military/sniper"><a><Image src="/images/monkeys/Sniper.webp" alt='Sniper Monkey' width={this.state.imageSize} height={this.state.imageSize} /></a></Link>
            case 17:
                return <Link href="monkeys/support/spikefactory"><a><Image src="/images/monkeys/SpikeFactory.webp" alt='Spike Factory' width={this.state.imageSize} height={this.state.imageSize} /></a></Link>
            case 18:
                return <Link href="monkeys/military/sub"><a><Image src="/images/monkeys/Sub.webp" alt='Submarine Monkey' width={this.state.imageSize} height={this.state.imageSize} /></a></Link>
            case 19:
                return <Link href="monkeys/magic/super"><a><Image src="/images/monkeys/Super.webp" alt='Super Monkey' width={this.state.imageSize} height={this.state.imageSize} /></a></Link>
            case 20:
                return <Link href="monkeys/primary/tackshooter"><a><Image src="/images/monkeys/TackShooter.webp" alt='Tackshooter' width={this.state.imageSize} height={this.state.imageSize} /> </a></Link>
            case 21:
                return <Link href="monkeys/support/village"><a><Image src="/images/monkeys/Village.webp" alt='Village' width={this.state.imageSize} height={this.state.imageSize} /></a></Link>
            case 22:
                return <Link href="monkeys/magic/wizard"><a><Image src="/images/monkeys/Wizard.webp" alt='Monkey Apprentice' width={this.state.imageSize} height={this.state.imageSize} /></a></Link>
            default:
                return <span>default case returned(error)</span>
        }
    }
    DisplayHero(){
        switch(this.state.heroKey){
            case 0:
                return <Image src="/images/hidden/heroes/QuincyPortraitHidden.png" alt="Hidden Quincy" width={this.state.imageSize} height={this.state.imageSize}/>;
            case 1:
                return <Link href="/heroes/quincy"><a><Image src='/images/heroes/QuincyPortrait.webp' alt='Quincy' width={"100"} height={"100"}  /> </a></Link>;
            case 2: 
                return <Link href="/heroes/gwendolin"><a><Image src='/images/heroes/GwendolinPortrait.webp' alt='Gwendolin' width={"100"} height={"100"} /></a></Link>;
            case 3: 
                return <Link href="/heroes/obyn"><a><Image src='/images/heroes/ObynGreenFootPortrait.webp' alt='Obyn' width={"100"} height={"100"} /></a></Link>;
            case 4: 
                return <Link href="/heroes/strikerjones"><a><Image src='/images/heroes/StrikerJonesPortrait.webp' alt='Striker Jones' width={"100"} height={"100"}  /></a></Link>;
            default:
                return <p>default case returned(error)</p>
        }
    }
    render(){
        return(
            <div>
                <button className='randomizeButton' onClick={this.rouletteLoadout}> 
                    Random Loadout
                </button>
                <button className='randomizeButton' onClick={this.rouletteHero}>
                    Random Hero
                </button>
                <div>
                    <this.DisplayHero/>
                </div>
                <button className='randomizeButton' onClick={this.rouletteTower}>
                    Random Towers
                </button>
                <div>
                    <this.displayTowers index={0}/>
                    <this.displayTowers index={1}/>
                    <this.displayTowers index={2}/>
                    <this.displayTowers index={3}/>

                </div>
            </div>
        )
    }
}
export default Randomizer;