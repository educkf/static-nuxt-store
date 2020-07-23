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