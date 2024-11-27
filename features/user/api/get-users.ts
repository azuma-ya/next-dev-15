import type { User } from "@/types/user";

const getUsers = async (): Promise<User[]> => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    cache: "force-cache",
  }).then((response) => response.json());
};

export default getUsers;
