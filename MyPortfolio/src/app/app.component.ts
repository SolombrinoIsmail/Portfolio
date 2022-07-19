import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'MyPortfolio';
  visible: boolean = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.visible = false;
    }, 1000);
  }
}
