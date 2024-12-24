# MongoDB Code Examples

## Starting the MongoDB Shell  
---

The following commands are used to start the MongoDB shell:

shell
mongo
mongosh

The following command is for the MongoDB server (Mongo Driver):

shell
mongod

You can also type the following command in the shell to get a list of other commands:

shell
help

---

## Database and Collection Operations  
---

### Create or Switch Databases

The following command is used to either create a database or switch to the database if it already exists:

shell
use databaseName

### Show Databases

The following commands will display a list of all available databases:

shell
show databases
show dbs

---

## Seeding Data into Databases  
---

The following command can be used in both SQL and NoSQL to run a script that seeds data into a database:

shell
npm run seed

---

## Collections and Documents  
---

### Create a Collection and Insert Data

The following code is an example of how to create a collection and insert data into a document in one step:

javascript
db.collectionName.insertOne({ key1: value1, key2: value2 });

### MongoDB Object ID

The following MongoDB method returns a 12-byte object ID:

shell
ObjectID

---

## Mongoose Operations  
---

### Creating a Model

The following function creates a Model, which is a class representing a collection in your MongoDB database:

javascript
mongoose.model("ModelName", schema);

- It takes a Mongoose schema as an argument and compiles it into a Model.
- The resulting Model provides an interface for interacting with the database, allowing you to perform operations like saving, querying, and updating.

### Querying the Database

The following Mongoose method is used to query the database for documents that match a specified set of criteria:

javascript
find(criteria);

- It allows you to retrieve data from a collection and filter it based on the criteria you specify.
- This is the Mongoose equivalent of a GET request in RESTful routing (e.g., Express.js).

### Saving Documents

The following Mongoose methods are used to save a new document to the database:

javascript
save();
create(document);

- **save():** Used for incremental creation and modification of documents before saving them to the database.
- **create():** Used to create and save a document in one step.

### Updating Documents

The following Mongoose method is used to update a document in the database:

javascript
update(criteria, updateData);

- This is the Mongoose equivalent of a PUT request in RESTful routing (e.g., Express.js).

### Deleting Documents

The following Mongoose method is used to delete a single document that matches the filter criteria:

javascript
delete(criteria);

- This is the Mongoose equivalent of a DELETE request in RESTful routing (e.g., Express.js).

---

## Mongoose Array Operators  
---

### Add to Set

The following Mongoose operator adds a value to an array unless the value is already present:

javascript
{ $addToSet: { <field1>: <value1>, ... } }

### Push to Array

The following Mongoose operator adds a specified value to an array:

javascript
{ $push: { <field1>: <value1>, ... } }

- If the field is absent in the document, it adds the array field with the value.
- If the field is not an array, the operation will fail.
- If the value is an array, it appends the whole array as a single element.
