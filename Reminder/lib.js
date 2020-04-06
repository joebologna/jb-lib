function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var i = 0;
var txt = 'Please remember to cancel StitchFix.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('demo').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, getRandomInt(speed));
  }
}

function typeOne(speed, el, msgs, msg_id, i) {
  const dest = document.getElementById(el);
  const cur_msg_id = msg_id < msgs.length ? msg_id : 0;
  const msg = msgs[cur_msg_id];

  dest.innerHTML += msg.charAt(i);
  if (dest.innerHTML.length < msg.length) {
    setTimeout(typeOne, speed, speed, el, msgs, cur_msg_id, i + 1);
  } else {
    const new_speed = getRandomInt(100) * 20;
    setTimeout(() => {
      dest.innerHTML = '';
      showMsg(el, msgs, cur_msg_id + 1, speed);
    }, new_speed);
  }
}

function showMsg(el = 'demo', msgs = ['This is a message.', 'This is another message.'], msg_id = 0, speed = 50) {
  const dest = document.getElementById(el);
  if (dest.innerHTML.length === 0) {
    setTimeout(typeOne, speed, speed, el, msgs, msg_id, 0);
  }
}
