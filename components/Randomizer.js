import React from 'react';
import Image from 'next/image';
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
        this.randomizeLoadout = this.randomizeLoadout.bind(this);
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
        console.log("Hero randomizing");
        let hero = (Math.floor(Math.random()*4))+1;
        this.setState({heroKey: hero});

    }
    randomizeTower(){
        console.log("Tower randomizing");
        let towers = this.generateTowers();
        while(!this.checkUnique(towers)){
            towers = this.generateTowers();
        }
        this.setState({towersKey: towers});
    }
    randomizeLoadout(){
        this.randomizeHero();
        this.randomizeTower()
    }
    displayTowers(props){
        switch(this.state.towersKey[props.index]){
            case 0:
                return <span className='hidden'>?</span>
            case 1:
                return <Image src="/images/monkeys/Ace.webp" alt='Monkey Ace' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 2:
                return <Image src="/images/monkeys/Alchemist.webp" alt='Alchemist mMnkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 3:
                return <Image src="/images/monkeys/BananaFarm.webp" alt='Banana Farm' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 4:
                return <Image src="/images/monkeys/BombShooter.webp" alt='Bomb Shooter' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 5:
                return <Image src="/images/monkeys/Boomerang.webp" alt='Boomerang Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 6:
                return <Image src="/images/monkeys/Buccaneer.webp" alt='Monkey Buccaneer' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 7:
                return <Image src="/images/monkeys/Dart.webp" alt='Dart Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 8:
                return <Image src="/images/monkeys/DartlingGunner.webp" alt='Dartling Gunner' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 9:
                return <Image src="/images/monkeys/Druid.webp" alt='Druid Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 10:
                return <Image src="/images/monkeys/Engineer.webp" alt='Monkey Engineer' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 11:
                return <Image src="/images/monkeys/GlueGunner.webp" alt='Glue Gunner Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 12:
                return <Image src="/images/monkeys/HeliPilot.webp" alt='Heli Pilot' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 13:
                return <Image src="/images/monkeys/Ice.webp" alt='Ice Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 14:
                return <Image src="/images/monkeys/Mortar.webp" alt='Mortar' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 15:
                return <Image src="/images/monkeys/Ninja.webp" alt='Ninja Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 16:
                return <Image src="/images/monkeys/Sniper.webp" alt='Sniper Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 17:
                return <Image src="/images/monkeys/SpikeFactory.webp" alt='Spike Factory' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 18:
                return <Image src="/images/monkeys/Sub.webp" alt='Submarine Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 19:
                return <Image src="/images/monkeys/Super.webp" alt='Super Monkey' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 20:
                return <Image src="/images/monkeys/TackShooter.webp" alt='Tackshooter' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 21:
                return <Image src="/images/monkeys/Village.webp" alt='Village' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            case 22:
                return <Image src="/images/monkeys/Wizard.webp" alt='Monkey Apprentice' width={this.state.imageSize} height={this.state.imageSize} priority={true}/> 
            default:
                return <span>default case returned(error)</span>
        }
    }
    DisplayHero(){
        switch(this.state.heroKey){
            case 0:
                return <span className='hidden'>?</span>;
            case 1:
                return <Image src='/images/heroes/QuincyPortrait.webp' alt='Quincy' width={"100"} height={"100"} priority={true} /> ;
            case 2: 
                return <Image src='/images/heroes/GwendolinPortrait.webp' alt='Gwendolin' width={"100"} height={"100"} priority={true}/>;
            case 3: 
                return <Image src='/images/heroes/ObynGreenFootPortrait.webp' alt='Obyn' width={"100"} height={"100"} priority={true}/>;
            case 4: 
                return <Image src='/images/heroes/StrikerJonesPortrait.webp' alt='Striker Jones' width={"100"} height={"100"} priority={true} />;
            default:
                return <p>default case returned(error)</p>
        }
    }
    render(){
        return(
            <div>
                <button className='randomizeButton' onClick={this.randomizeLoadout}> 
                    Random Loadout
                </button>
                <button className='randomizeButton' onClick={this.randomizeHero}>
                    Random hero
                </button>
                <div>
                    <this.DisplayHero/>
                </div>
                <button className='randomizeButton' onClick={this.randomizeTower}>
                    Random towers
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