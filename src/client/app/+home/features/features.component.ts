import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { FeaturesService } from './features.services';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'features',
  templateUrl: 'features.component.html',
  styleUrls: ['features.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [FeaturesService]
})
export class FeaturesComponent implements OnInit {
    features: any;

    constructor(private featuresService: FeaturesService){}

    getFeatures(){
        this.featuresService.getFeatures().then((features) => {
            this.features = features.data;
        });
    }

    ngOnInit(){
        this.getFeatures();
    }
}
