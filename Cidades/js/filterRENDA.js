
function changeColorRENDA(svg,map,value){

  svg.selectAll("path").style("fill", function(d) {

    switch (value) {
      case "Muito Baixa":
        if(map.get(d.properties.name) < 250){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "Baixa":
        if((map.get(d.properties.name) > 250) && (map.get(d.properties.name) <= 500)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "Media":
        if((map.get(d.properties.name) > 500) && (map.get(d.properties.name) <= 750)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "Alta":
        if((map.get(d.properties.name) > 750) && (map.get(d.properties.name) <= 1000)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "Muito Alta":
        if(map.get(d.properties.name) > 1000){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
    };
  });

  return svg;
}