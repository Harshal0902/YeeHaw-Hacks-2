import {Client, Account, Databases, Storage } from 'appwrite'

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("634ab953e4e711c85458")

export const account = new Account(client)

const db_id = "{process.env.APPWRITE_DB}"

export const databases = new Databases(client, db_id)

const storage_id = "{process.env.APPWRITE_STORAGE}"

export const storage = new Storage(client, storage_id)

