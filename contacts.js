const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "/db/contacts.json");

// TODO: задокументировать каждую функцию
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const list = await listContacts();
  const id = list.find((item) => item.id === contactId);
  return id || null;
};

const removeContact = async (contactId) => {
  // ...твой код
};

const addContact = async (data) => {
  const list = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  list.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(list));
  return newContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
