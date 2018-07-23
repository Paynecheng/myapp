import { Component, OnInit } from '@angular/core';
import { FrontEndService } from './front-end.service';


@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.css']
})
export class FrontEndComponent implements OnInit {

  constructor(
    private frontEndService: FrontEndService
  ) { }

  category: any[];

  ngOnInit() {
    console.log('sb');
    this.getCategory();
  }

  getCategory(): void {
    this.frontEndService.getCategory()
    .subscribe((res: any[]) => {
      this.category = res;
    });
  }

}
