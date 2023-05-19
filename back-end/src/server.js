const app = express;
app.use(express.json());

// const credentials = require("./credentials.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

app.get("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const uesr = users[userId];

  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});
app.post("/users", (req, res) => {
  const { id, userInfo } = req.body;
  users[id] = userInfo;
});
