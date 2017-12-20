
function changeColorEDU(svg,map,value){

  svg.selectAll("path").style("fill", function(d) {

    switch (value) {
      case "0-2":
        if(map.get(d.properties.name) < 2.5){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "2-5":
        if((map.get(d.properties.name) > 2.5) && (map.get(d.properties.name) <= 5)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "5-7":
        if((map.get(d.properties.name) > 5) && (map.get(d.properties.name) <= 7.5)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "7-10":
        if((map.get(d.properties.name) > 7.5) && (map.get(d.properties.name) <= 10)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case ">10":
        if(map.get(d.properties.name) > 10){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
    };
  });

  return svg;
}

