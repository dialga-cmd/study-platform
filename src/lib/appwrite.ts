import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject("68ad1cb50016acfff116");

export const account = new Account(client);