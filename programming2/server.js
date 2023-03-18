var express = require("express");
var app = express();

app.use(express.static("your_project_folder_name"));

app.get("/", function(req, res){
    res.redirect("index.html");
});

app.listen(3000, function(){
    console.log("Example is running on port 3000");
});class LivingCreature{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
