import {Client, Account, Databases} from 'appwrite'

const client = new Client();

client.setEndpoint("http://8080-appwrite-integrationfor-ex2s6aec68t.ws-us71.gitpod.io/v1").setProject("hackathon")

export const account = new Account(client)

//Database

export const databases = new Databases(client, "6349da71676650a7282b")