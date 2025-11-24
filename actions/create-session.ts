"use server";

import { auth } from "@clerk/nextjs/server";
import { WORKFLOW_ID } from "@/lib/config";

export async function createSession() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized - Please sign in.");
  }

  const API_KEY = process.env.OPENAI_API_KEY;
  if (!API_KEY) {
    throw new Error("OPENAI_API_KEY not configured");
  }

  if (!WORKFLOW_ID) {
    throw new Error("WORKFLOW_ID not configured");
  }

  const response = await fetch("https://api.openai.com/v1/chatkit/sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
      "OpenAI-Beta": "chatkit_beta=v1",
    },
  });
}
