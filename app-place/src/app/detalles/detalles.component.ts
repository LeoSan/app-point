import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
 //Declaro variables typeScript

 nombreLugar:string = '';
 distanciaLugar:string = '';
 planLugar:string = '';
 descLugar:string = '';
 webLugar:string = '';
 objLugar = null;


  //Arreglo para los lugares
    items = [
      {id: 1, cerca:1,distancia: 10, valor:5, plan:'pagado', activo: false, nombre: 'Tienda Cosa 1' , desc:'tienda multiuso', web:'www.google.com' },
      {id: 2, cerca:1,distancia: 20, valor:3, plan:'pagado', activo: true,  nombre: 'Tienda Cosa 2' , desc:'tienda multiuso', web:'www.google.com' },
      {id: 3, cerca:2,distancia: 30, valor:5, plan:'no',     activo: false,  nombre: 'Tienda Cosa 3', desc:'tienda multiuso', web:'www.google.com' },
      {id: 4, cerca:3,distancia: 40, valor:3, plan:'pagado', activo: true,  nombre: 'Tienda Cosa 4' , desc:'tienda multiuso', web:'www.google.com' },
      {id: 5, cerca:3,distancia: 50, valor:5, plan:'no',     activo: true,  nombre: 'Tienda Cosa 5' , desc:'tienda multiuso', web:'www.google.com' },
      {id: 5, cerca:2,distancia: 60, valor:3, plan:'no',     activo: false, nombre: 'Tienda Cosa 6' , desc:'tienda multiuso', web:'www.google.com' },
      {id: 6, cerca:3,distancia: 70, valor:5, plan:'pagado', activo: true,  nombre: 'Tienda Cosa 7' , desc:'tienda multiuso', web:'www.google.com' },
    ];

  idItems = null;

  constructor(private route:ActivatedRoute) {
      //Prueba console
       console.log('entro al detalle');
       console.log(this.route.snapshot.params['id']);
       console.log(this.route.snapshot.queryParams['action']);
      console.log(this.buscarLugar(this.idItems));
      // Recibo parametros y asigno string estrapolacion
       this.idItems = this.route.snapshot.params['id'];
       this.objLugar = this.buscarLugar(this.idItems);
       this.nombreLugar =  this.objLugar.nombre;
       this.distanciaLugar =  this.objLugar.distancia;
       this.planLugar =  this.objLugar.plan;
       this.descLugar =  this.objLugar.desc;
       this.webLugar =  this.objLugar.web;


   }

  ngOnInit() {
  }

  buscarLugar(id){
    return this.items.filter((i)=>{return i.id==id})[0] || null;
  }

}
