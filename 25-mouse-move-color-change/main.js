const rect = document.querySelector('#center');

rect.addEventListener('mousemove', function(details) {
    let reactangleLocation = rect.getBoundingClientRect()
    let  insideRectVal =  details.clientX - reactangleLocation.left

    if(insideRectVal < reactangleLocation.width/2){

      let redColor = gsap.utils.mapRange(0, reactangleLocation.width/2, 255, 0, insideRectVal);

      gsap.to(rect, {
        backgroundColor: `rgb(${redColor}, 0, 0)`,
        ease: "power4.out"
      })
    }
    else{
        let blueColor = gsap.utils.mapRange(reactangleLocation.width/2, reactangleLocation.width, 0, 255, insideRectVal); 

        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: "power4.out"
          })
    }

})

rect.addEventListener('mouseleave', () => {
    gsap.to(rect, {
        backgroundColor: 'white'
    })
})


