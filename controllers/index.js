

exports.get_landing = function(req, res, next) {
   res.render('landing', { title: 'Express' });
    // res.render('practice1');
}
exports.submit_lead = function(req, res, next) {
   console.log("lead email:", req.body.lead_email);
   res.redirect('/');
    // res.render('practice1');
}
