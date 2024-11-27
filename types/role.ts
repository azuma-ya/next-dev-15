// export enum Role {
//   Admin = "admin",
//   Company = "company",
//   User = "user",
// }

export const Role = {
  Admin: "admin",
  Company: "company",
  User: "user",
} as const;

export type Role = (typeof Role)[keyof typeof Role];
