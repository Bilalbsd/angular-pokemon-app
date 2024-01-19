import {Component, OnInit} from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-root',
    template: `<h1>Le titre est {{title}} !</h1>`
})

export class AppComponent implements OnInit {
    title: string =  "PokemonApp";
    pokemonList = ['Bulbizarre', 'Salamèche', 'Carapuce'];

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