import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { host, Article } from '../common';
import { Observable } from 'rxjs';


@Injectable()

export class AdminService {

    private getCategoryUrl = `${host}admin/getCategory`;
    private postCategoryUrl = `${host}admin/addCategory`;
    private deleteCategoryUrl = `${host}admin/deleteCategory`;

    private getArticleUrl = `${host}admin/getArticle`;
    private posArticleUrl = `${host}admin/postArticle`;
    private getArticleByIdUrl = `${host}admin/getArticleById`;

    private modifyArticleUrl = `${host}admin/modifyArticle`;

    private deleteArticleUrl = `${host}admin/deleteArticle`;

    private headers = new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8'
    });

    constructor(
        private http: HttpClient
    ) {}

    getCategory(): Observable<any> {
        return this.http.get(this.getCategoryUrl);
    }

    postCategory(category: string): Observable<any> {
        return this.http.post(this.postCategoryUrl, {name: category}, {headers: this.headers})
    }

    deleteCategory(name: string): Observable<any> {
        return this.http.post(this.deleteCategoryUrl, {name: name}, {headers: this.headers});
    }


    getArticle(): Observable<any> {
        return this.http.get(this.getArticleUrl);
    }

    getArticleById(id: string): Observable<any> {
        return this.http.get(this.getArticleByIdUrl + `?id=${id}`);
    }

    postArticle(articleObj: Article): Observable<any> {
        return this.http.post(this.posArticleUrl, articleObj, {headers: this.headers});
    }

    modifyArticle(obj): Observable<any> {
        return this.http.post(this.modifyArticleUrl, obj, { headers: this.headers });
    }

    deleteArticle(id: number): Observable<any> {
        return this.http.get(this.deleteArticleUrl + `?id=${id}`);
    }
}

