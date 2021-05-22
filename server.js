const express = require('express');
const app = express();

app.use(express.static('dist'));
app.use(express.static('static'));

app.get('/', (req, res) => {
	res.send('Hello World!')
});

app.listen(process.env.PORT || 8080);
