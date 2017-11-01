const progressBar = require('./index');

const INCREMENT = 1;
const TOTAL = 3;

const pb = progressBar.init(TOTAL, 'Progress: ');
pb.print();

scheduleUpdate();

function scheduleUpdate() {
  setTimeout(updateProgress, 1000);
}

function updateProgress() {
  pb.increment(INCREMENT);
  pb.print();

  if(!pb.complete()) scheduleUpdate();
  else console.log('\nComplete!');
}
