import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { FaqService } from './faq.service';

/**
 * This class represents the navigation bar component.
 */
@Component({
    moduleId: module.id,
    selector: 'faq',
    templateUrl: 'faq.component.html',
    styleUrls: ['faq.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [FaqService]
})
export class FaqComponent implements OnInit {
    faqs: any;

    constructor(private faqService: FaqService) {}

    getFaqs(){
        this.faqService.getFaqs().then((faqs) => {
            this.faqs = faqs.data;
        });
    }

    ngOnInit() {
        this.getFaqs();
    }
}
