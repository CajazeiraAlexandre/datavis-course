
function changeColorESP(svg,map,value){

  svg.selectAll("path").style("fill", function(d) {

    switch (value) {

      case "40-60":
        if(map.get(d.properties.name) < 60){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "60-70":
        if((map.get(d.properties.name) > 60) && (map.get(d.properties.name) < 70)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "70-80":
        if((map.get(d.properties.name) > 70) && (map.get(d.properties.name) < 80)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case ">80":
        if(map.get(d.properties.name) > 80){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
    };
  });

  return svg;
}