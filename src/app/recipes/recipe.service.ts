import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    constructor(private slService: ShoppingListService) {}
    recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
    new Recipe("test", 
    "testRecipe", 
    "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg",
     [ new Ingredient('Bread', 1) ])
  ];

  getRecipes() {
      return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)
  }
}