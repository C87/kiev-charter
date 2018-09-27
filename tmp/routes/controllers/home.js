const stripe = require('stripe')('sk_test_bg7YDBUjL3gyxZYLhUjIKg6u');

module.exports.booking = (req, res) => {
  const token = req.body.stripeToken;

  const charge = stripe.charges.create({
    amount: req.body.amount,
    currency: 'gbp',
    description: req.body.description,
    source: token,
    statement_descriptor: 'Kiev Charter',
    receipt_email: req.body.stripeEmail,
  }).then((tran) => {
    res
      .render('index.html', {
        amount: tran.amount,
        currency: tran.currency,
        description: tran.description,
        outcome: tran.outcome.seller_message,
        partial: 'partials/result.html',
      });
  }).catch((err) => {
    console.log(err);
    res
      .render('index.html', {
        partial: 'partials/result.html',
      });
  });
};

module.exports.render = (req, res) => {
  res
    .status(200)
    .render('index.html', {
      title: 'Kiev Charter | Return Flights Direct from Liverpool to Kiev 26th May',
      script: '/js/index.js',
      partial: 'partials/landing.html',
      items: [
        {
          description: '1 Person',
          amount: '50000',
          cost: '£500',
          route: 'book-one',
        }, {
          description: '2 Persons',
          amount: '100000',
          cost: '£1000',
          route: 'book-two',
        }, {
          description: '3 Persons',
          amount: '150000',
          cost: '£1500',
          route: 'book-three',
        }, {
          description: '4 Persons',
          amount: '200000',
          cost: '£2000',
          route: 'book-four',
        }, {
          description: '5 Persons',
          amount: '250000',
          cost: '£2500',
          route: 'book-five',
        },
      ],
    });
};
