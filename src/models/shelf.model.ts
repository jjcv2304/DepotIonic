import { IShelfType } from './shelf-type.model';

export interface IShelf {
    id: number;
    name: string;
    description: string;
    width: number;
    height: number;
    depth: number;
    location: string;
    shelfParent: number;//id or object?
    type: IShelfType;
}
