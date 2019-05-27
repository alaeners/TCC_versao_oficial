import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';
import { Local } from '../../../models/Local';
import { LocaisService } from '../../../services/locais.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-list-card',
    templateUrl: './list-card.component.html',
    styleUrls: ['./list-card.component.scss']
  })

export class ListCardComponent implements OnInit, OnDestroy {

    tipo: string;
    locais: Local[];
    config: any;
    collection = [];

    constructor(private route: ActivatedRoute, private router: Router, private locaisservice: LocaisService) {
      this.config = {
        currentPage: 1,
        itemsPerPage: 1
      };

      this.route.queryParamMap
              .map(params => params.get('page'))
              .subscribe(page => this.config.currentPage = page);
  
      for (let i = 1; i <= 100; i++) {
        this.collection.push({i});
      }
    }

    pageChange(newPage: number) { 
    this.router.navigate(['shared/list-local/list-card/:tipo'], { queryParams: { page: newPage } });
    }

    ngOnInit() {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('list-card-page');

        this.tipo = this.route.snapshot.paramMap.get('tipo');

        if (this.tipo !== 'todos'){
          this.locaisservice.returnLocalByTipo(this.tipo);
        }
        this.locaisservice.getLocais().subscribe(locais => this.locais = locais );
    }
    ngOnDestroy(){
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('list-card-page');
    }


}
