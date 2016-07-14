class Fighter {
    constructor(name, power, health = 100) {
      this.name  = name;
      this.power = power;
      this.health = health;
      this.isLive = true;
    }
    hit(enemy, point) {
      enemy.setDamage(  point*this.power );
      enemy.checkHealth();
    } 
    setDamage( damage ) {
      this.health -= damage;
    }
    checkHealth() {
       if (this.health < 0 ) {
         this.isLive = false;
         console.log(` ${this.name} is dead :( `);
         return;
      }
      console.log(`Fire!!! ${this.name} was damaged. health:${this.health}`);
    }
};

class ImprovedFighter extends Fighter {
    hit( enemy, point ) {
      super.hit( enemy, point*2 );
    }
};

let fight = (fighter1, fighter2, ...point ) => {
  
   let changeFighter = () => {
       if ( currFighter == fighter1 ) 
             { 
               currFighter = fighter2; 
               enemy = fighter1; 
             } 
       else  { 
               currFighter = fighter1; 
               enemy = fighter2; 
             }
   } 
    
   let currFighter = fighter1; 
   let enemy = fighter2;
   
   while (currFighter.health >= 0 && point.length && currFighter.isLive){  
     currFighter.hit(enemy, point[0]);
     point.shift();
     changeFighter();
   }
   console.log(`End of the fight`); 
}

let fighter = new Fighter('Jim Moriarty', 12);
let improvedFighter= new ImprovedFighter('Teddy bear', 4, 30);

fight( fighter, improvedFighter, 1, 3, 1, 2 );
