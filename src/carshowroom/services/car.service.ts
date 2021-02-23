import { Injectable } from "@nestjs/common";
import { CARS } from './car.mock';



@Injectable()
export class CarService{
    constructor(){}
    private car =CARS;

    getAll = async() =>{
        return this.car;
    }

    createnew = async(car:object) =>{
        return this.car.push();
    }

    getCarById = async(id:string) =>{
        return this.car.find((car) => car.id ===id);
        return this.car;
    }

    update = async(id:string) => {
        const index = this.car.findIndex((car) => car.id ===id);
        this.car.splice(index, 1);
        return this.car;
    }
}