import React from "react";
import { User } from "../types/user";
// import useFetch from "../hooks/useFetch";

// Receive user object and display user profile form
export default function UserProfileForm({ user }: { user: User | null }) {
  const { name, location, email, cell, picture } = user || {};
  return (
    <form>
      <div>
        <img src={picture?.large} alt="profile" />
      </div>
      <fieldset>
        <legend>Name</legend>
        <label>Last Name</label>
        <input type="text" value={name?.last} readOnly />
        <label>First Name</label>
        <input type="text" value={name?.first} readOnly />
      </fieldset>
      <fieldset>
        <legend>Location</legend>
        <label>Country</label>
        <input type="text" value={location?.country} />
        <label>State</label>
        <input type="text" value={location?.state} />
      </fieldset>
      <fieldset>
        <legend>Contact</legend>
        <label>Email</label>
        <input type="text" value={email} />
        <label>phone</label>
        <input type="text" value={cell} />
      </fieldset>
      <button>Submit</button>
    </form>
  );
}

// Using hook to fetch user data
// export default function UserProfileForm() {
//   const { data: user } = useFetch<UserResponse>("https://randomuser.me/api/");
//   const { name, location, email, cell, picture } = user?.results[0] || {};
//   return (
//     <form>
//       <div>
//         <img src={picture?.large} alt="profile" />
//       </div>
//       <fieldset>
//         <legend>Name</legend>
//         <label>Last Name</label>
//         <input type="text" value={name?.last} readOnly />
//         <label>First Name</label>
//         <input type="text" value={name?.first} readOnly />
//       </fieldset>
//       <fieldset>
//         <legend>Location</legend>
//         <label>Country</label>
//         <input type="text" value={location?.country} />
//         <label>State</label>
//         <input type="text" value={location?.state} />
//       </fieldset>
//       <fieldset>
//         <legend>Contact</legend>
//         <label>Email</label>
//         <input type="text" value={email} />
//         <label>phone</label>
//         <input type="text" value={cell} />
//       </fieldset>
//       <button>Submit</button>
//     </form>
//   );
// }
