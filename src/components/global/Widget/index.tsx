import { fetchUserProfile } from "@/lib/utils";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";

const index = () => {
  const [profile, setProfile] = useState<{
    status: number;
    user:
      | ({
          subscription: {
            plan: "PRO" | "FREE";
          } | null;
          studio: {
            id: string;
            screen: string | null;
            mic: string | null;
            preset: "HD" | "SD";
            camera: string | null;
            userId: string | null;
          } | null;
        } & {
          id: string;
          email: string;
          firstName: string | null;
          lastName: string | null;
          createdAt: Date;
          clerkId: string;
        })
      | null;
  } | null>(null);


  const {user} = useUser();


  useEffect(() => {


    if(user && user.id) {
        fetchUserProfile(user.id).then((p) => setProfile(p)) 
    }
  },[user])
  return <div>index</div>;
};

export default index;
