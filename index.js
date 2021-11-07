const bodyparse = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyparse.json({
    limit:'5mb'
}));
app.use(bodyparse.json({
    type:'application/vnd.api+json'
}));
app.use(bodyparse.urlencoded({
    limit:'5mb',
    extended:true
}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.get('/', (req, res) => res.send('API Running'));

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
require('./routes')(app);
