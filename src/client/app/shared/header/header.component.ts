import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

/**
 * This class represents the navigation bar component.
 */
@Component({
    moduleId: module.id,
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {

    ngOnInit() {
        $(".headroom").headroom({
            "tolerance": 20,
            "offset": 50,
            "classes": {
                "initial": "animated",
                "pinned": "slideDown",
                "unpinned": "slideUp"
            }
        });
    }
}
