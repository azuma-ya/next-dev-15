import type { User } from "@/types/user";

interface Props {
  params: Promise<{
    userId: string;
  }>;
}

export async function generateStaticParams() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "force-cache",
  }).then((res) => res.json());

  return users.map((user: User) => ({
    id: user.id.toString(),
  }));
}

const UserIdPage = async ({ params }: Props) => {
  const { userId } = await params;

  const user = await fetch(`http://localhost:3000/api/users/${userId}`, {
    cache: "force-cache",
  }).then((res) => res.json());

  return <div>{user.name}</div>;
};

export default UserIdPage;
