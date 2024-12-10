define({ "api": [
  {
    "type": "post",
    "url": "/users",
    "title": "Create a new user",
    "name": "PostUser",
    "group": "Authentication",
    "version": "1.0.0",
    "description": "<p>Create a new user in the database.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phonenumber",
            "description": "<p>Phone number of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Status code.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request Parameters are undefined or missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "503",
            "description": "<p>Service Unavailable Error in user creation.</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/auth-controller.ts",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create a new user",
    "name": "PostUser",
    "group": "Authentication",
    "version": "1.0.0",
    "description": "<p>Create a new user in the database.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phonenumber",
            "description": "<p>Phone number of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Status code.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request Parameters are undefined or missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "503",
            "description": "<p>Service Unavailable Error in user creation.</p>"
          }
        ]
      }
    },
    "filename": "src/routes/auth-router.ts",
    "groupTitle": "Authentication"
  },
  {
    "type": "middleware",
    "url": "tokenAuth",
    "title": "Token Authentication Middleware",
    "name": "TokenAuth",
    "group": "Authentication",
    "version": "1.0.0",
    "description": "<p>Middleware to authenticate requests using a JWT token.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Decoded user information from the token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.phonenumber",
            "description": "<p>User phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_type",
            "description": "<p>User type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.favourite_bgr_id",
            "description": "<p>Favourite burger ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized No token provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Invalid token.</p>"
          }
        ]
      }
    },
    "filename": "src/middlewares/authentication.ts",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Authenticate user",
    "name": "UserLogin",
    "group": "Authentication",
    "version": "1.0.0",
    "description": "<p>Authenticate a user with username and password.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.phonenumber",
            "description": "<p>User phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_type",
            "description": "<p>User type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.favourite_bgr_id",
            "description": "<p>Favourite burger ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT token.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request Parameters are undefined or missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized Invalid credentials.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error Error fetching user from the database.</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/auth-controller.ts",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Authenticate user",
    "name": "UserLogin",
    "group": "Authentication",
    "version": "1.0.0",
    "description": "<p>Authenticate a user with username and password.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.phonenumber",
            "description": "<p>User phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_type",
            "description": "<p>User type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.favourite_bgr_id",
            "description": "<p>Favourite burger ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT token.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request Parameters are undefined or missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized Invalid credentials.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error Error fetching user from the database.</p>"
          }
        ]
      }
    },
    "filename": "src/routes/auth-router.ts",
    "groupTitle": "Authentication"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/apidoc/main.js",
    "group": "E:\\pöytäkone webdev kamat\\Royal-Buns\\backend\\src\\apidoc\\main.js",
    "groupTitle": "E:\\pöytäkone webdev kamat\\Royal-Buns\\backend\\src\\apidoc\\main.js",
    "name": ""
  },
  {
    "type": "middleware",
    "url": "notFoundHandler",
    "title": "Not Found Handler Middleware",
    "name": "NotFoundHandler",
    "group": "Error",
    "version": "1.0.0",
    "description": "<p>Middleware to handle 404 Not Found errors.</p>",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found The requested resource could not be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found - /nonexistent-route\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/middlewares/error-handler.ts",
    "groupTitle": "Error"
  },
  {
    "type": "middleware",
    "url": "validationErrorHandler",
    "title": "Validation Error Handler Middleware",
    "name": "ValidationErrorHandler",
    "group": "Error",
    "version": "1.0.0",
    "description": "<p>Middleware to handle validation errors from express-validator.</p>",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request Invalid input data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Invalid input data\",\n  \"errors\": [\n    {\n      \"field\": \"username\",\n      \"message\": \"Username is required\"\n    },\n    {\n      \"field\": \"password\",\n      \"message\": \"Password must be min 8 long\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/middlewares/error-handler.ts",
    "groupTitle": "Error"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Authenticate user",
    "name": "AuthenticateUser",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Authenticate a user with username and password.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.phonenumber",
            "description": "<p>User phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_type",
            "description": "<p>User type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.favourite_bgr_id",
            "description": "<p>Favourite burger ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized Invalid credentials.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error Error fetching user from the database.</p>"
          }
        ]
      }
    },
    "filename": "src/models/user-model.ts",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create a new user",
    "name": "CreateUser",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Create a new user in the database.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phonenumber",
            "description": "<p>Phone number of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>Type of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of the newly created user.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error Error inserting new user into the database.</p>"
          }
        ]
      }
    },
    "filename": "src/models/user-model.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/me",
    "title": "Get current user",
    "name": "GetMe",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Get the current authenticated user's information.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.phonenumber",
            "description": "<p>User phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_type",
            "description": "<p>User type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.favourite_bgr_id",
            "description": "<p>Favourite burger ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized.</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/user-controller.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/me",
    "title": "Get current user",
    "name": "GetMe",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Get the current authenticated user's information.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.phonenumber",
            "description": "<p>User phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_type",
            "description": "<p>User type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.favourite_bgr_id",
            "description": "<p>Favourite burger ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized.</p>"
          }
        ]
      }
    },
    "filename": "src/routes/user-router.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/profile",
    "title": "Get profile data",
    "name": "GetProfileData",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Get the current authenticated user's profile data.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>User phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>User type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "favourite_bgr_id",
            "description": "<p>Favourite burger ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized.</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/user-controller.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/profile-data",
    "title": "Get profile data",
    "name": "GetProfileData",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Get the current authenticated user's profile data.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>User phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>User type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "favourite_bgr_id",
            "description": "<p>Favourite burger ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized.</p>"
          }
        ]
      }
    },
    "filename": "src/routes/user-router.ts",
    "groupTitle": "User"
  }
] });
