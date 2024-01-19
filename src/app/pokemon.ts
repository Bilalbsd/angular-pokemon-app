export class Pokemon {
    id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: string[];
    created: Date;

    constructor(id: number, hp: number, cp: number, name: string, picture: string, types: string[], created: Date) {
        this.id = id;
        this.hp = hp;
        this.cp = cp;
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
}
