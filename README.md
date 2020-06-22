# Backend
This is the repository for the Backend team of WaterMyPlants2
 

 # Back-end
Water My Plants 

# Documentation:

# Base URL for Deployed API



# Endpoints
| Request | URL | Description |
| ------- | --- | ----------- |
| POST | /api/auth/register | creates a new user with username, phone number and password |
| POST | /api/auth/login | login valid user with username and password |
| GET | /api/users | view a list of all users |
| GET | /api/users/:id | find users by user ID |
| GET | /api/users/:id/plants | gets user with plants by ID |
| PUT | /api/users/:id | updates user password and phone number by ID |
| DELETE | /api/users/:id | delete a user by ID |


POST /auth/register

{
	"username": "cat", // string, unique
	"password": "pass" // string
	"phoneNumber": 676767, // integer, unique
}
201 success
{
    "user": {
        "id": 5,
        "username": "cat",
        "password": "$2a$12$SkhCOMJqfjC1Gs90nIRBk.NzUpkSHFwF7frdYTtMze..e1lHoE7Ye",
        "phoneNumber": "676767"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsInVzZXJuYW1lIjoiY2F0IiwiaWF0IjoxNTkyNzgzNzAxLCJleHAiOjE1OTMwNDI5MDF9.f4rsCrGb8m5mBloPDZJDmI81Wgmf4RoBcF_BuBAwK8g"
}

400 fail
{
    "message": "Please enter information for all required fields."
}

POST /auth/login

{
	"username": "dog",
	"password": "pass"
}
200 success
{
     "message": "Welcome dog!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsInVzZXJuYW1lIjoiZG9nIiwiaWF0IjoxNTkyNzk0MTY2LCJleHAiOjE1OTMwNTMzNjZ9.CdGozDkyFVGgp_SJwyAmF1TU_uvWUIzzqRg-VxvGp7w"
}
401 fail
{
    message: 'Invalid Credentials'
}

GET /api/users

200  success
[
    {
        "id": 1,
        "username": "Dra",
        "phoneNumber": "123123123"
    },
    {
        "id": 2,
        "username": "Goblin",
        "phoneNumber": "222222222"
    },
    {
        "id": 3,
        "username": "Wolf",
        "phoneNumber": "321321321"
    },
    {
        "id": 4,
        "username": "dog",
        "phoneNumber": "4545454548"
    },
    {
        "id": 5,
        "username": "cat",
        "phoneNumber": "676767"
    },
    {
        "id": 7,
        "username": "shark",
        "phoneNumber": "989898"
    }
]

400 fail
[
    {
    message: 'An Error occurred when retrieving list of users'
    }
]

GET /api/users/:id

200 success
[{
    "id": 2,
    "username": "Goblin",
    "password": "password",
    "phoneNumber": "222222222"
}
    }]
500 fail
{
    message: 'Failed to get that user'
}

GET /api/users/:id/plants

201 success
[
    {]
        user_id: 1,
        nickname:'Allen', 
           species: 'Allium genus', 
           h2oFrequency: '5 times a week', 
           image: 'https://images.unsplash.com/photo-1558350315-8aa00e8e4590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80'
    },
    {
      user_id: 1,
          nickname:'Tasty', 
          species: 'Solanum lycopersicum', 
          h2oFrequency: '3 times a week', 
          image: 'https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
    }
]
500 fail
{
    "message": "There are no plants with this user"
}

DELETE /api/users/:id/

{
    "password": "testing7",
    "phoneNumber": "4545454548"

}

 success
{
    "removed": 1
}
500 fail
{
    message: 'Failed to delete that user.'
}


# Table Requirements

# Users
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | users id  |
| username | string | yes | yes | users name |
| password | string | yes | no | users password |
| phoneNumber | string | yes | yes | users phoneNumber |


# Plants
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | plants id |
| nickname | string | yes | no | plants nickname |
| species | string | yes | no | species for the plants |
| h2oFrequency | string | yes | no | how many times the plants need to be watered (twice a week) |
| image | string | no | no | url address for image of that plant if needed |
| user_id | integer| yes | no | plant associated with a specific user by id |


# Dependencies Used 
  ```json
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "helmet": "^3.23.1",
    "jsonwebtoken": "^8.5.1",
    "knex": "^0.21.1",
    "sqlite3": "^4.2.0",
  },
  "devDependencies": {
    "jest": "^24.3.1",
    "nodemon": "^1.18.10",
    "supertest": "^4.0.0"
  }
```

# Author 

* Drake Alia