const express = require("express");
const admin = require("firebase-admin");

const credentials = require("./credentials.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
