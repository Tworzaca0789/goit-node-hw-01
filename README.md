# Hello, I'm the "contacts" console app

We receive and output the entire contact list in the form of a table (console.table)

- node index.js --action list https://monosnap.com/file/rXInjCRNX2nw7YOkm3xnyX5WgzxKjG

We receive contact by ID

- node index.js --action get --id 05olLMgyVQdWRwgKfg5J6 https://monosnap.com/file/MSsZiPHKhdxEcBRMQ4qOuX3cDKSP1i

We add a contact

- node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22 https://monosnap.com/file/0hUkboeykHL5Fq3bErDP7GNoQq3Kni

We delete the contact

- node index.js --action remove --id qdggE76Jtbfd9eWJHrssH https://monosnap.com/file/P5quHyW2FmpbjMJyf7RDqerEk0v4Pi

## Technologies

"commander": "^11.1.0",
"express": "^4.18.2",
"nanoid": "^5.0.4"
"nodemon": "^3.0.2"
"node" : "^20.10.0"
