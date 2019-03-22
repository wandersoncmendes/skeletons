import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public findItemsApi(length: number) : Observable<any>{
    return of(this.generateArray(length)).pipe(delay(1500))
        
    
  }

  public generateArray (length: number) {
    let result = new Array(length);
    for(let i = 0; i < length; i++) {
      result[i] = ELEMENT_DATA[Math.floor(Math.random() * ELEMENT_DATA.length)];
    }
    return result;
  }
}


const ELEMENT_DATA: any[] = [
  {
    position: 1,
    title: 'Hydrogen',
    image: {
      alt: 'A cloud day at a mountain base',
      src: 'https://www.waterionizer.org/wp-content/uploads/2018/04/h2.jpg'
    },
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic image of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    position: 2,
    title: 'Helium',
    image: {
      alt: 'A cloud day at a mountain base',
      src: 'https://images-na.ssl-images-amazon.com/images/I/31mCnwt6YXL.jpg'
    },
    symbol: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, {
    position: 3,
    title: 'Lithium',
    image: {
      alt: 'A cloud day at a mountain base',
      src: 'https://www.eletimes.com/wp-content/uploads/2018/08/Lithium-Ion-Battery.jpg'
    },
    symbol: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }, {
    position: 4,
    title: 'Beryllium',
    image: {
      alt: 'A cloud day at a mountain base',
      src: 'https://www.uewhealth.com/wp-content/uploads/2017/05/beryllium.jpg'
    },
    symbol: 'Be',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
  }, {
    position: 5,
    title: 'Boron',
    image: {
      alt: 'A cloud day at a mountain base',
      src: 'https://owqo93fpiuc4633lp1zthz57-wpengine.netdna-ssl.com/wp-content/uploads/sites/11/2018/12/0817altmedsboron_1268589-860x573.jpg'
    },
    symbol: 'B',
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
  }, {
    position: 6,
    title: 'Carbon',
    image: {
      alt: 'A cloud day at a mountain base',
      src: 'https://www.grootgadgets.com/wp-content/uploads/2016/11/predator-motorcycle-helmet-2.jpg'
    },
    symbol: 'C',
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
  }, {
    position: 7,
    title: 'Nitrogen',
    image: {
      alt: 'A cloud day at a mountain base',
      src: 'https://4.imimg.com/data4/DL/IG/MY-3137311/liquid-nitrogen-gas-500x500.jpg'
    },
    symbol: 'N',
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, {
    position: 8,
    title: 'Oxygen',
    image: {
      alt: 'A cloud day at a mountain base',
      src: 'https://www.homecaremag.com/sites/default/files/styles/main_image/public/O2-oxygen-507182002-.jpg?itok=zzE9aqbw'
    },
    symbol: 'O',
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
  }, {
    position: 9,
    title: 'Fluorine',
    image: {
      alt: 'A cloud day at a mountain base',
      src: 'http://s3.thingpic.com/images/hj/gAst29zGby5WwR747Z6DfDaB.jpeg'
    },
    symbol: 'F',
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
  }, {
    position: 10,
    title: 'Neon',
    image: {
      alt: 'A cloud day at a mountain base',
      src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Neon_%28Ne%29.jpg'
    },
    symbol: 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
];