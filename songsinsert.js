var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var music = [
    { SongName:"Thaniye thannanth thaniye", film:"Rytham",musicDirector:"A.R.Rahman",singer:"Sankarmahadevan"},
      { SongName:"Evano oruvan", film:"Alaipauthey",musicDirector:"A.R.Rahman",singer:"Swarnalatha"},
      { SongName:"Roja poonthoddam", film:"Kannukkul nilavu",musicDirector:"ilaiyaraja",singer:"Unnikirishnan,Anurathasriram"},
      { SongName:"Vennilave Vennilave", film:"Minsarakanavu",musicDirector:"A.R.Rahman",singer:"Harikaran,Sadhanasarkkam"},
      { SongName:"Sollamalthoddu sellum kannkal", film:"Dheena",musicDirector:"Yuvan Snkarraja",singer:"Harikaran"},

  ];
  dbo.collection("songdetails").insertMany(music, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
