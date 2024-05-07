import React, { useEffect, useState } from "react";
import { User } from "../types/user";
import UserProfileForm from "./user-profile-form";

export default function UserProfileContainer() {
  const [user, setUser] = useState<User | null>(null);
  // fetch random user api
  const fetchRandomUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    return data.results[0];
  };

  useEffect(() => {
    fetchRandomUser().then((data) => setUser(data));
  }, []);

  return (
    <div>
      <UserProfileForm user={user} />
    </div>
  );
}
