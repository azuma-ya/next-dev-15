"use client";

import { useTransition } from "react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Role } from "@/types/role";
import { useRole } from "../hooks/use-role-hooks";

const ToggleRoleButton = () => {
  const { role, toggle } = useRole();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      toggle();
      router.refresh();
    });
  };

  return (
    <Button onClick={handleClick} disabled={isPending} className="w-48">
      {role === Role.User ? "企業側画面へ" : "ユーザー側画面へ"}
    </Button>
  );
};

export default ToggleRoleButton;
