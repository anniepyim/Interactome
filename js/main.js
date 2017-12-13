var d3 = require('d3');

//Public members
var App = {};

var this_js_script = $('script[src*=AppInteractome]');
    var host = this_js_script.attr('host'),
        port = this_js_script.attr('port'),
        user = this_js_script.attr('user'),
        passwd = this_js_script.attr('passwd'),
        unix_socket = this_js_script.attr('unix_socket');
//end

App.init = function(organism){ 
    
    
    //Views
    var Main = require('./views/main');
    //var NavBar = require('./views/navBar');
    
    App.views = {};
    App.views.vis = require('./views/process.vis.js');
    
    App.views.main = new Main();
    App.views.main.setElement('body').render();
    
    //App.views.navBar = new NavBar();
    //App.views.navBar.setElement('#navbar').render();
    
    App.views.vis.selector('#vis');
    
    
    var myNode = document.getElementById("vis");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    document.getElementById("loadingvis").style.display = "";
    
    parameter = 'organism='+ organism + '&host='+host + '&port='+port + '&user='+user + '&passwd='+passwd + '&unix_socket='+unix_socket;
    
    jQuery.ajax({
        url: "./python/interactome.py", 
        data: parameter,
        type: "POST",
        //dataType: "json",    
        success: function (json) {
            document.getElementById("loadingvis").style.display = "none";
            nodes = JSON.parse(json[0]["nodes"])
            links = JSON.parse(json[0]["links"])
            App.views.vis.init(nodes, links);
        },
        error: function(e){
            console.log(e);
        }
    });

};

module.exports = App;