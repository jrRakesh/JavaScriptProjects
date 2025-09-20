let rectangle = document.querySelector("#center");
rectangle.addEventListener("mousemove", function(details){
    let rectangleLocation = rectangle.getBoundingClientRect();
    let insideRectangleValue = details.clientX - rectangleLocation.left;

    if(insideRectangleValue < rectangleLocation.width/2){
        let redColor = gsap
    } else {
        console.log("right");
    }
})