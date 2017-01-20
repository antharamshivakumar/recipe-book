import { Component, OnInit } from '@angular/core';

import { RecipeListComponent } from './recipe-list';

import { RecipeDetailComponent } from './recipe-detail';

import { Recipe } from './recipe';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
