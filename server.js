const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, __dirname +'/storage')
	},
	filename: function (req, file, cb) {
		const filename_d = file.originalname.split(".");
		const ext = filename_d.slice(-1)[0];
		filename_d.pop();
		const filename = filename_d.join("");
		cb(null, filename + '-' + Date.now() + "." +ext);
	}
});
const upload = multer({
	storage: storage
});

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.post('/d', upload.single("up"), (req, res) => {
	console.log(req.file.encoding);
	console.log(req.file.originalname);
	console.log(req.file.original)
	if(req.file) {
		res.json(req.file);
	}
	else throw 'error 500';
});

app.listen(PORT, () => {
	console.log('Listening at ' + PORT );
});