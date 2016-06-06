// Required scripts
var dataFormatter = require('../dataFormatter.js');
var areaCalc = require('../circle.geo.js');

// Variables
var selector,
    svg, // SVG tag
    width, // vis width
    height = 900, //vis height
    padding = 100,
    offset = 150,
    maxRadius = 10,
    view, // current view (process, group, chart, network)
    data, // variable holding all vis data
    processes,
    processAnnotations, // div process annotations
    links,
    fill = d3.scale.ordinal().domain(['up', 'none', 'down']).range(['#3498db', '#BECCAE', '#e74c3c']),
    stroke = d3.scale.ordinal().domain(['up', 'none', 'down']).range(['#2171b5', '#A7BB8F', '#C72D0A']),
    highlightColor = '#FFFBCC',
    mutationColor = '#2c3e50',
    templates = require('../templates.js'),
    annTemplate = templates.annotation; // Annotations template

// Calculate radius for all genes
function setRadius(){
    
    var absLog2 = d3.extent( data.nodes, function(d) {
            return Math.abs(d.Log2FoldChange);
        }),
        radiusScale = areaCalc.areaScale(absLog2, [0.5, maxRadius]);
    
    _.each(data.nodes, function(d){
        d.radius = radiusScale(Math.abs(d.Log2FoldChange));
    });
}

function initVis(){
    
    svg = d3.select(selector)
        .append('svg')
        .attr('class', 'canvas')
        .attr('width', width)
        .attr('id', 'svg_vis');
    
    var pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { return d.Log2FoldChange; });
    
    var arc = d3.svg.arc();
    
    // Process Group
    var g = svg.append('g');
    
    processes = g.selectAll('g').data(data.processes, function(d){ return d.id; });
    
    
    // Find element size and positions
    var nodePack = d3.layout.pack()
        .size([width, height])
        .sort(function(a, b) {
            return -(a.regulated/a.genes.length - b.regulated/b.genes.length);
        })
        //.children(function(d) { return d.genes;})
        .value(function(d){return Math.abs(d.Log2FoldChange);})
        .padding(padding)
        .nodes({ children: data.processes }, padding);
    
    processes.enter().append('g')
        .attr('id', function(d) { return  d.id; })
        .attr('class', 'process')
        .attr('opacity', 1)
        .attr('transform', function(d){ return 'translate(' + d.x + ',' + d.y + ')'; });
    
    
    processes.each(addElements);
    
    // Create process Annotations
    var ann_scale = d3.scale.log().domain(d3.extent(data.processes, function(d){ return d.r; })).range([10,16]);
    
    var div = d3.select(selector)
        .append('div')
        .attr('class', 'node-label-container');
    
    processAnnotations = div.selectAll('div').data(data.processes);
    
    processAnnotations.enter().append('div')
        .html(annTemplate)
        .attr('style', function(d){
            return 'position:absolute; font-size:' + ann_scale(d.r) + 'px; left:' + d.x + 'px; top:' + (d.y + d.r) + 'px'; 
        })
        .on('mouseover', function(d){
            //if(_clickEvent.holdClick) return;
            d3.select(this).select('span').transition(2000).style('opacity', 1);
        })
        .on('mouseout', function(d){ 
            d3.select(this).select('span').transition(2000).style('opacity', 0);
        })
        .on('click', function(d){
        
        });
    
    function addElements(p){
        
        var g = d3.select(this),
            r = p.r * 0.7,
            arr = [ 
                { stroke: stroke('up'), color: fill('up'), Log2FoldChange: p.up.length}, 
                { stroke: stroke('none'), color: fill('none'), Log2FoldChange: p.none.length }, 
                { stroke: stroke('down'), color: fill('down'), Log2FoldChange: p.down.length }
            ];
        
        arc.innerRadius(r)
            .outerRadius(p.r);
        
        // Add background circle circle to hide links and listen for events
        g.selectAll('circle').data([p])
            .enter().append('circle')
            .attr('fill', '#ffffff')
            .attr('id', function(d) { return 'circle_' + d.id; })
            .attr('r', p.r)
            .attr('stroke-width', 2)
            .attr('stroke', function(d){ 
                var p = _.pluck(d.genes, 'Variant_sites');
                return (p.join('').length > 0) ? mutationColor : null;
            });
        
        // Create ring
        g.selectAll('path').data(pie(arr))
            .enter().append('path')
            .attr('fill', function(d) { return d.data.color; })
            .attr('d', arc)
            .style('pointer-events', 'none'); // only the backgound circle listens to events
        
        //Init genes
        packGenes(p);
        
        var geneGroup = g.append('g');
        var genes = g.selectAll('circle').data(p.genes, function(d){ return d.id; });
    
        genes.enter().append('circle')
            .attr('id', function(d) { return  d.id; })
            .attr('r', function(d){ return d.r; })
            .attr('fill', function(d){ return fill('up'); })
            .attr('cx', function(d){ return d.x; })
            .attr('cy', function(d){ return d.y; })
            .attr('stroke-width', function(d){ return (d.mutation.length) ? 1.2 : 1; })
            .attr('stroke', function(d){ return (d.mutation.length) ? mutationColor : stroke('up');})
            .attr('class', function(d){ return d.parent.id; });
    }
    
    function packGenes(p){
        // Node Pack Layout positions
        var nodePack = d3.layout.pack()
            .sort(function(a, b) {
                return -(a.Log2FoldChange - b.Log2FoldChange);
            })
            //.radius(function(d){ return d.r;})
            .children(function(d) { return d.genes;})
            .value(function(d){return Math.abs(d.Log2FoldChange);})
            .padding(1)
            .nodes(p);
    }
}




//Public members
var Vis = function(){};

Vis.selector = function(_){
    if (!arguments.length)
        return selector;
    selector = _;
    return Vis;
};

Vis.width = function(_){
    if (!arguments.length)
        return width;
    width = _;
    return Vis;
};

Vis.search = function(str){ 
    //_search(str);
    return Vis;
};

Vis.displayNetwork = function(){
    view = 'network';
};

Vis.init = function(nodes, links){
    data = dataFormatter(nodes, links);
    initVis();
};

module.exports = Vis;