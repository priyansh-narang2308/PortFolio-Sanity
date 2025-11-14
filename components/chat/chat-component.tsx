import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "groq";

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

  return <div>\</div>;
};

export default ChatComponent;
