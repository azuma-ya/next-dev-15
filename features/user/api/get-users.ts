import type { User } from "@/types/user";

const getUsers = async (): Promise<User[]> => {
  return fetch("http://localhost:3000/api/users", {
    cache: "force-cache",
  }).then((response) => response.json());
};

export default getUsers;
