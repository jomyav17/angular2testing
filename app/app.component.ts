import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <h1>{{pageTitle}}</h1>
        <p>
            Welcome to our world
        </p>
        <pm-products>Loading products...</pm-products>
    `
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
