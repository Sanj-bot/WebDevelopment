import express from "express";
const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "siamese cat",
      price: 300,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmypetandi.elanco.com%2Fau%2Fnew-owners%2Fso-you-re-thinking-about-getting-siamese-cat&psig=AOvVaw0vQOa0Sc7rRRVXN3fCf5AV&ust=1732334060315000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKi1rriF74kDFQAAAAAdAAAAABAE",
    },
    {
      id: 2,
      name: "Maine coon",
      price: 300,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zooplus.co.uk%2Fmagazine%2Fcat%2Fcat-breeds%2Fmaine-coon&psig=AOvVaw0t9ZSadxl8jLCr1tFopMcB&ust=1732334099042000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDe8MiF74kDFQAAAAAdAAAAABAE",
    },
    {
      id: 3,
      name: "British shorthair",
      price: 300,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBritish_Shorthair&psig=AOvVaw3QddymkURhHsklpjnd1zGD&ust=1732334130586000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMDCzdWF74kDFQAAAAAdAAAAABAE",
    },
    {
      id: 4,
      name: "american shorthair",
      price: 300,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcfa.org%2Fbreed%2Famerican-shorthair%2F&psig=AOvVaw1VGjUYdoIrOkSXR7dYiwLe&ust=1732334168245000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjL0OeF74kDFQAAAAAdAAAAABAJ",
    },
  ];

  if (req.query.search) {
    const filterProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filterProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 2000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
