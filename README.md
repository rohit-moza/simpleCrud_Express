# simpleCrud_Express for Users CRUD

Note the Users table is an array in App memory. MongoDB can be used for the same. 
Also, this app was created using the express app generator - https://expressjs.com/en/starter/generator.html. It contains some redundant 
files and folders. 
## Setup 
`npm install`
`npm start` to run server

## Create User
- POST /users
- Example Request Body
```javascript
{
    "first_name": "Bob",
    "last_name": "Thomas",
    "email": "bob.thomas@example.com"
}
```
### Read Users
- GET all users - GET /users

- GET a specific user - GET /users/:id
- Example GET /users/1

### Update User
- POST /users/:id 
- Example POST /users/1
- Example Request Body
```javascript
{
    "first_name": "Bob_changed_name",
    "last_name": "Thomas",
    "email": "bob.thomas@example.com"
}
```

### Delete User
- DELETE /users/:id
- Example DELETE /users/1
