import type { Todo } from "@/types/todo";

const getTodo = async (id: string): Promise<Todo> => {
  return fetch(`http://localhost:3000/api/todos/${id}`, {
    cache: "force-cache",
  }).then((response) => response.json());
};

export default getTodo;
