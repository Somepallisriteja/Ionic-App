import { NgModule } from '@angular/core';
import { FacebookLoginComponent } from './facebook-login/facebook-login';
import { FacebookLogoutComponent } from './facebook-logout/facebook-logout';
@NgModule({
	declarations: [FacebookLoginComponent,
    FacebookLogoutComponent],
	imports: [],
	exports: [FacebookLoginComponent,
    FacebookLogoutComponent] 
})
export class ComponentsModule {}
