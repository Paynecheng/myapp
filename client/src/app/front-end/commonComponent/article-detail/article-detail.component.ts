import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  constructor() { }

  @Input() article;

  ngOnInit() {
    console.log('tttttttt');
  }

}
