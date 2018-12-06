import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  ricetta: Recipe = new Recipe(
    "Patate riso e cozze",
    "Lorem ipsum bla bla ",
    "https://ips.plug.it/cips/buonissimo.org/cms/2012/04/tiella-di-riso-patate-e-cozze.jpg"
  );

  recipes: Recipe[] = [
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

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  onSelectedList(recipe) {
    console.log("elemento lista selezionato", recipe);
    this.selectedRecipe.emit(recipe);
  }

  constructor() {}

  ngOnInit() {}
}
