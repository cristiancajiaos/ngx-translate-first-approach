import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-approach';

  currentLanguage = 'en';

  languageOptions = [
    {name: 'English', code: 'en'},
    {name: 'Español', code: 'es'}
  ];

  constructor(
    private translate: TranslateService
  ) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
    translate.use('es');
  }

  changeLanguage(): void {
    this.translate.use(this.currentLanguage);
  }
}
