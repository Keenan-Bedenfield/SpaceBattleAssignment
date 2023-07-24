const me = ussAssembly
const enemy = alien


class Ship {
    constructor (
        name, 
        firepower, 
        hull,
        accuracy,
        ){
            this.name = name,
            this.firepower = firepower,
            this.hull = hull,
            this.accuracy = accuracy
        }
    attack(enemy) { 
        if (Math.random() < me.accuracy) {
             //removing alien from the array (only if hit and killed ).
            if (enemy.hull < me.hull) {
                console.log(enemy.hull -= this.hull);
                console.log(`${enemy.name} is hit!`);
                array.shift();
            }
            console.log(`Good hit`);
        }
    }

    flee(){
        console.log("Game Over.");
    }

    defeated(){
        if (me.hull == 0) {
            console.log("Arrgh... Abadon ship!")
        }
    } 
// if all enemy shps are dead & if use array im still alive (use array.legnth)//
    victory(){
        if (this.hull == 0 || array.length == 0 );
        console.log("You Win!")
    }
};

// // MY SHIP INSTANCE
// const me = new Ship ( "USS assembly", 3, 5, .7);

// // ENEMY SHIP INSTANCE
// const enemyShip = new Ship ("Tuvid", 3, 6, .7)
// // console.log(EnemyShip)
// // me.attack(EnemyShip)

//THE ALIEN ARMADA
class AlienShip extends Ship {
    constructor(name, firepower, hull, accuracy) {
        super(name, firepower, hull, accuracy);
    }
        
    // METHODS
    shoot(me){
         if (Math.random() < me[0].accuracy) {
            console.log('The Assembly is hit!');
            me.hull -= this.hull
        }
    }

    evades(){
        if(me.accuracy > this.accuracy) {
            console.log('The Assembly missed!');
        }
    }

    smite(){
        if(me.hull === 0);
        console.log("The Assembly got destroyed!")
    }

    defeat(){
        if(array.length <= 0)
        console.log("You lose!.")
    }
};

//Fight/start the battle button
const fightBtn = document.getElementById('fight');
fightBtn.addEventListener("click",() => {
    return me.attack();
 });

//Leave the  battle/Escape button
const escapeBtn = document.getElementById('flee');
escapeBtn.addEventListener("click",() => {
    me.flee();
});

