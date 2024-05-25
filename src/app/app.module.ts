import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpBackend, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ButtonsModule, ExpansionPanelModule,DashedCheckboxModule, SectionSeparatorComponent } from 'nextsapien-component-lib';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

export const httpLoaderFactory = (http: HttpBackend): TranslateHttpLoader => new TranslateHttpLoader(new HttpClient(http), './assets/i18n/', '.json');

@NgModule({ declarations: [AppComponent, CardComponent],
    bootstrap: [AppComponent], imports: [CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ButtonsModule,
        ExpansionPanelModule,
        DashedCheckboxModule,
        SectionSeparatorComponent,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [HttpBackend],
            },
        }), ],
    providers: [provideHttpClient(withInterceptorsFromDi())],
    schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
    })
export class AppModule {}
