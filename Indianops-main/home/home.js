$('.hamburger').click(function(){
    $('.page-wrapper').toggleClass('menu-active');
  });
  var data = [
    { x: 40, y: 100 },
    { x: 400, y: 50 },
    { x: 100, y: 200},
    { x: 400, y: 50 }
  ];
  
  function draw(data) {
    var canvas = d3.select("#canvas");
    //Define size and padding
    var margin = {top: 45, right: 150, bottom: 45, left: 150},
        width = parseInt(canvas.style("width")),
        height = parseInt(canvas.style("height"));
    
    var svg = canvas.append("svg")
        .attr("width", width-10)
        .attr("height", height-10)
    
  
    var tickPadding = 300;
    // Add the Y Axis
    var x = d3.scaleLinear()
      .range([margin.left, width-margin.right]),
        xT = Math.ceil(width/tickPadding);
        x.domain([0,500]);
    
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0,"+margin.top+")")
        .call(d3.axisBottom(x).ticks(xT).tickSizeInner(8));
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0,"+(height-margin.top)+")")
        .call(d3.axisTop(x).ticks(xT).tickSizeInner(8));
  
    // Add the Y Axis 
    var y = d3.scaleLinear()
      .range([margin.top, height-margin.top]),
        yT = height/tickPadding;
        y.domain([0,400]);
    
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate("+margin.left+",0)")
        .call(d3.axisRight(y).ticks(yT).tickSizeInner(8)); 
  
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate("+(width-margin.left)+",0)")
        .call(d3.axisLeft(y).ticks(yT).tickSizeInner(8));
  
    // Clean unused objects
    svg.selectAll(".tick text").remove();    
    svg.selectAll(".tick:first-of-type, .tick:last-of-type").remove();
  }
    // Fit to resized window
    function resize() {
      d3.selectAll("#canvas svg").remove();
      draw(data);
    } d3.select(window).on('resize', resize);
    //Init chart
    draw(data);
  
  
  // Animate logo
  animate("#logo",15000)
  
  // Animate intro text & "utforsk"-button
  function animateNext() {
    var elements = document.querySelectorAll('.flex-item:not(.show)');
    if (elements.length) {
      elements[0].classList.add('show');
        // Animate utforsk
        if (elements[0].id == "utforsk"){animate("#utforsk",7000)}
        else {setTimeout(animateNext,5000)};
    }
  } 
  
  // Animate paths
  function animate(id, dur){  
  var path = d3.select(id).selectAll("path, text");
    
  var totalLength = path.node().getTotalLength();
   
       path
        .attr("stroke-dasharray", totalLength + " " + totalLength) 
        .attr("stroke-dashoffset", totalLength)
        .transition()
          .duration(dur)
          .attr("stroke-dashoffset", 0);
          //.on("end", function(){setTimeout(animateNext,3)});
    
        setTimeout(animateNext,7000)
    }