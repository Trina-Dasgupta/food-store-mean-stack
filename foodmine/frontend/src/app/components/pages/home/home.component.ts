import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    let foodObservable: Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      // if(params.searchTerm){
      //   this.foods=this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      // }else if(params.tag){
      //   this.foods=this.foodService.getAllFoodsByTag(params.tag);
      // }else{
      //   this.foods=foodService.getAll();
      // }
      if (params.searchTerm)
        foodObservable = this.foodService.getAllFoodsBySearchTerm(
          params.searchTerm
        );
      else if (params.tag)
        foodObservable = this.foodService.getAllFoodsByTag(params.tag);
      else foodObservable = foodService.getAll();

      foodObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      });
    });
  }
  ngOnInit(): void {}
}
