import { IItemType } from './item-type.model';
import { IShelf } from './shelf.model';

export interface IItem {
    id: number;
    name: string;
    description: string;
    expirationDate: Date;
    width: number;
    height: number;
    type: IItemType[];
    shelf: IShelf;
}
