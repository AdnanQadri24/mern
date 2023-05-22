const express = require('express');

const app = express();

const data  = ({
"nama": "adnan",
"kelas": "XII"
});
app.use(() => {
    console.log("hello guys");
    console.log('hello server...' + (data.nama));
})


app.listen(4000);