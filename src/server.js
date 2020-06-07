// consts
const express = require("express")
const server = express()
const nunjucks = require("nunjucks")
const db = require("./database/db")

// nunjucks
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// import styles
server.use(express.static("public"))

// enable req.body
server.use(express.urlencoded({extended: true}))

// routes
server.get("/", (req, res) => {
    return res.render("index.html", {title: "Um título"})
})


server.get("/create-point", (req, res) => {
    console.log(req.query)
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    // console.log(req.body)

    // insert datas in database
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items

    ]

    function afterInsertData(err) {
        if(err) {
             console.log(err)
             return res.send("Não foi possível concluir o cadastro!")
        }

        console.log("Cadastrado com sucesso!")
        console.log(this)
        return res.render("create-point.html", {saved: true})
    }

    db.run(query, values, afterInsertData)

})

server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == "") {
        return res.render("search-results.html", {total: 0})
    }



    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
       if(err) {
           return console.log(err)
        }

        const total = rows.length

       // show the page html with the datas of the database
       return res.render("search-results.html", { places: rows, total: total})
   })

})


// port
server.listen(3333, () => {
     console.log("Servidor rodando!")
})