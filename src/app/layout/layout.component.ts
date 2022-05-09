import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  user!: {
    firstName: string;
    lastName: string;
  }

  welcome!: string;

  usernameLabel!: string;
  passwordLabel!: string;

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.user = {
      firstName:'John',
      lastName:'Doe'
    };

    this.welcome = this.translate.instant('welcomeMessage', {
      firstName: this.user.firstName, lastName: this.user.lastName
    });

    this.translate.get(['login.username', 'login.password']).subscribe(translations => {
      this.usernameLabel = translations['login.username'];
      this.passwordLabel = translations['login.password'];
    });

  }

}
