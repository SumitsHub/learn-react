import { useQuery } from "@tanstack/react-query";
import customFetch from "./utils";
import SingleItem from "./SingleItem";

const Items = ({ items }) => {
  const result = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customFetch.get("/"),
  });
  console.log(result.data);
  return (
    <div className="items">
      {items.map(item => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
