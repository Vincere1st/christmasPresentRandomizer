import { Module } from '@nestjs/common';
// import { CatsController } from './cats.controller';
import { GuestService } from "./guest.service";
import { GuestProviders } from "./guest.providers";
import { DatabaseModule } from "../database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [],
    providers: [
        GuestService,
        ...GuestProviders,
    ],
})
export class CatsModule {}