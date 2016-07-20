import { Injectable } from '@angular/core';

import { JOBS } from './mock.jobs';

@Injectable()
export class JobService{
    getJobs(){
        return Promise.resolve(JOBS);
    }
}
