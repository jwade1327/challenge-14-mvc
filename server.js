const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlbars', hbs.engine);
app.set('view engine', 'handlebars');