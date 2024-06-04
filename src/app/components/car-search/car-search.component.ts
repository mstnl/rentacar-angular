import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.services';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car-search',
  standalone: true,
  imports: [],
  templateUrl: './car-search.component.html',
  styleUrl: './car-search.component.css'
})
export class CarSearchComponet implements OnInit {

  Arac: Car[] = [];

  constructor(private carService: CarService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(data => {
      this.Arac = data; });

    }}