const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send('<h1>user login</h1><form action = "/" onSubmit = "localStorage.setItem("username",req.body.username)"><input type="text" id="username" name="username"><button type="submit">login</button></form>');
})

module.exports = router;