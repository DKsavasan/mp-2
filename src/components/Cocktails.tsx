import styled from "styled-components";
import { Cocktail } from "../interfaces/Cocktails.ts";

const AllCocktailsDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background-color: bisque;
`;

const SingleCocktailDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  padding: 2%;
  margin: 1%;
  background-color: darkorange;
  color: black;
  border: 3px darkred solid;
  font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
  text-align: left;
`;

export default function Cocktails(props: { data: Cocktail[] }) {
  return (
    <AllCocktailsDiv>
      {props.data.map((cocktail: Cocktail) => (
        <SingleCocktailDiv key={cocktail.idDrink}>
          <h1>{cocktail.strDrink}</h1>
          <img
            src={cocktail.strDrinkThumb}
            alt={`Image of ${cocktail.strDrink}`}
          />
          <h3>Ingredients:</h3>
          <ul>
            {Array.from({ length: 15 }, (_, i) => {
              const index = i + 1;
              const ingredientKey = `strIngredient${index}` as keyof Cocktail;
              const measureKey = `strMeasure${index}` as keyof Cocktail;

              const ingredient = cocktail[ingredientKey];
              const measure = cocktail[measureKey];

              if (ingredient) {
                return (
                  <li key={index}>
                    {measure ? `${measure} ` : ""}
                    {ingredient}
                  </li>
                );
              }
              return null;
            })}
          </ul>
          <p>{cocktail.strInstructions}</p>
        </SingleCocktailDiv>
      ))}
    </AllCocktailsDiv>
  );
}
