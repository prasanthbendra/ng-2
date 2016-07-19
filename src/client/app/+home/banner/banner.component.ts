import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

/**
 * This class represents the navigation bar component.
 */
@Component({
    moduleId: module.id,
    selector: 'banner',
    templateUrl: 'banner.component.html',
    styleUrls: ['banner.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class BannerComponent {}
