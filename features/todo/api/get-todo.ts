import type { Todo } from "@/types/todo";

const getTodo = async (id: string): Promise<Todo> => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/${id}`, {
    cache: "force-cache",
  }).then((response) => response.json());
};

export default getTodo;
