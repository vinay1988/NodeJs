(function (homeController) {
    var data = require("../data");
    homeController.init = function (app) {
        app.get("/", function (req, res) {
            // res.send("<html><body><h1>EXpress</h1></body></html>");
            data.getCategoriesNotes(function (err, results) {
                res.render("index", { title: "Express + Vash", error: err, categories: results });
            });
        });

    };
   
})(module.exports);