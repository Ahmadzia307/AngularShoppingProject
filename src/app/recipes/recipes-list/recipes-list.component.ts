import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  
  @Output() recipeWasSelected = new  EventEmitter<Recipe>();
  
  recipes : Recipe[] = [
    new Recipe('Ahmad try','This is awsome',
    'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/simple_fish_dish_98008_16x9.jpg'),
    new Recipe('Ahmad Dish','This is description',
    'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/simple_fish_dish_98008_16x9.jpg')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe)
  {
   this.recipeWasSelected.emit(recipe); 
  }
}
