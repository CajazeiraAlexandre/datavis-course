function mapBR2000(svg,width,height,path,rateByName){    

  var func;

  func = function ready(error, br) {
    if (error) throw error;

    svg.append("g")
        .attr("class", "properties")
      .selectAll("path")
        .data(topojson.feature(br,br.objects.geojs100mun).features)
      .enter().append("path")
        .attr("fill", function(d) {
          return IDHquantize(rateByName.get(d.properties.name));
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

         //var coordinates = [0, 0];
          //coordinates = d3.mouse(this); // obtém a posição do mouse relativa a this
          //var x = coordinates[0] + 10;
          //var y = coordinates[1] + 20; // descontando a posição do svg
          showTooltip(d.properties.name);
        })
        .on("mouseout", function(d){
          d3.select(this)
          .style("cursor", "default")
          .attr("stroke-width", 0)
          .attr("stroke","none"); //volta ao valor padrão
          hideTooltip();
        });

  /*
    svg.append("path")
        .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
        .attr("class", "states")
        .attr("d", path);*/

        return svg;
  }

  function showTooltip(county_id){
    d3.select("#tooltip")
    .select("#taxa")
    .text(rateByName.get(county_id));

     d3.select("#tooltip")
    .style("left", "700px")
    .style("top", "150px")
    .select("#CondNametaxa")
    .text(county_id);


    d3.select("#tooltip")
    .classed("hidden", false);
  }

  function hideTooltip(){
    d3.select("#tooltip")
    .classed("hidden", true);
  }

  return func;
}