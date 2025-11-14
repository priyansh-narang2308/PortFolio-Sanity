import { defineQuery } from "groq";
import { sanityFetch } from "@/sanity/lib/live";
import Chat from "./chat";


const CHAT_PROFILE_QUERY = defineQuery(`*[_id == "singleton-profile"][0]{
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    firstName,
    lastName,
    headline,
    shortBio,
    email,
    phone,
    location,
    availability,
    socialLinks,
    yearsOfExperience,
    profileImage
  }`);

const ChatComponent = async () => {
  const { data: profile } = await sanityFetch({ query: CHAT_PROFILE_QUERY });

  return (
    <div className="h-full w-full">
      <Chat profile={profile} />
    </div>
  );
};

export default ChatComponent;
