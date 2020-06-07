// import the dependence of sqlite3
const sqlite3 = require("sqlite3").verbose()

// create the object of database
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// use the object of database for our operations
db.serialize(() => {
//     // create a table
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

//     // insert datas in the table
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (
//             ?, ?, ?, ?, ?, ?, ?
//         );
//     `

//     const values = [
//         "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1174&q=80",
//         "Colectoria",
//         "Guilherme Gemballa, Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]

//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso!")
//         console.log(this)
//     }

//     // db.run(query, values, afterInsertData)

//     // see the datas of the table
//         // db.all(`SELECT * FROM places`, function(err, rows){
//         //     if(err) {
//         //         return console.log(err)
//         //     }

//         //     console.log("Aqui estão seus registros: ")
//         //     console.log(rows)
//         // })

//     // delete a data of the table
        // db.run(`DELETE FROM places WHERE id = ?`, [2], function(err) {
        //     if(err) {
        //         return console.log(err)
        //     }

        //     console.log("Registro deletado com sucesso!")
        // })

})
