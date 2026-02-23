const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
var formidable = require('formidable');
const session = require('express-session');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(session({
  secret: 'abcdefg',
  resave: true, 
  saveUninitialized: false 
  }));
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.render('pagini/login');
});
app.get('/stil.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'stil.css'));
  });
app.get('/quiz.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'quiz.js'));
});
app.get('/calculator.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'calculator.js'));
});
app.get('/main.html', (req, res) => {
  res.render('pagini/main', { username: req.session.username });
});
app.get('/main', (req, res) => {
  res.render('pagini/main', { username: req.session.username });
});
app.get('/legi.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'legi.html'));
});
app.get('/legi', (req, res) => {
    res.sendFile(path.join(__dirname, 'legi.html'));
  });
app.get('/geometrie.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'geometrie.html'));
});
app.get('/geometrie', (req, res) => {
    res.sendFile(path.join(__dirname, 'geometrie.html'));
  });
app.get('/derivate.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'derivate.html'));
});
app.get('/derivate', (req, res) => {
    res.sendFile(path.join(__dirname, 'derivate.html'));
  });
app.get('/trigonometrie.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'trigonometrie.html'));
});
app.get('/trigonometrie', (req, res) => {
    res.sendFile(path.join(__dirname, 'trigonometrie.html'));
  });
app.get('/calculator.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'calculator.html'));
});
app.get('/calculator', (req, res) => {
    res.sendFile(path.join(__dirname, 'calculator.html'));
  });
app.get('/quiz.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'quiz.html'));
});
app.get('/quiz', (req, res) => {
    res.sendFile(path.join(__dirname, 'quiz.html'));
  });
app.get('/login.html', (req, res) => {
  res.render('pagini/login');
});
app.get('/login', (req, res) => {
    res.render('pagini/login');
  }); 
app.get('/logout', (req, res) => {
    req.session.destroy(); 
    res.render('pagini/logout');
  }); 
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});
app.get('/', (req, res) => {
  res.render('pagini/login');
});
app.post('/register', (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) =>{
    if (err)
    {
      return res.status(500).send('Eroare');
    }
    const usersData = JSON.parse(fs.readFileSync('users.json'));
    const users = usersData.users;
    const { username, password } = fields;
    const userExists = users.some(user => user.username === username);
    if (userExists)
    {
      return res.status(400).send('Utilizatorul există!');
    }
    users.push({ username, password });
    fs.writeFileSync('users.json', JSON.stringify(usersData, null, 2));
    res.status(200).send('Înregistrat cu succes!');
  });
});
app.post('/login', function(req, res)
{
  var form = new formidable.IncomingForm();
  var ob;
  var date = fs.readFileSync("users.json");
  ob = JSON.parse(date).users;
  var verifica = function(username, parola)
  {
    for (let i = 0; i < ob.length; i++)
      if (username === ob[i].username && parola === ob[i].password)
        return username;
    return null;
  }
  form.parse(req, function(err, fields, files)
  {
       let user = verifica(fields.username[0], fields.parola[0]);
       if(user)
        {
         req.session.username = user; 
         req.session.alias = fields.alias[0]; 
         res.redirect('/main');
        }
       else
         req.session.username = false;
         req.session.alias = '';
  });
});
app.get('/main', (req, res) => {
  if (req.session.username) {
      res.render('pagini/main', { username: req.session.username });
  }
  else
  {
      res.redirect('/main');
  }
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
