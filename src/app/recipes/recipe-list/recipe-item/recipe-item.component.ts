import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.scss"]
})
export class RecipeItemComponent implements OnInit {
  @Input() currentRecipe: Recipe;

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  onSelectedItem() {
    console.log("selected works", this.currentRecipe);
    this.selectedRecipe.emit(this.currentRecipe);
  }

  constructor() {}

  ngOnInit() {}
}
