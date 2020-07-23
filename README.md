# static-store

> My sweet Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Firebase project file

You need to create a file on root directory named `.firebaserc` with the project name inside:

```
{
  "projects": {
    "default": <project-name>
  }
}

```

## ENV VARS NEEDED

For Firebase (to use on admin, when on spa mode)

API_KEY=

AUTH_DOMAIN=

DATABASE_URL=

PROJECT_ID=

STORAGE_BUCKET=

MESSAGING_SENDER_ID=

APP_ID=

FIRESTORE_URL= To fetch firestore as a REST API, as Nuxt Static does not work with regular firebase (as I could se...), so have to fetch as Rest API

MODE= 'spa' for admin area, 'universal' for production build, so it build real static files

DEPLOY_URL= Function URL to trigger the travis process (you get this once you deploy the function inside `/functions` folder)


And for firebase functions (to deploy with travis ci - https://docs.travis-ci.com/user/triggering-builds/), two firebase variables:

travis.token

travis.repo 
