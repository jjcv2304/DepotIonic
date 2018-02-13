import { Injectable } from '@angular/core';
import { IItem, IShelf, IItemType, IShelfType } from '../models/index';

@Injectable()
export class DepotDbMock {

  // getItems(): Observable<IItem[]> {
  //   const subject = new Subject<IItem[]>();
  //   setTimeout(() => { subject.next(ITEMS); subject.complete(); }, 100);
  //   return subject;
  // }

  getItems(): IItem[] {
    return ITEMS;
  }

  getItem(id: number): IItem {
    return ITEMS.find(i => i.id === id);
  }

  getItemTypes(): IItemType[] {
    return ITEMTYPES;
  }

  getItemType(id: number): IItemType {
    return ITEMTYPES.find(it => it.id === id);
  }

  getShelves(): IShelf[] {
    return SHELVES;
  }

  getShelf(id: number): IShelf {
    return SHELVES.find(i => i.id === id);
  }

  getShelfTypes(): IShelfType[] {
    return SHELVESTYPES;
  }

  getShelfType(id: number): IShelfType {
    return SHELVESTYPES.find(i => i.id === id);
  }

}

const SHELVES: IShelf[] = [
  {
    id: 1,
    name: "Despensa habitacion",
    description: "The big shelf in the sleeping room",
    width: 0,
    height: 0,
    depth: 0,
    location: "Sleeping room",
    shelfParent: null,
    type: IShelfType[2]
  },
  {
    id: 2,
    name: "Dh1",
    description: "Estanteria despensa habitacion",
    width: 60,
    height: 40,
    depth: 30,
    location: "Sleeping room",
    shelfParent: 1,
    type: IShelfType[2]
  },
  {
    id: 3,
    name: "Dh2",
    description: "Estanteria despensa habitacion",
    width: 25,
    height: 40,
    depth: 30,
    location: "Sleeping room",
    shelfParent: 1,
    type: IShelfType[2]
  },
  {
    id: 4,
    name: "Dh3",
    description: "Estanteria despensa habitacion",
    width: 60,
    height: 20,
    depth: 30,
    location: "Sleeping room",
    shelfParent: 1,
    type: IShelfType[2]
  },
  {
    id: 5,
    name: "Dh4",
    description: "Estanteria despensa habitacion",
    width: 60,
    height: 20,
    depth: 30,
    location: "Sleeping room",
    shelfParent: 1,
    type: IShelfType[2]
  },
  {
    id: 6,
    name: "Nevera",
    description: "Estanteria refrigerada en la cocina",
    width: 0,
    height: 0,
    depth: 0,
    location: "Kitchen",
    shelfParent: null,
    type: IShelfType[0]
  },
  {
    id: 7,
    name: "Nevera_S1",
    description: "Estanteria refrigerada en la cocina",
    width: 60,
    height: 20,
    depth: 40,
    location: "Kitchen",
    shelfParent: 6,
    type: IShelfType[0]
  },
  {
    id: 8,
    name: "Nevera_S2",
    description: "Estanteria refrigerada en la cocina",
    width: 20,
    height: 20,
    depth: 40,
    location: "Kitchen",
    shelfParent: 6,
    type: IShelfType[0]
  },
  {
    id: 9,
    name: "Nevera_S3",
    description: "Estanteria refrigerada en la cocina",
    width: 20,
    height: 20,
    depth: 10,
    location: "Kitchen",
    shelfParent: 6,
    type: IShelfType[0]
  },
  {
    id: 10,
    name: "Nevera_S4",
    description: "Estanteria refrigerada en la cocina",
    width: 20,
    height: 30,
    depth: 10,
    location: "Kitchen",
    shelfParent: 6,
    type: IShelfType[0]
  },
  {
    id: 11,
    name: "Congelador",
    description: "Estanteria refrigerada en la cocina",
    width: 50,
    height: 20,
    depth: 40,
    location: "Kitchen",
    shelfParent: null,
    type: IShelfType[1]
  }
];

const SHELVESTYPES: IShelfType[] = [
  {
    id: 1,
    name: "Fridge",
    description: "Cool shelf"
  },
  {
    id: 2,
    name: "Freezer",
    description: "Very Cool shelf"
  },
  {
    id: 3,
    name: "Shelf",
    description: "Shelf, 25C"
  }
];

const ITEMTYPES: IItemType[] = [
  {
    id: 1,
    name: 'Alimento',
    description: 'Se puede comer'
  },
  {
    id: 2,
    name: 'Ropa',
    description: 'Ropa en general'
  },
  {
    id: 11,
    name: 'Verdura',
    description: 'Es una verdura o vegetal'
  },
  {
    id: 12,
    name: 'Legumbre',
    description: 'Es legumbre'
  },
  {
    id: 13,
    name: 'Listo para comer',
    description: 'Es un alimento/plato que esta listo para ser consumido sin mas elaboracion'
  },
  {
    id: 21,
    name: 'Ropa vestir',
    description: 'Ropa para trabajar o salir con los amigos'
  },
  {
    id: 22,
    name: 'Ropa deporte',
    description: 'Ropa para practicar deporte'
  },
];

const ITEMS: IItem[] = [
  {
    id: 1,
    name: 'Lentejas con pimiento',
    description: 'Potaje lentejas con verduras y pimiento',
    expirationDate: new Date('10/25/2017'),
    width: 1,
    height: 1,
    type: [
      {
        id: 1,
        name: 'Alimento',
        description: 'Se puede comer'
      },
      {
        id: 11,
        name: 'Verdura',
        description: 'Es una verdura o vegetal'
      },
      {
        id: 12,
        name: 'Legumbre',
        description: 'Es legumbre'
      },
      {
        id: 13,
        name: 'Listo para comer',
        description: 'Es un alimento/plato que esta listo para ser consumido sin mas elaboracion'
      }
    ],
    shelf: SHELVES[10],

  },
  {
    id: 2,
    name: 'Alubias con alcachofa y jamon',
    description: 'Potaje de alubias con alcachofas y jamon',
    expirationDate: new Date('10/25/2017'),
    width: 1,
    height: 1,
    type: [
      {
        id: 1,
        name: 'Alimento',
        description: 'Se puede comer'
      },
      {
        id: 12,
        name: 'Legumbre',
        description: 'Es legumbre'
      },
      {
        id: 13,
        name: 'Listo para comer',
        description: 'Es un alimento/plato que esta listo para ser consumido sin mas elaboracion'
      }
    ],
    shelf: SHELVES[10],

  },
  {
    id: 3,
    name: 'Alubias con alcachofa y jamon',
    description: 'Potaje de alubias con alcachofas y jamon',
    expirationDate: new Date('10/25/2017'),
    width: 1,
    height: 1,
    type: [
      {
        id: 1,
        name: 'Alimento',
        description: 'Se puede comer'
      },
      {
        id: 12,
        name: 'Legumbre',
        description: 'Es legumbre'
      },
      {
        id: 13,
        name: 'Listo para comer',
        description: 'Es un alimento/plato que esta listo para ser consumido sin mas elaboracion'
      }
    ],
    shelf: SHELVES[10],

  },
  {
    id: 4,
    name: 'Queso manchego semi',
    description: 'Queso manchego semi',
    expirationDate: new Date('02/15/2018'),
    width: 1,
    height: 1,
    type: [
      {
        id: 1,
        name: 'Alimento',
        description: 'Se puede comer'
      },
      {
        id: 12,
        name: 'Embutido',
        description: 'Es un embutido'
      },
      {
        id: 13,
        name: 'Listo para comer',
        description: 'Es un alimento/plato que esta listo para ser consumido sin mas elaboracion'
      }
    ],
    shelf: SHELVES[5],

  }
];
