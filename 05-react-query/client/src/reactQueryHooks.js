import { useQuery } from "@tanstack/react-query";
import customFetch from "./utils";

export const useFetchItems = () => {
  const result = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });
  return result;
};
