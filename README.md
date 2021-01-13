# simpleCrud_Express for Users CRUD
##Setup 
`npm install`
`npm start` to run server

##Create User
POST 
/users
Example Request Body
```javascript
{
    "first_name": "Bob",
    "last_name": "Thomas",
    "email": "bob.thomas@example.com"
}
```
### Read Users
GET all users
/users

GET a specific user
/users/:id
Example GET /users/1


### Update User
POST /users/:id 
/users
Example POST /users/1
Example Request Body
```javascript
{
    "first_name": "Bob_changed_name",
    "last_name": "Thomas",
    "email": "bob.thomas@example.com"
}
```

### Delete User
DELETE /users/:id
Example DELETE /users/1
