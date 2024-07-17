import { Account, Client } from "appwrite";
import { conf } from "../conf";

export const client = new Client();
client.setEndpoint(conf.appwriteEndpoint).setProject(conf.appwriteProjectId);

export const account = new Account(client);
