import { IShelfType } from './shelf-type.model';

export interface IShelf {
    id: number;
    name: string;
    description: string;
    width: number;
    height: number;
    location: string;
    shelfParent: number;
    type: IShelfType;
}
