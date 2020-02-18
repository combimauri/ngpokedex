import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pok-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear: number;

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
}
