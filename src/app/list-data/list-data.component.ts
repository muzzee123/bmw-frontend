import { Component, OnInit } from '@angular/core';
import { CarListService} from '../services/car-list-service';
 
@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {

  cars = [];
  constructor( private carlistService: CarListService) { }

  ngOnInit() {
    this.carlistService.getAll().subscribe(cars=>{
      this.cars = cars;
      console.log(cars);
    });
  }
}
