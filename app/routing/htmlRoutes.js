/**
 * 
 * 
 *      htmlRoutes.js
 * 
 * 
 */


module.exports = function (_app, _path) {
    _app.get("/", function (_req, _res) {
        _res.sendFile(_path.join(__dirname, "../public/home.html"));
    });

    _app.get("/survey", function (_req, _res) {
    
        _res.sendFile(_path.join(__dirname, "../public/survey.html"));
    });
}

