const express = require('express');
const colors = require('colors');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();

app.get('^/$|^/index(.html)?', (req, res) => {
    // res.sendFile('./views/index.html', { root: __dirname });
    console.log("[GET] /index.html".yellow.bgWhite);
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/new-page(.html)?', (req, res) => {
    console.log("[GET] /new-page.html".cyan);
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get('/css/style.css', (req, res) => {
    console.log("[GET] /css/style.css".bgBlue.black);
    res.status(200).sendFile(path.join(__dirname, 'css', 'style.css'));
})

app.get('/old-page(.html)?', (req, res) => {
    console.log("[GET] /old-page.html".bgCyan.black);
    res.redirect(301, '/new-page.html'); // 302 by default
})

app.get("/img/img1.(jpg|jpeg|png)", (req, res) => {
    console.log("[GET] /img/img1.jpg".bgMagenta.white);
    res.sendFile(path.join(__dirname, 'img', 'img1.jpg'));
});


// Route handlers
app.get('/hello(.html)?', (req, res, next) => {
    console.log("[GET] /hello.html".bgGreen.black);
    next();
}, (req, res) => {
    console.log("Second handler".bgGreen.black);
    res.send("<h2>Second handler</h2>");
});

// chaining route handlers
const one = (req, res, next)=> {
    console.log("One".bgRed.black);
    next();
}

const two = (req, res, next)=> {
    console.log("Two".bgCyan.black);
    next();
}

const three = (req, res, next)=> {
    console.log("Three".bgGreen.black);
    res.send("Finished");
}

app.get('/chain(.html)?', [one, two, three]);

app.get('/*', (req, res) => {
    console.log("[GET] 404 Not Found".bgRed.white);
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`.red)
});