import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table
export class Guest extends Model {
    @PrimaryKey
    id: number

    @Column
    name: string

    @Column
    firstname: string
}