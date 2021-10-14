import { setupWorker, SetupWorkerApi } from 'msw';

import { songsHandler } from './get_songs';

export const worker = (): SetupWorkerApi => setupWorker(...songsHandler);
