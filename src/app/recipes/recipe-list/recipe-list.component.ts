import { Component, OnInit } from '@angular/core';
import { RecipeModel } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
      new RecipeModel('Lasagna', 'How to make delicious lasagnas', 'https://assets.bonappetit.com/photos/57adf3c353e63daf11a4dfa2/16:9/w_1000,c_limit/lasagna-bolognese.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  createNewRecipe() {
    this.recipes.push(new RecipeModel('123','2','2'));
  }

}
