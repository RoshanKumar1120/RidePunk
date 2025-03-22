# API Documentation

## Endpoint: `/users/register`

### Method: `POST`

### Description:
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns an authentication token along with the user details.

### Required Data:
The following fields are required in the request body:
- `fullname.firstname` (string): First name of the user (minimum 3 characters).
- `fullname.lastname` (string): Last name of the user (optional but must be at least 3 characters if provided).
- `email` (string): A valid email address.
- `password` (string): Password for the user (minimum 6 characters).

### Request Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

### Response:
#### Success (201 Created):
```json
{
  "token": "jwt-auth-token",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error (400 Bad Request):
Occurs when validation fails or required fields are missing.
```json
{
  "errors": [
    {
      "msg": "First name must be atleast 3 character long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

#### Error (500 Internal Server Error):
Occurs when there is an issue on the server side.
```json
{
  "error": "Internal Server Error"
}
```

### Notes:
- The `password` field is hashed before being stored in the database.
- The `token` is a JSON Web Token (JWT) used for authentication.
### Example Response:
#### Success Response Example:
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
        "fullname": {
            "firstname": "Alice",
            "lastname": "Smith"
        },
        "email": "alice.smith@example.com"
    }
}
```

#### Error Response Example:
```json
{
    "errors": [
        {
            "msg": "Email is invalid",
            "param": "email",
            "location": "body"
        }
    ]
}
```