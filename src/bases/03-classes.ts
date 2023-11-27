export class Pokemon {


    constructor( 
        public readonly id: number, 
        public name: string){
        console.log('Constructor llamado');    
    }
}

export const charmander =  new Pokemon(4,'Charmander');

charmander.id = 20;
charmander.name = 'Developer';