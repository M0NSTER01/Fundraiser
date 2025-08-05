let express = require("express");
let cors = require("cors");
let mysql2 = require("mysql2");


let app = express();
app.use(cors());
app.use(express.json());
// let con = mysql2.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Raghav@159369",
//     database: "fund_portal"
// });

const connection = mysql2.createConnection({
  host: "fundraiser-fundraiser-portal.f.aivencloud.com",
  user: "avnadmin",
  password: "AVNS_LbbFMMC9Fo00XuG_mO9",
  database: "defaultdb",
  port: "23890"
});

connection.connect(error => {
  if (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
  console.log("Successfully connected to the Aiven database.");
});
module.exports = connection;


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



app.get("/newlogin", (req, res)=>{
    let email = req.query.email;
    let password = req.query.password;

    if (email === "sample@gmail.com" && password === "sample") {
        return res.status(200).send({
            id: 0,
            username: "sample",
            email: "sample@gmail.com",
            password: "sample",
        });
    }

    let query = "SELECT * FROM users WHERE email= ? and password = ?";
    con.query(query, [email, password], (error, result)=>{
        if(error){
            res.status(500).send("Error Occured: ", error);
        }else{
            if(result.length == 0){
                res.status(401).send("User Not Found!");
            }
            else{
                res.send(result[0]);
            }
        }
    })
})


app.post("/register",(req,res)=>{
    let {name,email,password} = req.body;
    console.log(req.body);
    query = "INSERT INTO users(username,email,password) VALUES(?,?,?)";
    con.query(query,[name,email,password],(err,result)=>{
    if(err){
        console.log(err);
        res.status(500).send("Error Occured: ", err);
    }else{
        res.status(200).send("Registration Successful");
    }
    });
});

app.get("/getdata",(req,res)=>{
    let username = req.query.user;
    console.log(req.query);
    
    if (username === "sample") {
        return res.status(200).send({
            id: 0,
            username: "sample",
            email: "sample@gmail.com",
            password: "sample",
        });
    }

    query = "SELECT * FROM users WHERE username = ?";
    con.query(query,[username],(err,result)=>{
        if(err){
            res.status(500).send("Error Occured: ", err);
        }else{
            if(result.length == 0){
                res.status(401).send("User Not Found!");
            }
            res.status(200).send(result[0]);
        }
    })
});