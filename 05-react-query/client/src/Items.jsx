import { useQuery } from "@tanstack/react-query";
import customFetch from "./utils";
import SingleItem from "./SingleItem";

const Items = () => {
  const result = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customFetch.get("/"),
  });
  console.log(result);
  const { isLoading, data } = result;
  if (isLoading) {
    return <p style={{ marginTop: "1rem " }}>Loading...</p>;
  }
  return (
    <div className="items">
      {data.data.taskList.map(item => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
