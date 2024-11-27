import getTodo from "@/features/todo/api/get-todo";
import TodoModal from "@/features/todo/components/todo-modal";

interface Props {
  params: Promise<{
    todoId: string;
  }>;
}

export async function generateStaticParams() {
  return new Array(200).fill(0).map((_, index) => ({
    todoId: (index + 1).toString(),
  }));
}

const TodoIdPage = async ({ params }: Props) => {
  const { todoId } = await params;
  const data = await getTodo(todoId);
  return <TodoModal data={data} />;
};

export default TodoIdPage;
