import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  authorized = false;

  constructor(
    private roteamento : Router,
  ) { }

  ngOnInit(): void {
    this.isLogged();
  }
  ngDoCheck():void{
    this.isLogged();
  }

  isLogged(): void{
    if(sessionStorage.getItem("token") != null){
      this.authorized = true;
    }
    else{
      this.authorized = false;
    }
  }

  logout(): void{
    this.authorized = false;
    console.log('entrou')
    sessionStorage.clear();
    this.roteamento.navigate(["/login"]);
  }

}
