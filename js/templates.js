var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["Templates"] = this["Templates"] || {};

this["Templates"]["result"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"list-group-item\"><span class=\"title\">"
    + alias4(((helper = (helper = helpers.gene || (depth0 != null ? depth0.gene : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gene","hash":{},"data":data}) : helper)))
    + "</span><br><span>"
    + alias4(((helper = (helper = helpers.process || (depth0 != null ? depth0.process : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"process","hash":{},"data":data}) : helper)))
    + "</span></li>";
},"useData":true});

this["Templates"]["tooltip"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-md-12 title\">"
    + alias4(((helper = (helper = helpers.gene || (depth0 != null ? depth0.gene : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gene","hash":{},"data":data}) : helper)))
    + "</div>\n\n<div class=\"col-md-12 process\">"
    + alias4(((helper = (helper = helpers.process || (depth0 != null ? depth0.process : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"process","hash":{},"data":data}) : helper)))
    + "</div>\n\n<div class=\"col-md-12 function\">"
    + alias4(((helper = (helper = helpers.gene_function || (depth0 != null ? depth0.gene_function : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gene_function","hash":{},"data":data}) : helper)))
    + "</div>\n\n<div class=\"col-md-12 miniTitle\" style=\"font-weight: 700;\">\n    Up-regulated sample:\n</div>\n<div class=\"col-md-9 miniTitle\">\n&emsp;No. of sample\n</div>\n                \n<div class=\"col-md-3\">"
    + alias4(((helper = (helper = helpers.upfreq || (depth0 != null ? depth0.upfreq : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upfreq","hash":{},"data":data}) : helper)))
    + "</div>\n\n<div class=\"col-md-9 miniTitle\">\n&emsp;Mean Log2 Fold Change\n</div>\n                \n<div class=\"col-md-3\">"
    + alias4(((helper = (helper = helpers.uplog2 || (depth0 != null ? depth0.uplog2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uplog2","hash":{},"data":data}) : helper)))
    + "</div>\n\n<div class=\"col-md-12 miniTitle\" style=\"font-weight: 700;\">\n    Down-regulated sample:\n</div>\n<div class=\"col-md-9 miniTitle\">\n&emsp;No. of sample\n</div>\n                \n<div class=\"col-md-3\">"
    + alias4(((helper = (helper = helpers.downfreq || (depth0 != null ? depth0.downfreq : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"downfreq","hash":{},"data":data}) : helper)))
    + "</div>\n\n<div class=\"col-md-9 miniTitle\">\n&emsp;Mean Log2 Fold Change \n</div>\n                \n<div class=\"col-md-3\">"
    + alias4(((helper = (helper = helpers.downlog2 || (depth0 != null ? depth0.downlog2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"downlog2","hash":{},"data":data}) : helper)))
    + "</div>\n<hr>\n<div class=\"col-md-9 miniTitle\" style=\"font-weight: 700;\">\n    No. of mutation data\n</div>\n                \n<div class=\"col-md-3\">"
    + alias4(((helper = (helper = helpers.mutation || (depth0 != null ? depth0.mutation : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mutation","hash":{},"data":data}) : helper)))
    + "</div>";
},"useData":true});

if (typeof exports === 'object' && exports) {module.exports = this["Templates"];}