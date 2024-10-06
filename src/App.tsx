import Cocktails from "./components/Cocktails";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Cocktail } from "./interfaces/Cocktails.ts";

const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px darkgoldenrod solid;
`;

export default function App() {
  const [data, setData] = useState<Cocktail[]>([]);
  useEffect(() => {
    async function fetchData(): Promise<void> {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
      );
      const { drinks }: { drinks: Cocktail[] } = await response.json();
      setData(drinks);
    }
    fetchData()
      .then(() => console.log("Data fetched successfully"))
      .catch((e: Error) => console.log("There was the error: " + e));
  }, []);

  return (
    <ParentDiv>
      <Cocktails data={data} />
    </ParentDiv>
  );
}
