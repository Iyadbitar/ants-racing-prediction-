var worker;
export const START = 'START';
export const STAT_RESULT = 'STAT_RESULT';

export function statisticsWorker({ updateAntStatsAction }) {

  if (!worker) {
      worker = new Worker('worker.bundle.js');
      worker.postMessage('starting');
  }

  worker.addEventListener('message', (e) => {
    switch(e.data.type) {
      case STAT_RESULT:
        updateAntStatsAction(e.data.ant.id, { status: 'Done', result: e.data.likelihoodOfAntWinning });
        break;
    }
  });

  const start = (ants) => {
    const type = START;
    worker.postMessage({ants, type});
  }

  const terminate = () => {
    worker.terminate();
  }

  return {
    start,
    terminate
  }
}
