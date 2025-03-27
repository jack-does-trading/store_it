"use server";

import { Account, Avatars, Client, Databases, Storage } from "node-appwrite";

import { cookies } from "next/headers";
import { appwriteConfig } from "./config";


export const createSessionClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId);

  const session = (await cookies()).get("appwrite-session");

  if (!session || !session.value) throw new Error("No session");

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
  };
};

export const createAdminClient = async () => {
  try {
    // Validate required config
    if (!appwriteConfig.endpointUrl) throw new Error('Missing Appwrite endpoint URL');
    if (!appwriteConfig.projectId) throw new Error('Missing Appwrite project ID');
    if (!appwriteConfig.secretKey) throw new Error('Missing Appwrite secret key');

    const client = new Client()
      .setEndpoint(appwriteConfig.endpointUrl)
      .setProject(appwriteConfig.projectId)
      .setKey(appwriteConfig.secretKey);

    return {
      get account() {
        return new Account(client);
      },
      get databases() {
        return new Databases(client);
      },
      get storage() {
        return new Storage(client);
      },
      get avatars() {
        return new Avatars(client);
      },
    };
  } catch (error) {
    console.error('Failed to create Appwrite admin client:', error);
    throw error;
  }
};