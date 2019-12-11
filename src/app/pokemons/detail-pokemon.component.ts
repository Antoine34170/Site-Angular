import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service'
import { POKEMONS } from './mock-pokemon';

@Component({
	selector: 'detail-pokemon',
	templateUrl: './app/pokemons/detail-pokemon.component.html',
	providers: [PokemonsService]
})
export class DetailPokemonComponent implements OnInit {

		pokemon: Pokemon = null;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private PokemonsService: PokemonsService) {}

	ngOnInit(): void {
		
		let id = +this.route.snapshot.paramMap.get('id');
		this.PokemonsService.getPokemon(id)
		.subscribe(pokemon => this.pokemon = pokemon);
	}

	delete(pokemon:Pokemon): void {
		this.PokemonsService.deletePokemons(pokemon)
		.subscribe(_ => this.goBack());
	}

	goBack(): void {
		this.router.navigate(['/pokemons']);
	}

	goEdit(pokemon: Pokemon): void {
		let link = ['pokemon/edit', pokemon.id];
		this.router.navigate(link);
	}
}