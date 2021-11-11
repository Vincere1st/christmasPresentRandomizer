import {Guest} from "./guest.entity"
import {REPOSITORY} from "../constants"

export const GuestProviders = [
    {
        provide: REPOSITORY.guest,
        useValue: Guest
    }
]
