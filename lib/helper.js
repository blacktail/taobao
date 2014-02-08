var crypto = require('crypto');

module.exports = {
	crypt: crypt
};

function crypt(text, algo) {
	text = String(text || '');
	algo = algo || 'sha256';
	
  return crypto.createHash(algo).update(new Buffer(text)).digest('hex');
}
