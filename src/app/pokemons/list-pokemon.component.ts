import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';
import { PokemonsService } from './pokemons.service';


@Component({
  selector: 'list-pokemon',
  templateUrl: `./app/pokemons/list-pokemon.component.html`,
  
})
export class ListPokemonComponent implements OnInit {

    pokemons: Pokemon[] = null;
    //pokemons: Pokemon[];

    constructor(private routeur: Router, private pokemonsService: PokemonsService) { }
    
    ngOnInit(): void{
        this.getPokemons();
    }
       
    getPokemons(): void {
        this.pokemonsService.getPokemons()
        .subscribe(pokemons => this.pokemons = pokemons);
    }

    selectPokemon(pokemon:Pokemon) : void{
       // alert("Vous avez cliqué sur " + pokemon.name);
        let link = ['/pokemon', pokemon.id];
        this.routeur.navigate(link);
    }

}