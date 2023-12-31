"use client";

import { useFetch } from "@/hooks/fetch";
import { I_User } from "@/types/user/user.interface";
import { Spin } from "antd";

export const Dashboard = () => {
  const { data, error, loading } = useFetch<I_User[]>("/api/users/getAllUsers");

  if (error) return <div>Error!</div>;

  return loading ? (
    <Spin />
  ) : (
    <div>
      {data?.map((user, id) => (
        <div key={id}>{user.name}</div>
      ))}
    </div>
  );
};
