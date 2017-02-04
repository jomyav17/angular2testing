import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductDetailComponent} from './product-detail.component';
import {ProductFilterPipe} from './product-filter.pipe';
import {ProductListComponent} from './product-list.component';
import {ProductService} from './product.service';
import {ProdcutDetailGuard} from './product-guard.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [
        ProductListComponent, ProductDetailComponent, ProductFilterPipe
    ],
    imports: [
        RouterModule.forChild([
            {
                path: "products",
                component: ProductListComponent
            }, {
                path: "product/:id",
                canActivate: [ProdcutDetailGuard],
                component: ProductDetailComponent
            }
        ]),
        SharedModule
    ],
    providers: [ProductService, ProdcutDetailGuard]
})
export class ProductsModule {}