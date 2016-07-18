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
var forms_1 = require('@angular/forms');
var index_1 = require('../shared/index');
var index_2 = require('./banner/index');
var index_3 = require('./features/index');
var index_4 = require('./faq/index');
var HomeComponent = (function () {
    function HomeComponent(nameListService) {
        this.nameListService = nameListService;
    }
    HomeComponent.prototype.addName = function () {
        this.nameListService.add(this.newName);
        this.newName = '';
        return false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, index_2.BannerComponent, index_3.FeaturesComponent, index_4.FaqComponent]
        }), 
        __metadata('design:paramtypes', [index_1.NameListService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHNCQUF5QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBRTFELHNCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xELHNCQUFnQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2pELHNCQUFrQyxrQkFBa0IsQ0FBQyxDQUFBO0FBQ3JELHNCQUE2QixhQUFhLENBQUMsQ0FBQTtBQVkzQztJQVVFLHVCQUFtQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBTXZELCtCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUEzQkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7WUFDakMsVUFBVSxFQUFFLENBQUMsZ0NBQXdCLEVBQUUsdUJBQWUsRUFBRSx5QkFBaUIsRUFBRSxvQkFBWSxDQUFDO1NBQ3pGLENBQUM7O3FCQUFBO0lBdUJGLG9CQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCWSxxQkFBYSxnQkFzQnpCLENBQUEiLCJmaWxlIjoiYXBwLytob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XHJcbmltcG9ydCB7IEJhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vYmFubmVyL2luZGV4JztcclxuaW1wb3J0IHsgRmVhdHVyZXNDb21wb25lbnQgfSBmcm9tICcuL2ZlYXR1cmVzL2luZGV4JztcclxuaW1wb3J0IHsgRmFxQ29tcG9uZW50IH0gZnJvbSAnLi9mYXEvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC1ob21lJyxcclxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydob21lLmNvbXBvbmVudC5jc3MnXSxcclxuICBkaXJlY3RpdmVzOiBbUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLCBCYW5uZXJDb21wb25lbnQsIEZlYXR1cmVzQ29tcG9uZW50LCBGYXFDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcclxuXHJcbiAgbmV3TmFtZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBIb21lQ29tcG9uZW50IHdpdGggdGhlIGluamVjdGVkXHJcbiAgICogTmFtZUxpc3RTZXJ2aWNlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOYW1lTGlzdFNlcnZpY2V9IG5hbWVMaXN0U2VydmljZSAtIFRoZSBpbmplY3RlZCBOYW1lTGlzdFNlcnZpY2UuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWVMaXN0U2VydmljZTogTmFtZUxpc3RTZXJ2aWNlKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBDYWxscyB0aGUgYWRkIG1ldGhvZCBvZiB0aGUgTmFtZUxpc3RTZXJ2aWNlIHdpdGggdGhlIGN1cnJlbnQgbmV3TmFtZSB2YWx1ZSBvZiB0aGUgZm9ybS5cclxuICAgKiBAcmV0dXJuIHtib29sZWFufSBmYWxzZSB0byBwcmV2ZW50IGRlZmF1bHQgZm9ybSBzdWJtaXQgYmVoYXZpb3IgdG8gcmVmcmVzaCB0aGUgcGFnZS5cclxuICAgKi9cclxuICBhZGROYW1lKCk6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5uYW1lTGlzdFNlcnZpY2UuYWRkKHRoaXMubmV3TmFtZSk7XHJcbiAgICB0aGlzLm5ld05hbWUgPSAnJztcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
