function addLegend(svg,label,textColorD,colorScale){

    

    var legend = svg.selectAll("g.legend")
      .data(textColorD)
      .enter().append("g")
      .attr("class", "legend");

      var ls_w = 20, ls_h = 20;

      legend.append("rect")
      .attr("x", 20)
      .attr("y", function(d, i){ return height - (i*ls_h) - 2*ls_h;})
      .attr("width", ls_w)
      .attr("height", ls_h)
      .style("fill", function(d, i) { return colorScale(d); })
      .style("opacity", 0.8);

      legend.append("text")
      .attr("x", 50)
      .attr("y", function(d, i){ return height - (i*ls_h) - ls_h - 4;})
      .text(function(d, i){ return label[i]; });


	return svg;
}