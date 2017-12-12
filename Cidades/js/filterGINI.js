
function changeColorGINI(svg,map,value){

  svg.selectAll("path").style("fill", function(d) {

    switch (value) {
      case "Muito Alto":
        if(map.get(d.properties.name) < 0.25){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "Alto":
        if((map.get(d.properties.name) > 0.25) && (map.get(d.properties.name) < 0.50)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "Medio":
        if((map.get(d.properties.name) > 0.50) && (map.get(d.properties.name) < 0.75)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "Baixo":
        if(map.get(d.properties.name) > 0.75){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
    };
  });

  return svg;
}