import { Component } from '@angular/core';

import { JobService } from './job.service'

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'job',
    templateUrl: 'job.component.html',
    styleUrls: ['job.component.css'],
    providers: [JobService]
})
export class JobComponent implements OnInit {
    jobs: any;

    constructor(private jobService: JobService){}

    getJobs(){
        this.jobService.getJobs().then((jobs) => {
            this.jobs = jobs.data;
        })
    }

    ngOnInit(){
        this.getJobs();
    }
}
