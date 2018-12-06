import { Component } from "@angular/core";
import { Recipe } from "./recipes/recipe-list/recipe.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "listeVarie";

  selectedRecipe: Recipe = null;

  onSelectedRecipe(recipe) {
    console.log("ricetta ricevuta dal nonno", recipe);
    this.selectedRecipe = recipe;
  }
}
