import { useQuery } from "@tanstack/react-query";
import customFetch from "./utils";
import SingleItem from "./SingleItem";

const Items = () => {
  const result = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/something");
      return data;
    },
  });
  console.log(result);
  const { isLoading, data, error, isError } = result;
  if (isLoading) {
    return <p style={{ marginTop: "1rem " }}>Loading...</p>;
  }

  if (error) {
    return <p style={{ marginTop: "1rem " }}>{error.message}</p>;
  }
  return (
    <div className="items">
      {data.taskList.map(item => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
