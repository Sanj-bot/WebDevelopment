class React {
  constructor() {
    this.library = "React";
    this.server = "https://localhost:300";
    // requirement
    document.querySelector("button").addEventListener("click", this.handleClick);
  }

  handleClick() {
    console.log("button clicked");
    console.log(this.server);
  }
}

const app = new React();
