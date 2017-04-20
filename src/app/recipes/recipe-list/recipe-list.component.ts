import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("test", "testRecipe", "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
