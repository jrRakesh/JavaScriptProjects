let rectangle = document.querySelector("#center");
rectangle.addEventListener("mousemove", function (details) {
  let rectangleLocation = rectangle.getBoundingClientRect();
  let insideRectangleValue = details.clientX - rectangleLocation.left;

  if (insideRectangleValue < rectangleLocation.width / 2) {
    let redColor = gsap.utils.mapRange(
      0,
      rectangleLocation.width / 2,
      255,
      0,
      insideRectangleValue
    );
    gsap.to(rectangle, { backgroundColor: `rgb(${redColor}, 0, 0)` });
  } else {
    let blueColor = gsap.utils.mapRange(
      rectangleLocation.width / 2,
      rectangleLocation.width,
      0,
      255,
      insideRectangleValue
    );
    gsap.to(rectangle, { backgroundColor: `rgb(0, 0, ${blueColor})` });
  }
});
rectangle.addEventListener("mouseleave", function () {
  gsap.to(rectangle, { backgroundColor: `rgba(255, 255, 255, 1)` });
});
