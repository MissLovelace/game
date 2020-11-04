import {Component} from '@angular/core';


@Component({
  selector: 'app-appli',
  templateUrl: './appli.component.html',
  styleUrls: ['./appli.component.css']
})
export class AppliComponent  {
  inputString: string;
  result: number[];

 t1: number;
 t2: number;

  constructor() { }


  // tslint:disable-next-line:variable-name

  splitMethod(transform: string): number[] {
    return transform.trim().split(' ').map(value => Number(value));
  }

  sortNumber(tab: number[]) {
  for (let i = 0; i < tab.length; i++) {
      let min = i;
      for (let j = i + 1; j < tab.length; j++) {
        if (tab[j] < tab[min]) {
          min = j;
        }
      }

      const mix = tab[i];
      tab[i] = tab[min];
      tab[min] = mix;
  }


  this.t2 = Date.now();
  return tab;

  }
quickSort(list: number[]): number[] {
    const inferieur: number[] = [];
    const pivot: number[] = [];
    const superieur: number[] = [];
    if (list.length < 2) {   // verifie si il y a besoin de trier
      return list;
    }
    // const pivotNombre: number = list[Math.floor(Math.random() * list.length)];
  // choisi un nombre aléatoire qui va de 0 à la longueur du tableau(index au hasard)
    const pivotNombre: number = list[0]; // choisi un nombre aléatoire qui va de 0 à la longueur du tableau(index au hasard)

  for (const i of list) {
      if (i < pivotNombre) {
        inferieur.push(i);
      } else if (i > pivotNombre) {
        superieur.push(i);
      } else {
        pivot.push(i);
      }
    }
    return this.quickSort(inferieur).concat(pivot).concat(this.quickSort(superieur));

}


  displayResult() {

    const splitMethod2 = (transform: string): number[] => {
      return transform.trim().split(' ').map(value => Number(value));
    };

    const sizeTab = 10000000;
    // this.result = this.splitMethod(inputString).sort();
    // this.result = splitMethod2(inputString).sort();
    // this.result = inputString.trim().split(' ').map(value => Number(value)).sort();
    const mix: number[] = [];
    for ( let i = 0; i < sizeTab; i++) {
      const num = Math.floor(Math.random() * 1000);
      mix.push(num);
    }
    console.log(mix.length);
    // this.t1 = Date.now();
    // this.result = this.sortNumber(mix);
    // const time = this.t2 - this.t1;
    const mix2: number[] = [];
    for ( let i = 0; i < sizeTab; i++) {
      const num = Math.floor(Math.random() * 1000);
      mix2.push(num);
    }
    this.t1 = Date.now();
    mix2.sort();
    this.t2 = Date.now();
    const time2 = this.t2 - this.t1;

    const mix3: number[] = [];
    for ( let i = 0; i < sizeTab; i++) {
      const num = Math.floor(Math.random() * 1000);
      mix3.push(num);
    }
    this.t1 = Date.now();
    this.quickSort(mix3);
    this.t2 = Date.now();

    const time3 = this.t2 - this.t1;

    console.log(time2);
    console.log('time3 :' + time3);

  }







}
