(function (data) {
    var seedData = require("./seedData");
    data.getCategoriesNotes = function (next)
    {
        next(null, seedData.initialNotes);
    }
})(module.exports);