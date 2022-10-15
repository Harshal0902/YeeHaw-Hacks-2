import {Client, Account, Databases} from 'appwrite'

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("634ab953e4e711c85458")

export const account = new Account(client)

//Database

export const databases = new Databases(client, "634ab969d72a2a1f22ce")