import {
  Component,
  OnInit
} from '@angular/core';
import {
  DataService
} from '../servicio/data.service'
import {
  ActivatedRoute
} from '@angular/router'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  identificador: number = 0;
  objPost = {}
  name = ""

  constructor(public _data: DataService, public _routeActive: ActivatedRoute) {}

  ngOnInit() {

    this._routeActive.paramMap.subscribe(
      (params) => {

        this.identificador = parseInt(params.get("id"));
        this.name = params.get("name");

        for (let i = 0; i < this._data.posts.length; i++) {

          if (this.name == this._data.posts[i].nombre) {
            

            
          }


          if (this.identificador == this._data.posts[i].id) {

            this.objPost = this._data.posts[i];
          }
        }
      })
  }
}
