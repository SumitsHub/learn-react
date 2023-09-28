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

export const useEditTask = () => {
  const queryClient = useQueryClient();
  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return customFetch.patch(`/${taskId}`, { isDone });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });
  return { editTask };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTask } = useMutation({
    mutationFn: taskId => {
      return customFetch.delete(`/${taskId}`);
    },
    onSuccess: () => {
      toast.success("Task deleted");
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });
  return { deleteTask };
};
