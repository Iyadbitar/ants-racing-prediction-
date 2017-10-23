import { START, STAT_RESULT } from './services/statistics.service';

function generateAntWinLikelihoodCalculator() {
  var delay = 7000 + Math.random() * 7000;
  var likelihoodOfAntWinning = Math.random();

  return function(callback) {
    setTimeout(function() {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
}

const calculatorCallBack = (ant) => (likelihoodOfAntWinning) => {
  self.postMessage({ type: STAT_RESULT, ant, likelihoodOfAntWinning })
  // console.log(ant.name, likelihoodOfAntWinning);
}

self.addEventListener('message', function(e) {
  switch (e.data.type) {
    case START:
      e.data.ants.forEach(
        (ant) => {
          generateAntWinLikelihoodCalculator()(calculatorCallBack(ant));
        });
      break;
    default:
      return;
  };

});
