const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const express = require('express');
const cookieParser = require('cookie-parser')();
const cors = require('cors')({origin: true});
const app = express();
const Axios = require('axios');


const validateFirebaseIdToken = async (req, res, next) => {
  if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) &&
      !(req.cookies && req.cookies.__session)) {
    res.status(403).send('Unauthorized');
    return;
  }

  let idToken;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else if(req.cookies) {
    idToken = req.cookies.__session;
  } else {
    res.status(403).send('Unauthorized');
    return;
  }

  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedIdToken;
    next();
    return;
  } catch (error) {
    res.status(403).send('Unauthorized');
    return;
  }
};

app.use(cors);
app.use(cookieParser);
app.use(validateFirebaseIdToken);
app.get('/deploy', (req, res) => {

  const body = {
    "request": {
      "branch":"master"
    }
  }

  const config = {
    headers: {
      "Authorization": `token ${functions.config().travis.token}`,
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Travis-API-Version": "3"
    }
  }

  Axios.post(`https://api.travis-ci.com/repo/${functions.config().travis.repo}/requests`, body, config)
    .then(response => res.send(response.data))
    .catch(err => res.send(err.response));
});

// This HTTPS endpoint can only be accessed by your Firebase Users.
// Requests need to be authorized by providing an `Authorization` HTTP header
// with value `Bearer <Firebase ID Token>`.
exports.app = functions.https.onRequest(app);