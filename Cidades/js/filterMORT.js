
function changeColorMORT(svg,map,value){

  svg.selectAll("path").style("fill", function(d) {

    switch (value) {

      case "0-20":
        if(map.get(d.properties.name) < 20){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "20-40":
        if((map.get(d.properties.name) > 20) && (map.get(d.properties.name) < 40)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "40-60":
        if((map.get(d.properties.name) > 40) && (map.get(d.properties.name) < 60)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;

      case "60-80":
        if((map.get(d.properties.name) > 60) && (map.get(d.properties.name) < 80)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;

        case "80-100":
        if((map.get(d.properties.name) > 80) && (map.get(d.properties.name) < 100)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;

      case ">100":
        if(map.get(d.properties.name) > 100){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
    };
  });

  return svg;
}