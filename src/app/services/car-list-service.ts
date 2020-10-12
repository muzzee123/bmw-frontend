import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Request, Response, NextFunction } from 'express';
export type MiddlewareFn = (req: Request, res: Response, next: NextFunction) => void;

@Injectable({ providedIn: 'root' })
export class CarListService {

    constructor(private http: HttpClient) { }

    getCar(id){
        console.log(id)
        return this.http.get(`${environment.apiUrl}/cars/${id}`);
    }
    getAll() {
        return this.http.get<any[]>(`${environment.apiUrl}/cars`);
    }

    createCar(car) {
        return this.http.post(`${environment.apiUrl}/cars/create`, car);
    }

    delete(id) {
        return this.http.delete(`${environment.apiUrl}/cars/${id}`);
    }

    // updateCar(id: number, car: Car): any {
    //     throw new Error("Method not implemented.");
    // }

}
