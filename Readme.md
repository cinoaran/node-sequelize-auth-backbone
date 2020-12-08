# Backbone for Container driven app.

> NodeJS, Passport, Sequelize ( Postgres, PgAdmin ), React, Redux.

# Craete and fill out the .env file

> pg-admin

PGADMIN_DEFAULT_EMAIL='YOUR EMAIL ADDRESS'

PGADMIN_DEFAULT_PASSWORD='YOUR PASSWORD'

> auth.env

SECRETKEY='SECRET_KEY_FOR AUTHENTICATION

> database.env

POSTGRES_USER='POSTGRES_USER'

POSTGRES_PASSWORD='POSTGRES_PASSWORD'

POSTGRES_DB='POSTGRES_DB_NAME'

> Status

DEVELOPMENT=development

PRODUCTION=production

# Initialize for Intern Admin Registration Dummy entry

CLIENTKEY= 1607442302-INT-ADMIN

CLIENTCOMPANY=XY-COMPANY

CLIENTPERSON=John Doe

CLIENTEMAIL=john@doe.com

CLIENTPHONE=+49.030.88.99.44.66.909

CLIENTFAX=+49.030.33.44.55.66.555

CLIENTMOBILE=+49.172.99.88.7676

CLIENTRANGE= 100

# Initialize for Intern Admin ADDRESS

ADDRESSSTREET=Brandenburger Tor 1

ADDRESSZIP=10000

ADDRESSCITY=Berlin

ADDRESSCOUNTRY=Deutschland

## Quick Start

```bash
# Install dependencies for server and client
npm install

# Run docker containers ( at root level )
docker-compose up

# Server runs on http://localhost:5000 and client on http://localhost:3000 and pgAdmin runs on http://localhost:5050
# HOST ENTRY => docker inspect CONTAINER_ID  | grep IPAddress to check running host
```

## App Info

This SPA is a backbone for Authentication with passport.js. First Internal Admin Dummy entry data is listed in .env file
and will be added to the postgres database at start. To Create external User follow the steps.

1. Fill out the Sign up form.
2. Fill out the RegKey register form (by entering the client_key "1607443338255-REG-EXT").
3. Fill out the Sign in form to enter the dashboard area with 'secret resource'

### Authors

Cino Cüneyt Aran

### Version

1.0.0

### License

This project is licensed under the MIT License
