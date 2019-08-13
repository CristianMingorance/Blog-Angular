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
  selector: 'app-contain',
  templateUrl: './contain.component.html',
  styleUrls: ['./contain.component.css']
})

export class ContainComponent implements OnInit {

  name = ""


  constructor(public _data: DataService, public _routeActive: ActivatedRoute) {}



  ngOnInit() {


    this._routeActive.paramMap.subscribe(
      (params) => {

        this.name = params.get("name");

        console.log(this.name)


        this._data.loadPosts();

        if (this.name != null) {

          let arrBlog = [] 

          for (let i = 0; i < this._data.posts.length; i++) {

            if (this.name == this._data.posts[i].autor) {

              console.log(this._data.posts[i].autor)

             arrBlog.push(this._data.posts[i])



            }
          }
          this._data.posts = arrBlog
          console.log(arrBlog)
        }

      })
  }
}
