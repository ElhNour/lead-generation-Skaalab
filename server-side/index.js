const express = require("express");
const db = require("./config/db");
const app = express();
const bodyParser = require('body-parser');

db.connect(function (err) {
   if (err) { throw err }
   else { console.log("connected!"); }

})
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With, Content-Type, Accept, Authorization");
   if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,PATCH,DELETE');
      return res.status(200).json({});
   }
   next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//"/api/AllStartups"
app.get("/api/all", (req, res) => {
  
   db.query(
      'select name,website from startup',
      function (err, result) {
         if (err) {
            console.log("error", err)
         } else {
            console.log('startups ', result)
            res.json(result);
         }
      }
   )
})
app.get("/api/startups", (req, res) => {
   var remote=''
   if (req.query.remote!=null) remote=req.query.remote
   var contrat=''
   if (req.query.contrat!=null) contrat=req.query.contrat
   var tech=''
   if (req.query.tech!=null) tech=req.query.tech
   source=req.query.source
   if (remote!=''){
     var q="select name,website from startup where idstartup in (select startupID from offre where contrat like '%"+contrat+"%' and (travail like '%"+remote+"%' or travail like '%Télétravail%') and (description like '%"+tech+"%' or skills like '%"+tech+"%')) and sourceID="+source;
   db.query(
      q,
      function (err, result) {
         if (err) {
            console.log("error", err)
         } else {
            console.log('startups ', result)
            res.json(result);
         }
      }
   ) 
   }else {
      var q="select name,website from startup where idstartup in (select startupID from offre where contrat like '%"+contrat+"%' and travail like '%"+remote+"%' and (description like '%"+tech+"%' or skills like '%"+tech+"%')) and sourceID="+source;
   db.query(
      q,
      function (err, result) {
         if (err) {
            console.log("error", err)
         } else {
            console.log('startups ', result)
            res.json(result);
         }
      }
   ) 
   }
   

})

//Alloffers/:
app.get("/api/:startupname/all", (req, res) => {

   var query="SELECT poste, salaire, travail, skills, contrat, diplome, experience, description FROM offre where startupID in (select idstartup from startup where name='"+req.params.startupname+"' and sourceID="+req.query.source;
   db.query(
      query, function (err, answer) {
         if (err) {
            console.log("error", err);

         } else {
            res.json(answer);
            console.log(answer)

         }
      }
   );

});

app.get("/api/:startupname/offers", (req, res) => {
   var remote=''
   if (req.query.remote!=null) remote=req.query.remote
   var contrat=''
   if (req.query.contrat!=null) contrat=req.query.contrat
   var tech=''
   if (req.query.tech!=null) tech=req.query.tech
   if (remote!=''){
      var q="SELECT poste, salaire, travail, skills, contrat, diplome, experience, description FROM offre where startupID in (select idstartup from startup where name='"+req.params.startupname+"') and contrat like '%"+contrat+"%' and (travail like '%"+remote+"%' or travail like '%Télétravail%') and (description like '%"+tech+"%' or skills like '%"+tech+"%')";
      db.query(
         q, function (err, answer) {
            if (err) {
               console.log("error", err);
   
            } else {
               res.json(answer);
               console.log(answer)
   
            }
         }
      );
   }else {
      var q="SELECT poste, salaire, travail, skills, contrat, diplome, experience, description FROM offre where startupID in (select idstartup from startup where name='"+req.params.startupname+"') and contrat like '%"+contrat+"%' and travail like '%"+remote+"%' and (description like '%"+tech+"%' or skills like '%"+tech+"%')";
      db.query(
      q, function (err, answer) {
         if (err) {
            console.log("error", err);

         } else {
            res.json(answer);
            console.log(answer)

         }
      }
   );
   }
   

});

app.listen(3003, () => {
   console.log('server running');
})