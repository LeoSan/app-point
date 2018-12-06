import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

//Variables para el mapa
  title: string = 'Mapa de Lugares ';
  lat: number = 19.4153734;
  lng: number = -99.135346;

//Arreglo para los lugares
  lugares:any = [
    {id: 1, cerca:1,distancia: 10, valor:5, plan:'pagado', activo: false, nombre: 'Tienda Cosa 1'},
    {id: 2, cerca:1,distancia: 10, valor:3, plan:'pagado', activo: true,  nombre: 'Tienda Cosa 2'},
    {id: 3, cerca:2,distancia: 10, valor:5, plan:'no',     activo: false,  nombre: 'Tienda Cosa 3'},
    {id: 4, cerca:3,distancia: 10, valor:3, plan:'pagado', activo: true,  nombre: 'Tienda Cosa 4'},
    {id: 5, cerca:3,distancia: 10, valor:5, plan:'no',     activo: true,  nombre: 'Tienda Cosa 5'},
    {id: 5, cerca:2,distancia: 10, valor:3, plan:'no',     activo: false, nombre: 'Tienda Cosa 6'},
    {id: 6, cerca:3,distancia: 10, valor:5, plan:'pagado', activo: true,  nombre: 'Tienda Cosa 7'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
