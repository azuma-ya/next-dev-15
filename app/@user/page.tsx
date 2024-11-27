import { Button } from "@/components/ui/button";
import Link from "next/link";

const UserHomePage = () => {
  return (
    <div>
      <h1>UserHomePage</h1>
      <Button variant="link" asChild>
        <a href="/users">go to user</a>
      </Button>
      <Button variant="link" asChild>
        <Link href="/todos/1">open todo modal</Link>
      </Button>
    </div>
  );
};

export default UserHomePage;
