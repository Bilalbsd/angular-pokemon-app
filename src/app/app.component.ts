import {Component, OnInit} from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";
import { CommonModule } from "@angular/common";

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    title: string =  "Pokémons";
    pokemonList: Pokemon[] = POKEMONS

    ngOnInit(): void {
        console.log(this.title);
        console.table(this.pokemonList);
    }
}

/*
Interfaces de composant (lifecycle) : 
- ngOnInit -> Initialisation
- ngOnDestroy -> Fin
*/