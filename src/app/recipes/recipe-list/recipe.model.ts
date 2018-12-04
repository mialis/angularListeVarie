export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public liked: boolean;

  constructor(
    name: string,
    desc: string,
    imgPath: string,
    liked: boolean = false
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imgPath;
    this.liked = liked;
  }
}
