const express = require("express");
let axios = require("axios");
const { promises } = require("dns");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", async function (req, res, next) {
    try {
        let results = req.body.developers.map(async (d) => {
            return await axios.get(`https://api.github.com/users/${d}`);
        });
        let out = [];
        await Promise.all(results).then((results) => {
            out = results.map((r) => ({ name: r.data.name, bio: r.data.bio }));
        });

        return res.send(JSON.stringify(out));
    } catch (err) {
        next(err);
    }
});

app.use(function (err, req, res, next) {
    let status = err.status || 500;

    return res.status(status).json({
        err: {
            message: err.message,
            status: status,
        },
    });
});

app.listen(3000, function () {
    console.log("Server now listening on 3000");
});
