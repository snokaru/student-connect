# API Routes for Login/Register

## Registering
```javascript
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
    ```javascript
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
    ```javascript
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
