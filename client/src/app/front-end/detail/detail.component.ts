import { Component, OnInit } from '@angular/core';
import { FrontEndService } from '../front-end.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public article = {
    title: '',
    description: '',
    last_time: '',
    views: '',
    category: ''
  };

  constructor(
    private frontEndService: FrontEndService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
        this.detailArticle(params.id);
    } );
  }

  detailArticle(id): void {
    this.frontEndService.getDetailArticle(id)
    .subscribe((res) => {
      this.article = res[0];
    });
  }

}
