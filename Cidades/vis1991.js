function mapBR1991(){
  
  var width = 350,
      height = 350;

  var rateByName = d3.map();

  var map;

  var quantize = d3.scale.linear().domain([0,0.5,0.6,0.7,0.8,1]).range(["red","yellow","green","blue"]);

  var projection = d3.geo.mercator()
      .center([-10,-30])
      .scale(375);

  var path = d3.geo.path()
      .projection(projection);

  var svg = d3.select("#map1991").append("svg")
      .attr("width", width)
      .attr("height", height);


  queue()
      .defer(d3.json, "mnmbr.json")
      .defer(d3.csv, "data/AtlasIDHM1991.csv", function(d) { rateByName.set(d.name, +d.IDHM1991); })
      .await(ready);
      

  function ready(error, br) {
    if (error) throw error;

    svg.append("g")
        .attr("class", "properties")
      .selectAll("path")
        .data(topojson.feature(br,br.objects.geojs100mun).features)
      .enter().append("path")
        .attr("fill", function(d) {
          return quantize(rateByName.get(d.properties.name));
        })
        .attr("d", path)
        .on("click", function(d){
            alert(d.properties.name+": "+rateByName.get(d.properties.name));
        })
        .on("mouseover", function(d){
          d3.select(this) // seleciona o elemento atual
          .style("cursor", "pointer") //muda o mouse para mãozinha
          .attr("stroke-width", 1)
          .attr("stroke","#000000");

          var coordinates = [0, 0];
          coordinates = d3.mouse(this); // obtém a posição do mouse relativa a this
          var x = coordinates[0] + 10;
          var y = coordinates[1] + 20; // descontando a posição do svg
          showTooltip(d.properties.name, x, y);
        })
        .on("mouseout", function(d){
          d3.select(this)
          .style("cursor", "default")
          .attr("stroke-width", 0)
          .attr("stroke","none"); //volta ao valor padrão
          hideTooltip();
        });

  
    svg.append("path")
        .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
        .attr("class", "states")
        .attr("d", path);
  }

  function showTooltip(county_id, x, y){
    d3.select("#tooltip")
    .style("left", x + "px")
    .style("top", y + "px")
    .select("#taxa")
    .text("rateById.get(county_id)+");

    d3.select("#tooltip")
    .style("left", x + "px")
    .style("top", y + "px")
    .select("#CondNametaxa")
    .text("nameId.get(county_id)");

    d3.select("#tooltip")
    .classed("hidden", false);
  }

  function hideTooltip(){
    d3.select("#tooltip")
    .classed("hidden", true);
  }

  return svg;
}