import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Item } from "./Item";

@Entity()
export class ItemCategory {

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    color: string;

    @OneToMany((type) => Item, (items) => items.category)
    items: Item[];
}