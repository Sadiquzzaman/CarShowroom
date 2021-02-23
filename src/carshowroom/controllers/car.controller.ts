import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { CarService } from "../services/car.service";



@Controller('car')
export class CarControllers{
    constructor(private CarService: CarService){}

    @Get()
    async getAll(){
        return this.CarService.getAll();
    }

    @Post()
    async create(car){
        return this.CarService.createnew(car);
    }

    @Get()
    async getCarById(id){
        return this.CarService.getCarById(id);
    }

    @Put()
    async updateCarById(id){
        return this.CarService.update(id);
    }
}