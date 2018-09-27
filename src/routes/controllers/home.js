module.exports.renderHome = (req, res) => {
  res
    .status(200)
    .render('index.html', {
      title: '_boilerplate',
      script: '/js/index.js',
      stylesheet: '/css/master.css',
      partial: false,
    });
};
