"use server";

import { ID } from "appwrite";
import { account } from "../config/appwrite.config";

export const getCurrentUser = async () => {
  try {
    return await account.getSession("current");
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const createUser = async (user: CreateUserParams) => {
  try {
    const response = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    if (response) {
      return login(user.email, user.password);
    }
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const login = async (email: string, password: string) => {
  try {
    return await account.createEmailPasswordSession(email, password);
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};
