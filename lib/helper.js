var crypto = require('crypto');

module.exports = {
	crypt: crypt
};

function crypt(text, algo, key) {
	text = String(text || '');
	algo = algo || 'sha256';
	key = key || '';
	if (algo === 'md5') {
		return crypto.createHash(algo).update(new Buffer(text)).digest('hex');
	} else {
		var c = crypto.createHmac('md5', key).update(new Buffer(text)).digest('hex');
		return c;
	}
}
