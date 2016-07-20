import { Component } from '@angular/core';

import { JobComponent } from './job/job.component';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.css'],
    directives: [JobComponent]
})
export class AboutComponent {}
