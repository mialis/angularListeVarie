import { Injectable } from "@angular/core";
import { Recipe } from "./recipes/recipe-list/recipe.model";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  URL = "http://www.recipepuppy.com/api/?q=cake";

  public recipes: Recipe[] = [
    new Recipe(
      "Patate riso e cozze",
      "Lorem ipsum bla bla ",
      "https://ips.plug.it/cips/buonissimo.org/cms/2012/04/tiella-di-riso-patate-e-cozze.jpg"
    ),
    new Recipe(
      "Carbonara",
      "Lorem ipsum bla bla ",
      "https://www.informacibo.it/wp-content/uploads/2018/04/carbonara.jpg",
      true
    ),
    new Recipe(
      "Amatriciana",
      "Lorem ipsum bla bla ",
      "http://www.sedanoallegro.it/sites/default/files/ricette/2017-10/amatriciana.jpeg"
    )
  ];

  public selectedRecipe: Recipe = null;

  public changeSelectedRecipe(recipe: Recipe) {
    console.log("chengeSelectedRecipe works", recipe);
    this.selectedRecipe = recipe;
  }

  constructor() {}
}
