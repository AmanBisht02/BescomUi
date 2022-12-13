import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LandingComponent } from './landing/landing.component';
import { NewsBlogSectionComponent } from './landing/components/news-blog-section/news-blog-section.component';
import { OtherInfoComponent } from './landing/components/other-info/other-info.component';
import { FaqComponent } from './landing/components/faq/faq.component';
import { ApplyOnlineComponent } from './landing/components/apply-online/apply-online.component';
import { ImgContainerComponent } from './landing/components/img-container/img-container.component';
import { LoginPageComponent } from './landing/components/login-page/login-page.component';
import { RegisPageComponent } from './landing/components/regis-page/regis-page.component';

const components = [
  LandingComponent,
  NewsBlogSectionComponent,
  OtherInfoComponent,
  FaqComponent,
  ApplyOnlineComponent,
  ImgContainerComponent,
  LoginPageComponent,
  RegisPageComponent,
];

const modules = [PublicRoutingModule, SharedModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class PublicModule {}
