import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";
import { toast } from "react-toastify";

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

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  const { mutate: createTask } = useMutation({
    mutationFn: taskTitle => customFetch.post("/", { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Created");
    },
    onError: error => {
      console.log(error);
      toast.error("Msg");
    },
  });
  return { createTask };
};
