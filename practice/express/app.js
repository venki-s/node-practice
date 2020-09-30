const express = require('express');
const { nextTick } = require('process');
const app = express();

app.use(function(req, res, next) {
    console.log('logging middleware ...');
    next();
});

app.get("/", (req, res) => {
     res.send("Hello express");
})

app.get("/api/courses", (req, res) => {
     res.send({
        courses: [
            {"id":1, "course": "Physics"},
            {"id":2, "course": "Chemistry"}

        ]
    });
})

app.get("/api/courses/:id", (req, res) => {
    const params = JSON.stringify(req.params);
    const query = JSON.stringify(req.query);
    res.send(params + query);
})


app.listen(3000, () => console.log('Listening on port 3000...'));

