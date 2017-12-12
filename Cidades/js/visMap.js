function mapBR(svg,width,height,path,rateByName, t_top, t_lef, cores){
  
  var func;  
   
  func = function ready(error, br) {
    if (error) throw error;

    svg.append("g")
        .attr("class", "properties")
      .selectAll("path")
        .data(topojson.feature(br,br.objects.geojs100mun).features)
      .enter().append("path")
        .attr("fill", function(d) {
          if(cores == 1)
            return IDHquantize(rateByName.get(d.properties.name));
          if(cores == 2)
            return GINIquantize(rateByName.get(d.properties.name));
          if(cores == 3)
            return Rendaquantize(rateByName.get(d.properties.name));
          if(cores == 4)
            return EDUquantize(rateByName.get(d.properties.name));
          if(cores == 5)
            return ESPquantize(rateByName.get(d.properties.name));

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

          showTooltip(d.properties.name, t_lef, t_top);
        })
        .on("mouseout", function(d){
          d3.select(this)
          .style("cursor", "default")
          .attr("stroke-width", 0)
          .attr("stroke","none"); //volta ao valor padrão
          hideTooltip();
        });

        return svg;
  }

  function showTooltip(county_id, x, y){
    d3.select("#tooltip")
    .select("#taxa")
    .text(rateByName.get(county_id));
    d3.select("#tooltip")
    .style("left", x+"px")
    .style("top", y+"px")
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