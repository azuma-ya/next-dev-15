import getUsers from "@/features/user/api/get-users";
import Link from "next/link";

const UserPage = async () => {
  const users = await getUsers();

  return (
    <div>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <div className="">{user.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
