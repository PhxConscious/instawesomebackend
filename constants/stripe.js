const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_YUgCR5rqPmt6n01pgB8oDI7q'
    : 'sk_test_YUgCR5rqPmt6n01pgB8oDI7q';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;