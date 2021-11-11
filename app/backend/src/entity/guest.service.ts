import { Injectable, Inject } from '@nestjs/common';
// import { CreateGuestDto } from './dto/create-guest.dto';
import { Guest } from "./guest.entity";
import {REPOSITORY} from "../constants";

@Injectable()
export class GuestService {
    constructor(
        @Inject(REPOSITORY.guest)
        private guestRepository: typeof Guest
    ) {}

    async findAll(): Promise<Guest[]> {
        return this.guestRepository.findAll<Guest>();
    }
}