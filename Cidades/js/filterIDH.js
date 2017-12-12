
function changeColorIDH(svg,map,value){

  svg.selectAll("path").style("fill", function(d) {

    switch (value) {
      case "Muito Alto":
        if(map.get(d.properties.name) > 0.8){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "Alto":
        if((map.get(d.properties.name) > 0.7) && (map.get(d.properties.name) < 0.8)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "Medio":
        if((map.get(d.properties.name) > 0.6) && (map.get(d.properties.name) < 0.7)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "Baixo":
        if((map.get(d.properties.name) > 0.5) && (map.get(d.properties.name) < 0.6)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "Muito Baixo":
        if(map.get(d.properties.name) < 0.5){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
    };
  });

  return svg;
}