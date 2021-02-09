paths(4);
circles(4);

function paths(nb) {
  movePath('whitePath' + nb, 0);
  movePath('bluePath' + nb, 0.1);
  movePath('greenPath' + nb, 0.2);
  movePath('redPath' + nb, 0.3);
}
function movePath(id, delay) {
  const ease = [Power3.easeIn, Power3.easeOut];
  var tl = new TimelineLite({
    paused: false,
    onComplete: function() {
      this.restart();
    }
  });
  const path = document.getElementById(id);
  tl.add(
    TweenLite.set(path, {
      strokeDashoffset: '0',
      strokeDasharray: '1,800'
    })
  );
  tl.add(
    TweenLite.to(path, delay, {
      strokeDashoffset: '0',
      strokeDasharray: '1,800'
    })
  );
  tl.add(
    TweenLite.to(path, 1, {
      strokeDashoffset: '-250',
      strokeDasharray: '200,800',
      ease: ease[0]
    })
  );
  tl.add(
    TweenLite.to(path, 1 - delay, {
      strokeDashoffset: '-580',
      strokeDasharray: '1,800',
      ease: ease[1]
    })
  );
  tl.add(
    TweenLite.to(path, 1 + delay, {
      strokeDashoffset: '-250',
      strokeDasharray: '100,800',
      ease: ease[0]
    })
  );
  tl.add(
    TweenLite.to(path, 1 - delay, {
      strokeDashoffset: '-0',
      strokeDasharray: '1,800',
      ease: ease[1]
    })
  );
}


function circles(nb) {
  moveCircle1('circle1' + nb);
  moveCircle2('circle2' + nb);
}

function moveCircle1(id) {
  var tl = new TimelineLite({
    paused: false,
    onComplete: function() {
      this.restart();
    }
  });
  const circle1 = document.getElementById(id);
  tl.add(
    TweenLite.set(circle1, {
      transform: 'scale(0.5) translate(0px, 0px)',
      opacity: 0
    })
  );
  tl.add(
    TweenLite.to(circle1, 0.85, {
      transform: 'scale(1) translate(0px, 0px)',
      opacity: 0
    })
  );
  tl.add(
    TweenLite.to(circle1, 0.05, {
      //BOOM
      transform: 'scale(1.4) translate(-14px, -20px)',
      opacity: 1,
      animation: 'colorSwitch 2s'
    })
  );
  tl.add(
    TweenLite.to(circle1, 1.1, {
      transform: 'scale(1.6) translate(-16px, -25px)',
      opacity: 0
    })
  );
  tl.add(
    TweenLite.to(circle1, 1.1, {
      transform: 'scale(1)',
      opacity: 0
    })
  );
  tl.add(
    TweenLite.to(circle1, 0.1, {
      //BOOM
      transform: 'scale(1.4) translate(-14px, -20px)',
      opacity: 1,
      animation: 'colorSwitch 1.2s'
    })
  );
  tl.add(
    TweenLite.to(circle1, 0.8, {
      transform: 'scale(1.6) translate(-16px, -20px)',
      opacity: 0
    })
  );
}
function moveCircle2(id) {
  var tl = new TimelineLite({
    paused: false,
    onComplete: function() {
      this.restart();
    }
  });
  const circle1 = document.getElementById(id);
  tl.add(
    TweenLite.set(circle1, {
      transform: 'scale(0) translate(150px, 150px)',
      opacity: 0
    })
  );
  tl.add(
    TweenLite.to(circle1, 1.1, {
      transform: 'scale(0.5) translate(20px, 20px)',
      opacity: 0
    })
  );
  tl.add(
    TweenLite.to(circle1, 0.1, {
      //BOOM
      transform: 'scale(1.4) translate(-10px, -10px)',
      opacity: 1,
      animation: 'colorSwitch 2s'
    })
  );
  tl.add(
    TweenLite.to(circle1, 0.8, {
      transform: 'scale(1.6) translate(-10px, -10px)',
      opacity: 0
    })
  );
  tl.add(
    TweenLite.to(circle1, 0.8, {
      transform: 'scale(0.5) translate(20px, 20px)',
      opacity: 0
    })
  );
  tl.add(
    TweenLite.to(circle1, 0.1, {
      //BOOM
      transform: 'scale(1.4) translate(-10px, -10px)',
      opacity: 1,
      animation: 'colorSwitch 1.2s'
    })
  );
  tl.add(
    TweenLite.to(circle1, 1.1, {
      transform: 'scale(1.6) translate(-10px, -10px)',
      opacity: 0
    })
  );
}