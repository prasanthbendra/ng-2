import { Injectable } from '@angular/core';

import { FAQS } from './mock.faqs';

@Injectable()
export class FaqService{
    getFaqs(){
        return Promise.resolve(FAQS);
    }
}
