// JAVASCRIPT COMES HERE
// --------------------------------------------------------
// console.clear();

// var svg = document.querySelector("#svg");
// var reset = document.querySelector("#reset");
// var pivot = document.querySelector("#pivot");
// var proxy = document.createElement("div");
// var viewport = document.querySelector("#viewport");

// var rotateThreshold = 4;
// var reachedThreshold = false;

// var point = svg.createSVGPoint();
// var startClient = svg.createSVGPoint();
// var startGlobal = svg.createSVGPoint();

// var viewBox = svg.viewBox.baseVal;

// var cachedViewBox = {
//   x: viewBox.x,
//   y: viewBox.y,
//   width: viewBox.width,
//   height: viewBox.height
// };

// var zoom = {
//   animation: new TimelineLite(),
//   scaleFactor: 1.6,
//   duration: 0.5,
//   ease: Power2.easeOut,
// };

// TweenLite.set(pivot, { scale: 0 });

// var resetAnimation = new TimelineLite();
// var pivotAnimation = TweenLite.to(pivot, 0.1, {
//   alpha: 1,
//   scale: 1,
//   paused: true,
// });

// var pannable = new Draggable(proxy, {
//   throwResistance: 3000,
//   trigger: svg,
//   throwProps: true,
//   onPress: selectDraggable,
//   onDrag: updateViewBox,
//   onThrowUpdate: updateViewBox,
// });

// var rotatable = new Draggable(viewport, {
//   type: "rotation",
//   trigger: svg,
//   throwProps: true,
//   liveSnap: true,
//   snap: checkThreshold,
//   onPress: selectDraggable,
// });

// rotatable.disable();

// reset.addEventListener("click", resetViewport);
// window.addEventListener("wheel", onWheel);
// window.addEventListener("resize", function() {
//   pivotAnimation.reverse();
// });

// window.addEventListener("contextmenu", function(event) {
//   event.preventDefault();
// 	event.stopPropagation();
//   return false;
// });

//
// ON WHEEL
// =========================================================================== 
// function onWheel(event) {
//   event.preventDefault();
  
//   pivotAnimation.reverse();
  
//   var normalized;  
//   var delta = event.wheelDelta;

//   if (delta) {
//     normalized = (delta % 120) == 0 ? delta / 120 : delta / 12;
//   } else {
//     delta = event.deltaY || event.detail || 0;
//     normalized = -(delta % 3 ? delta * 10 : delta / 3);
//   }
  
//   var scaleDelta = normalized > 0 ? 1 / zoom.scaleFactor : zoom.scaleFactor;
  
//   point.x = event.clientX;
//   point.y = event.clientY;
  
//   var startPoint = point.matrixTransform(svg.getScreenCTM().inverse());
    
//   var fromVars = {
//     ease: zoom.ease,
//     x: viewBox.x,
//     y: viewBox.y,
//     width: viewBox.width,
//     height: viewBox.height,
//   };
  
//   viewBox.x -= (startPoint.x - viewBox.x) * (scaleDelta - 1);
//   viewBox.y -= (startPoint.y - viewBox.y) * (scaleDelta - 1);
//   viewBox.width *= scaleDelta;
//   viewBox.height *= scaleDelta;
    
//   zoom.animation = TweenLite.from(viewBox, zoom.duration, fromVars);  
// }

// //
// // SELECT DRAGGABLE
// // =========================================================================== 
// function selectDraggable(event) {
   
//   if (resetAnimation.isActive()) {
//     resetAnimation.kill();
//   }
    
//   startClient.x = this.pointerX;
//   startClient.y = this.pointerY;
//   startGlobal = startClient.matrixTransform(svg.getScreenCTM().inverse());
  
//   // Right mouse button
//   if (event.button === 2) {
    
//     reachedThreshold = false;
    
//     TweenLite.set(viewport, { 
//       svgOrigin: startGlobal.x + " " + startGlobal.y
//     });
    
//     TweenLite.set(pivot, { 
//       x: this.pointerX, 
//       y: this.pointerY
//     });
       
//     pannable.disable();
//     rotatable.enable().update().startDrag(event);
//     pivotAnimation.play(0);
    
//   } else {
    
//     TweenLite.set(proxy, { 
//       x: this.pointerX, 
//       y: this.pointerY
//     });
    
//     rotatable.disable();
//     pannable.enable().update().startDrag(event);
//     pivotAnimation.reverse();
//   }
// }

// //
// // RESET VIEWPORT
// // =========================================================================== 
// function resetViewport() {
    
//   var duration = 0.8;
//   var ease = Power3.easeOut;
  
//   pivotAnimation.reverse();
  
//   if (pannable.tween) {
//     pannable.tween.kill();
//   }
  
//   if (rotatable.tween) {
//     rotatable.tween.kill();
//   }
    
//   resetAnimation.clear()
//     .to(viewBox, duration, {
//       x: cachedViewBox.x,
//       y: cachedViewBox.y,
//       width: cachedViewBox.width,
//       height: cachedViewBox.height,
//       ease: ease
//     }, 0)
//     .to(viewport, duration, {
//       attr: { transform: "matrix(1,0,0,1,0,0)" },
//       // rotation: "0_short",
//       smoothOrigin: false,
//       svgOrigin: "0 0",
//       ease: ease
//     }, 0)
// }

// //
// // CHECK THRESHOLD
// // =========================================================================== 
// function checkThreshold(value) {
  
//   if (reachedThreshold) {
//     return value;
//   }
  
//   var dx = Math.abs(this.pointerX - startClient.x);
//   var dy = Math.abs(this.pointerY - startClient.y);
  
//   if (dx > rotateThreshold || dy > rotateThreshold || this.isThrowing) {
//     reachedThreshold = true;
//     return value;
//   }
    
//   return this.rotation;
// }

// //
// // UPDATE VIEWBOX
// // =========================================================================== 
// function updateViewBox() {
  
//   if (zoom.animation.isActive()) {
//     return;
//   }
  
//   point.x = this.x;
//   point.y = this.y;
  
//   var moveGlobal = point.matrixTransform(svg.getScreenCTM().inverse());
    
//   viewBox.x -= (moveGlobal.x - startGlobal.x);
//   viewBox.y -= (moveGlobal.y - startGlobal.y); 
// }




gsap.from("#lola", {
  scale: 5,
  duration: 1,
  scrollTrigger: {
      trigger: "#lola",
      start: "viewport", 
    //   markers: true,
      toggleActions: "play pause resume  reset "
  }
});

gsap.from("#section1", {
    y: 200,
    duration: 1,
    scrollTrigger: {
        trigger: "#section1",
        start: "top 10%",
        // markers: true,
        toggleActions: "play pause resume reset"
    }
});

gsap.from("#section2", {
    x: 1500,
    duration: 1,
    scrollTrigger: {
        trigger: "#section2",
        start: "top top",
        // markers: true,
        toggleActions: "play pause resume reset"
    }
});

// gsap.from("#section2", {
//     x: -100,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#section2",
//         start: "bottom bottom",
//         // markers: true,
//         toggleActions: "play pause resume reset"
//     }
// });

gsap.from("#section3", {
    x: 1500,
    duration: 1,
    scrollTrigger: {
        trigger: "#section3",
        start: "top top",
        // markers: true,
        toggleActions: "play pause resume reset"
    }
});