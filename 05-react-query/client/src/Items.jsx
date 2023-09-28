import { useQuery } from "@tanstack/react-query";
import customFetch from "./utils";
import SingleItem from "./SingleItem";
import { useFetchItems } from "./reactQueryHooks";

const Items = () => {
  const result = useFetchItems();
  console.log(result);
  const { isLoading, data, error } = result;
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
