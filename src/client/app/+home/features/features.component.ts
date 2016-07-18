import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'features',
  templateUrl: 'features.component.html',
  styleUrls: ['features.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class FeaturesComponent {}
