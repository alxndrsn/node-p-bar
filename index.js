module.exports = {
  init: function(target, message) {
    let runningTotal = 0;

    return {
      increment: (inc) => { runningTotal += inc; },
      print: () => {
        const percent = Math.floor(runningTotal * 100 / target);
        let bar = '', i;

        const barTotal = process.stdout.columns - message.length - 9;
        const pBarLen = i = Math.floor(runningTotal * barTotal / target);

        while(--i >= 0) bar += '█';

        i = barTotal - pBarLen;
        while(--i >= 0) bar += ' ';

        process.stdout.write(`\r${message}[${bar}] (${percent}%)`);
      },
      complete: () => runningTotal >= target,
    };
  },
};
