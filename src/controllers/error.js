const Path = require('path');

exports.client = (req, res) => {
  res.status(404);
  res.sendFile(Path.join(__dirname, '..', '..', 'public', '404.html'));
};

exports.server = (err, req, res) => {
  console.log('error 500');
  res.status(500);
  res.sendFile(Path.join(__dirname, '..', '..', 'public', '500.html'));
};
