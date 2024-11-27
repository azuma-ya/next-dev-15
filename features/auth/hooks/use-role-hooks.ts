import { create } from "zustand";

import { Role } from "@/types/role";

type RoleStore = {
  role: Role;
  toggle: () => void;
};

export const useRole = create<RoleStore>((set, get) => ({
  role: Role.User,
  toggle: () =>
    set({
      role: get().role === Role.User ? Role.Company : Role.User,
    }),
}));
