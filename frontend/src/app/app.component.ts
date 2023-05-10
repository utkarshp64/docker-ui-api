import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'frontend';

  @ViewChild('divRef') divRef: HTMLElement | null = null;

  constructor(private httpClient: HttpClient) {}

  checkHeath() {
    this.httpClient.get(window.origin + '/api').subscribe({
      next: (res) => console.log('checkHeath res', res),
      error: (error) => console.log('checkHeath error', error),
    });
  }

  login() {
    this.httpClient.post(window.origin + '/api/auth/login', {}).subscribe({
      next: (res) => {
        console.log('login res', res);
        if (this.divRef) {
          this.divRef.innerHTML = JSON.stringify(res);
        }
      },
      error: (error) => console.log('login error', error),
    });
  }

  ngOnInit(): void {
    setInterval(() => {
      this.checkHeath();
    }, 5000);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.login();
    }, 5000);
  }
}
