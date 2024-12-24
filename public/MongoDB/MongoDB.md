## What is MongoDB?

<span class="emphasis">MongoDB</span> is a <span class="emphasis">NoSQL</span> database, meaning it is a <span class="emphasis">non-relational</span> database management system (DBMS). Unlike traditional relational databases like <span class="emphasis">PostgreSQL</span>, MongoDB does not use tables and rows to store <span class="secondEmphasis">data</span>. Instead, it uses <span class="emphasis">documents</span>, <span class="emphasis">objects</span>, and <span class="emphasis">arrays</span>.  

### Key Features of MongoDB
- MongoDB is <span class="emphasis">open-source</span>.
- It is designed to store and process data in a flexible, scalable, and distributed manner.
- Documents in MongoDB are equivalent to rows of <span class="emphasis">data</span> in SQL.
- Groups of documents are stored in collections.

### BSON (Binary JSON)
- MongoDB stores objects in a format called <span class="emphasis">BSON</span> (Binary JSON).
- BSON is structured into key-value pairs.
- While similar to JSON, BSON is optimized for faster parsing.

---

## Data Modeling in MongoDB

### Collections
- Collections in MongoDB are equivalent to tables in SQL.
- Collections do NOT have an enforced schema like SQL tables.
- Each document in a collection can have different fields (keys) and types of data.
- Related data is nested within objects in embedded documents rather than split between tables.

### One-to-One Model Relationship
- A <span class="emphasis">One-to-One</span> relationship in MongoDB typically involves an ObjectID data type in one collection referencing an ObjectID with the same value in another collection.
  - The names of the ObjectIDs do not have to match, but their values must match.

### Related Data
- Related data can be nested in embedded documents as objects or arrays of objects.
- Alternatively, you can use common fields to match data between separate collections.

---

## MongoDB Tools

### MongoDB Compass
- MongoDB Compass is a <span class="emphasis">Graphical User Interface (GUI)</span> for MongoDB.
- It allows for visual interaction with your database and data.

### Mongo Shell
- Mongo shell provides a command-line interface to interact with MongoDB.
- There is an "i" icon in the top right corner of the shell interface that lists helpful commands and keyboard shortcuts.

---

## Port and Default Settings
- The default port for MongoDB is <span class="emphasis">27017</span>.

---

## ObjectID Structure
- The <span class="emphasis">ObjectID()</span> method generates a unique 12-byte identifier for MongoDB documents, consisting of:
  - A 4-byte timestamp representing the ObjectID’s creation (measured in seconds).
  - A 5-byte random value generated once per process.
  - A 3-byte incrementing counter.

---

## Scalability and Flexibility
- MongoDB is suitable for storing <span class="emphasis">heterogeneous</span> data and is easily scalable.
- It can handle flexible data models, making it ideal for modern applications that require rapid changes and adjustments.

---

## Mongoose
- Mongoose provides a lightweight schema or wrapper on top of MongoDB.
- It enforces a more rigid structure onto MongoDB, similar to how TypeScript enforces types onto JavaScript.
- The relationship between MongoDB and Mongoose is comparable to SQL and Sequelize.
```
