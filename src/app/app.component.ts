import {Component, OnInit} from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Component({
    standalone: true,
    selector: 'app-root',
    template: `<h1>Liste de {{title}}</h1>`
})

export class AppComponent implements OnInit {
    title: string =  "Pokémons";
    //pokemonList = ['Bulbizarre', 'Salamèche', 'Carapuce'];
    pokemonList: Pokemon[] = POKEMONS

    ngOnInit(): void {
        console.log(this.title);
        console.table(this.pokemonList);
        this.selectPokemon(this.pokemonList[0])
    }

    selectPokemon(pokemon: Pokemon) {
        console.log(`Le pokémon : ${pokemon.name}`)
    }
}

/*
Interfaces de composant (lifecycle) : 
- ngOnInit -> Initialisation
- ngOnDestroy -> Fin
*/