import getTodo from "@/features/todo/api/get-todo";
import type { Todo } from "@/types/todo";

export const revalidate = false;
export const dynamic = "force-static";

interface Props {
  params: Promise<{
    todoId: string;
  }>;
}

export async function generateStaticParams() {
  // return new Array(200).fill(0).map((_, index) => ({
  //   todoId: (index + 1).toString(),
  // }));
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json(),
  );

  return todos.map((todo: Todo) => ({
    id: todo.id.toString(),
  }));
}

const TodoIdPage = async ({ params }: Props) => {
  const { todoId } = await params;
  const data = await getTodo(todoId);
  return <div className="">{data.title}</div>;
};

export default TodoIdPage;
