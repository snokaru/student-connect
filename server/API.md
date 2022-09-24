# API Routes for Login/Register

## Registering
```javascript
POST /api/users

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
```javascript
POST /api/login

{
    "email": "abcd",
    "password": "asolkfasof"
}

RESULT

{
    "token": "<token>"
}
```

# API Routes for Current User Management
1. [AUTH] Getting User data based on token
    ```javascript
    GET /api/login
    Authorization: <token>

    RESULT

    {
        "company": {
            "activity": String
        },
        "address": String,
        "description": String,
        "name": String,
        "email": String,
        "id": String,
        "type": "Company"/"Student"
    }
    ```
2. [AUTH] Updating User data
    ```javascript
    PUT /api/login
    {
        "description": "abcd",
        "address": "asolkfasof"
    }

    RESULT

    The whole user object with updated parameters.
    ```

# API Routes for General User Management
1. Get All Users
    ```
    GET /api/users
    ```
2. Get Specific User
    ```
    GET /api/users/<id>
    ```
3. Create User
    ```
    POST /api/users
    ```
4. [AUTH] Update Specific User (Currently only updates based on auth, but can be expanded to update any user given the privilleges)
    ```
    PUT /api/users/<id>
    ```