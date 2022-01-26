const express = require('express');
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.post('/d', upload.single("up"), (req, res) => {
	console.log(req.file);
	if(req.file) {
		res.json(req.file);
	}
	else throw 'error 500';
});

app.listen(PORT, () => {
	console.log('Listening at ' + PORT );
});