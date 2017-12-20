
function changeColorPOP(svg,map,value){

  svg.selectAll("path").style("fill", function(d) {

    switch (value) {
      case "0-5":
        if(map.get(d.properties.name) < 5000){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "5-10":
        if((map.get(d.properties.name) > 5000) && (map.get(d.properties.name) <= 10000)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "10-20":
        if((map.get(d.properties.name) > 10000) && (map.get(d.properties.name) <= 20000)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "20-50":
        if((map.get(d.properties.name) > 20000) && (map.get(d.properties.name) <= 50000)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "50-100":
         if((map.get(d.properties.name) > 50000) && (map.get(d.properties.name) <= 100000)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "100-500":
        if((map.get(d.properties.name) > 100000) && (map.get(d.properties.name) <= 500000)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case "500-1":
        if((map.get(d.properties.name) > 500000) && (map.get(d.properties.name) <= 1000000)){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
      case ">1":
        if(map.get(d.properties.name) > 1000000){
          return d3.rgb("#00cc00");
        }
        return d3.rgb("#808080");
        break;
    };
  });

  return svg;
}

