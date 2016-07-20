import { Injectable } from '@angular/core';

import { FEATURES } from './mock.features';

@Injectable()
export class FeaturesService{
    getFeatures(){
        return Promise.resolve(FEATURES)
    }
}
