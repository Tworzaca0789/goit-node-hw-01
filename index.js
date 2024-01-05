import * as contactsRouter from "./contacts.js";

import express from "express";

const app = express();
//const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("App listening at http://localhost:3000");
});

import { Command } from "commander";

const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsRouter.listContacts();
      console.table(contacts);
      break;

    case "get":
      const contact = await contactsRouter.getContactById(id);
      if (!contact) {
        console.error(`Contact id=${id} not found`);
      }
      console.table(contact);
      break;

    case "add":
      const newContact = await contactsRouter.addContact(name, email, phone);
      console.log(`Contact ${name} add`);
      console.table(newContact);
      break;

    case "remove":
      const removeContacById = await contactsRouter.removeContact(id);
      console.log(removeContacById);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
