# Yatech - AUTHENTICATION API (NODE JS)
##

## Tech Stack
### [Node JS](https://nodejs.org/en/about)
### [Javascript](https://devdocs.io/javascript/)
### [Express JS](https://expressjs.com/)
### [PostgreSQL](https://www.postgresql.org/)
### [Sequelize](https://sequelize.org/)

##
## Application installation steps
Install npm dependencies in the main folder that contains package.json so that npm can read the dependencies in package.json and all off the dependencies will be installed.
``` bash
    npm install
``` 
##

Create new .env file and copy/paste the env keys below into .env.
``` bash
    APP_PORT=8071
    BASE_URL=http://localhost:8071

    JWT_SECRET=Th1515jwt53Cr3t
    REFRESH_TOKEN_SECRET=R3fr35hT0k3n53Cr3t

    # set the db configuration keys according to your configuration set.
    DB_HOST="localhost"
    DB_NAME="db_test"
    DB_USER="piuspius"
    DB_PASSWORD="piuspius"
    DB_PORT=5432

    MAIL_USER=crausherpius.17nichi@gmail.com
    MAIL_PASS=gyyfkwlptoodiamd
```
##

Check "config.json" in "src/database/config/config.json".
``` bash
    # You need to re-configure this configuration according your db configuration values in .env. Check the example below.

    {
        "development": {
            "username": "piuspius",
            "password": "piuspius",
            "database": "db_test",
            "host": "localhost",
            "dialect": "postgres"
        },
        "test": {
            "username": "piuspius",
            "password": "piuspius",
            "database": "db_test_test",
            "host": "localhost",
            "dialect": "postgres"
        },
        "production": {
            "username": "piuspius",
            "password": "piuspius",
            "database": "db_test_production",
            "host": "localhost",
            "dialect": "postgres"
        }
    }

```
##

## How to run this app?
Make sure the steps above are done.
##

Now do db migration after creating db in postgreSQL.
``` bash
    # to create all tables
    npm run migrate:up

    # to drop all tables
    npm run migrate:down
```
##

If you don't want to insert new data, in this case register new account, use this db seeder to get user account instantly. 
``` bash 
    npm run seed:up
```
##

Start the server
``` bash
    npm start

    # or 

    npm run dev
```
##

## Postman Documentation
Check this postman documentation to know how to use the url
``` bash
    https://documenter.getpostman.com/view/26304983/2s9YJXZQSB
```

##
##
### Note
It's recommended to use real email if you want to register new account because this feature will send you an email verification to verify your account.