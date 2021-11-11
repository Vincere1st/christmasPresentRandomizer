import { Sequelize } from 'sequelize-typescript';
import { Guest } from "./entity/guest.entity";
import { SEQUELIZE } from "./constants";

export const databaseProviders = [
    {
        provide: SEQUELIZE,
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'vincerecaro',
                password: 'test',
                database: 'christmas_present',
            });
            sequelize.addModels([Guest]);
            await sequelize.sync();
            return sequelize;
        },
    },
];