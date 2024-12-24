import React from "react";
import ProfileCard from "./ProfileCard";

export default function Profile() {
  return (
    <>
      <div>
        <h1>Profile Card Challenge</h1>
        <ProfileCard
          name="Alice"
          age={30}
          greetings={<strong>Hi Alice, have a wonderful day!</strong>}
        >
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
        </ProfileCard>
        <ProfileCard
          name={"Bob"}
          age={25}
          greetings={<strong>Hi Bob, keep up the great work!</strong>}
        >
        <p>Hobbies: Gaming, Cooking</p>
        <button>Contact</button>
        </ProfileCard>
      </div>
      
      
    </>
  );
}
