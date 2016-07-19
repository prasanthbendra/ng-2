import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

/**
 * This class represents the navigation bar component.
 */
@Component({
    moduleId: module.id,
    selector: 'faq',
    templateUrl: 'faq.component.html',
    styleUrls: ['faq.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class FaqComponent {}
