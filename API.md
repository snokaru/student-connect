# API Routes for Login/Register

## Registering
```json
POST /api/user/register

{
  "email": "<email>",
  "type": "<Student/Company>",
  "password": "<password>",
  "name": "<name>"
}

RESULT

{
    "token": "<token>",
}
```
## Logging In
1. Getting Token based on credentials
    ```json
    POST /api/user/login

    {
        "email": "abcd",
        "password": "asolkfasof"
    }

    RESULT

    {
        "token": "<token>"
    }
    ```
2. Getting User data based on token
    ```json
    GET /api/user/login
    Authorization: <token>

    RETURNS

    "company": {
        "activity": String
    },
    "address": String,
    "description": String,
    "name": String,
    "email": String,
    "id": String,
    "type": "Company"/"Student"
    ```

Authorization: <token>

```json
```

// COMPANY 
GET /api/user/login
Authorization: <token>
RETURNEAZA
{
    "company": {
        "activity": ""
    },
    "address": "",
    "description": "",
    "name": "test test",
    "email": "testcompany@gmail.com",
    "id": "6069d047809b5c5cc36db4fd",
    "type": "company"
}

POST /api/user/login
{
  "email": "abcd",
  "password": "asolkfasof"
}
RETURNEAZA
{
  "token": "<token>"
}

POST /api/user/register
{
  "email": "adfkamfa",
  "type": "Student" / "Company",
  "password": "sfoajsfo",
  "name": "fasijfas",
}
RETURNEAZA
{
  "token": "<token">
}


