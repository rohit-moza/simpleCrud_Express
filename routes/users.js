const express = require('express');
const { route } = require('.');
const router = express.Router();


let users = [] // this is the users table; 
let id = 0;

function getUserArrayIndexFromRequest(req) {
  return (req.params.id - 1);
}
//Read users
router.get('/', function(req, res, next) {
  res.send(users);
});

// Read User
router.get('/:id', function(req, res, next) {
  let userArrayId = getUserArrayIndexFromRequest(req);
  let responseBody = users[userArrayId];
  if(responseBody){
    res.send(responseBody);
  } else {
    res.status(404).send('Sorry, cant find that');
  }
});


// Create user
router.post('/', function(req, res) {
  const { body } = req;
  const { first_name, last_name, email } = body; 
  id +=1;
  if(first_name && last_name && email){
    const user = {
      id, 
      first_name, 
      last_name, 
      email
    };
  
    users.push(user);
  
    res.status(201).send(user);
  } else {
    res.status(400).send('Insufficient parms send for user create');
  }
  
});


// update user
router.post('/:id', function(req, res) {
  let userArrayId = getUserArrayIndexFromRequest(req);
  const { body } = req;
  const { first_name, last_name, email } = body; 
  if (users[userArrayId]){
    if (first_name) users[userArrayId].first_name = first_name;
    if (last_name) users[userArrayId].last_name = last_name;
    if(email) users[userArrayId].email = email;
    res.send(users[userArrayId]);
  } else {
    res.status(400).send('Bad Request or user Id does not exist');
  }
});

//delete user
router.delete('/:id', function(req, res) {
  let userArrayId = getUserArrayIndexFromRequest(req);
  if(users[userArrayId]){
    delete users[userArrayId];
    res.send('Deleted User')
  } else {
    res.status(400).send('user not found or bad request')
  }
});




module.exports = router;
