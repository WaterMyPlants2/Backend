# Backend
This is the repository for the Backend team of WaterMyPlants2
 

 # Back-end
Water My Plants 

# Documentation:

# Base URL for Deployed API

https://secretfamilyrecipes3.herokuapp.com/

# Endpoints
| Request | URL | Description |
| ------- | --- | ----------- |
| POST | api/auth/register | create a new user with username, phone number and password |
| POST | api/auth/login | login valid user with username and password |
| GET | /api/users | view list of all users |
| GET | /api/users/:id | find users by user ID |
| GET | /api/users/:id/plants | gets user with plants by id |
| PUT | /api/users/:id | updates user password and phone number by ID |
| DELETE | /api/users/:id | delete a user by ID |


# Table Requirements

# Users
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | users id (auto generated) |
| username | string | no | no | users name |
| password | string | no | yes | users email |
| phoneNumber | string | yes | yes | users username (max 50 char) |


# Plants
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | recipes id (auto generated) |
| nickname | string | yes | no | recipes title (max 100 char) |
| species | string | yes | no | ingredients for the recipe |
| h2oFrequency | string | yes | no | step-by-step directions for a recipe |
| user_id | string | yes | no | category for a recipe - breakfast, lunch, dinner, dessert, ect. |
