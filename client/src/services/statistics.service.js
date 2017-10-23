var worker;
export const START = 'START';
export const STAT_RESULT = 'STAT_RESULT';

export function statisticsWorker() {
  if (!worker) {
      worker = new Worker('worker.bundle.js');
  }

  worker.postMessage('starting');

  worker.addEventListener('message', (e) => {
    switch(e.data.type) {
      case STAT_RESULT:
        console.log(e.data.ant.id, e.data.likelihoodOfAntWinning) 
        break;
    }
  });

  const start = (ants) => {
    const type = START;
    worker.postMessage({ants, type});
  }

  return {
    worker,
    start
  }
}
