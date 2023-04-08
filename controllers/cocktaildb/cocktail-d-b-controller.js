import dotenv from "dotenv";

dotenv.config();

const API_LINK = process.env.API_LINK || "www.thecocktaildb.com/api/json/v1/1/";

const findCocktailById = (req, res) => {
  res.send("hi");
};

const findRandomCocktail = (req, res) => {
  res.send("h1");
  res.json(req.params.mid);
};

const findAllCocktail = (req, res) => {
  res.send("hello world find all meal");
};

const CocktailDBController = (app) => {
  app.get("/cocktail", findAllCocktail);
  app.get("/cocktail/random/", findRandomCocktail);
  app.get("/cocktail/:mid", findCocktailById);
};

export default CocktailDBController;