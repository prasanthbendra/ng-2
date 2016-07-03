"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/from');
require('rxjs/add/operator/map');
require('rxjs/add/operator/publishReplay');
var NameListService = (function () {
    function NameListService(http) {
        this.http = http;
        this.names = [];
    }
    NameListService.prototype.get = function () {
        var _this = this;
        if (this.names && this.names.length) {
            return Observable_1.Observable.from([this.names]);
        }
        if (!this.request) {
            this.request = this.http.get('/assets/data.json')
                .map(function (response) { return response.json(); })
                .map(function (data) {
                _this.request = null;
                return _this.names = data;
            }).publishReplay(1).refCount();
        }
        return this.request;
    };
    NameListService.prototype.add = function (value) {
        this.names.push(value);
    };
    NameListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NameListService);
    return NameListService;
}());
exports.NameListService = NameListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLFFBQU8sMEJBQTBCLENBQUMsQ0FBQTtBQUNsQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsUUFBTyxpQ0FBaUMsQ0FBQyxDQUFBO0FBTXpDO0lBbUJFLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQWI5QixVQUFLLEdBQWEsRUFBRSxDQUFDO0lBYVksQ0FBQztJQU9sQyw2QkFBRyxHQUFIO1FBQUEsaUJBYUM7UUFaQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO2lCQUM5QyxHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQztpQkFDNUMsR0FBRyxDQUFDLFVBQUMsSUFBYztnQkFDbEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFNRCw2QkFBRyxHQUFILFVBQUksS0FBYTtRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFoREg7UUFBQyxpQkFBVSxFQUFFOzt1QkFBQTtJQWlEYixzQkFBQztBQUFELENBaERBLEFBZ0RDLElBQUE7QUFoRFksdUJBQWUsa0JBZ0QzQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb20nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvcHVibGlzaFJlcGxheSc7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBwcm92aWRlcyB0aGUgTmFtZUxpc3Qgc2VydmljZSB3aXRoIG1ldGhvZHMgdG8gcmVhZCBuYW1lcyBhbmQgYWRkIG5hbWVzLlxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmFtZUxpc3RTZXJ2aWNlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGFycmF5IG9mIGluaXRpYWwgbmFtZXMgcHJvdmlkZWQgYnkgdGhlIHNlcnZpY2UuXHJcbiAgICogQHR5cGUge0FycmF5fVxyXG4gICAqL1xyXG4gIG5hbWVzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBDb250YWlucyB0aGUgY3VycmVudGx5IHBlbmRpbmcgcmVxdWVzdC5cclxuICAgKiBAdHlwZSB7T2JzZXJ2YWJsZTxzdHJpbmdbXT59XHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZXF1ZXN0OiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBOYW1lTGlzdFNlcnZpY2Ugd2l0aCB0aGUgaW5qZWN0ZWQgSHR0cC5cclxuICAgKiBAcGFyYW0ge0h0dHB9IGh0dHAgLSBUaGUgaW5qZWN0ZWQgSHR0cC5cclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSBmb3IgdGhlIEhUVFAgR0VUIHJlcXVlc3QgZm9yIHRoZSBKU09OIHJlc291cmNlLiBJZiB0aGVyZSB3YXMgYSBwcmV2aW91cyBzdWNjZXNzZnVsIHJlcXVlc3RcclxuICAgKiAodGhlIGxvY2FsIG5hbWVzIGFycmF5IGlzIGRlZmluZWQgYW5kIGhhcyBlbGVtZW50cyksIHRoZSBjYWNoZWQgdmVyc2lvbiBpcyByZXR1cm5lZFxyXG4gICAqIEByZXR1cm4ge3N0cmluZ1tdfSBUaGUgT2JzZXJ2YWJsZSBmb3IgdGhlIEhUVFAgcmVxdWVzdC5cclxuICAgKi9cclxuICBnZXQoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xyXG4gICAgaWYgKHRoaXMubmFtZXMgJiYgdGhpcy5uYW1lcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIE9ic2VydmFibGUuZnJvbShbdGhpcy5uYW1lc10pO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnJlcXVlc3QpIHtcclxuICAgICAgdGhpcy5yZXF1ZXN0ID0gdGhpcy5odHRwLmdldCgnL2Fzc2V0cy9kYXRhLmpzb24nKVxyXG4gICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC5tYXAoKGRhdGE6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QgPSBudWxsO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubmFtZXMgPSBkYXRhO1xyXG4gICAgICAgIH0pLnB1Ymxpc2hSZXBsYXkoMSkucmVmQ291bnQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3Q7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIHRoZSBnaXZlbiBuYW1lIHRvIHRoZSBhcnJheSBvZiBuYW1lcy5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgbmFtZSB0byBhZGQuXHJcbiAgICovXHJcbiAgYWRkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubmFtZXMucHVzaCh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=
