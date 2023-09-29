import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

export const loader = (queryClient) => async (inp) => {
  const { request } = inp;
  console.log({inp});
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "";
  // const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
  // return { drinks: response.data.drinks, searchTerm };
  return { searchTerm };
};

const Landing = () => {
  // const { drinks, searchTerm } = useLoaderData();
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));
  // console.log(data);
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;
