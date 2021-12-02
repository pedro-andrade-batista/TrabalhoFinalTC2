import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedService } from '../services/logged.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  authorized = false;

  constructor(
    private roteamento : Router,
    private serviceLogged: LoggedService
  ) { }

  ngOnInit(): void {
    this.isLogged();
  }
  ngDoCheck():void{
    this.isLogged();
  }

  isLogged(): void{
    this.authorized = this.serviceLogged.isLogged();
  }

  logout(): void{
    this.authorized = false;
    sessionStorage.clear();
    this.roteamento.navigate(["/login"]);
  }

}
