module.exports.validation = (req, res, next) => {
  if (req.path === '/book-one') {
    req.body.amount = 500;
    req.body.description = 'Liverpool to Kiev return: 1 Person';
    return next();
  }

  if (req.path === '/book-two') {
    req.body.amount = 1000;
    req.body.description = 'Liverpool to Kiev return: 2 Persons';
    return next();
  }

  if (req.path === '/book-three') {
    req.body.amount = 1500;
    req.body.description = 'Liverpool to Kiev return: 3 Persons';
    return next();
  }

  if (req.path === '/book-four') {
    req.body.amount = 2000;
    req.body.description = 'Liverpool to Kiev return: 4 Persons';
    return next();
  }

  if (req.path === '/book-five') {
    req.body.amount = 2500;
    req.body.description = 'Liverpool to Kiev return: 5 Persons';
    return next();
  }

  return next();
};
