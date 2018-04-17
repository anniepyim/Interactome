var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["Templates"] = this["Templates"] || {};

this["Templates"]["result"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"list-group-item\"><span class=\"title\">"
    + alias4(((helper = (helper = helpers.geneID || (depth0 != null ? depth0.geneID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"geneID","hash":{},"data":data}) : helper)))
    + "</span><br><span>"
    + alias4(((helper = (helper = helpers.process || (depth0 != null ? depth0.process : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"process","hash":{},"data":data}) : helper)))
    + "</span></li>";
},"useData":true});

this["Templates"]["tooltip"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"row infos\">\n<div class=\"col-md-5 miniTitle greyish\">\n    chr\n</div>                \n<div class=\"col-md-7 info\">"
    + container.escapeExpression(((helper = (helper = helpers.chr || (depth0 != null ? depth0.chr : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"chr","hash":{},"data":data}) : helper)))
    + "</div>\n</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"row infos\">\n<div class=\"col-md-5 miniTitle greyish\">\n    "
    + alias4(((helper = (helper = helpers.geneID_a1_name || (depth0 != null ? depth0.geneID_a1_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"geneID_a1_name","hash":{},"data":data}) : helper)))
    + "\n</div>                \n<div class=\"col-md-7 info\">"
    + alias4(((helper = (helper = helpers.geneID_a1 || (depth0 != null ? depth0.geneID_a1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"geneID_a1","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"row infos\">\n<div class=\"col-md-5 miniTitle greyish\">\n    "
    + alias4(((helper = (helper = helpers.geneID_a2_name || (depth0 != null ? depth0.geneID_a2_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"geneID_a2_name","hash":{},"data":data}) : helper)))
    + "\n</div>                \n<div class=\"col-md-7 info\">"
    + alias4(((helper = (helper = helpers.geneID_a2 || (depth0 != null ? depth0.geneID_a2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"geneID_a2","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"row infos\">\n\n<div class=\"col-md-5 miniTitle greyish\">\n    "
    + alias4(((helper = (helper = helpers.geneID_a3_name || (depth0 != null ? depth0.geneID_a3_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"geneID_a3_name","hash":{},"data":data}) : helper)))
    + "\n</div>                \n<div class=\"col-md-7 info\">"
    + alias4(((helper = (helper = helpers.geneID_a3 || (depth0 != null ? depth0.geneID_a3 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"geneID_a3","hash":{},"data":data}) : helper)))
    + "</div>\n</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-md-12 title\">"
    + alias4(((helper = (helper = helpers.geneID || (depth0 != null ? depth0.geneID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"geneID","hash":{},"data":data}) : helper)))
    + "</div>\n\n<div class=\"col-md-12 gene_name greyish\">("
    + alias4(((helper = (helper = helpers.gene_name || (depth0 != null ? depth0.gene_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gene_name","hash":{},"data":data}) : helper)))
    + ")</div>\n\n<div class=\"col-md-12 process\">"
    + alias4(((helper = (helper = helpers.process || (depth0 != null ? depth0.process : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"process","hash":{},"data":data}) : helper)))
    + "</div>\n\n<div class=\"col-md-12 function greyish\">"
    + alias4(((helper = (helper = helpers.gene_function || (depth0 != null ? depth0.gene_function : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gene_function","hash":{},"data":data}) : helper)))
    + "</div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.chr : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.geneID_a1 : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.geneID_a2 : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.geneID_a3 : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n<div class=\"col-md-12 miniTitle\" style=\"font-weight: 700;\">\n    Up-regulated sample:\n</div>\n<div class=\"col-md-9 miniTitle\">\n&emsp;No. of sample\n</div>\n                \n<div class=\"col-md-3\">"
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