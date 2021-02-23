import { Module } from "@nestjs/common";
import { CarControllers } from "./controllers/car.controller";
import { CarService } from "./services/car.service";



@Module({
    controllers:[CarControllers],
    providers:[CarService],
})

export class CarModule{}