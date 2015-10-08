var chai = require('chai'),
		chaiAsPromise = require('chai-as-promised'),
		should = chai.should();

chai.use(chaiAsPromise);

module.exports = function() {

	this.Then(/^Fred logs into PayPal$/, function(callback) {
		this.accountPage = this.loginPage.toAccount(this.nemo._config.get('username'),
				this.nemo._config.get('password'));
		callback();

	});

	this.Then(/^he should be logged in successfully$/, function(callback) {
		this.accountPage.isVisible().should.eventually.be
				.equal(true, 'Logout button was not visible')
				.notify(callback);
	});
};