import {Photo} from "./photos";

export interface Article {
  id : number,
  title:string,
  body:string,
  city:string,
  address:string,
  for: string,
  price: number,
  type:string,
  available:string,
  phonenumber:string,
  filenames:File,
  created_at:string,
  updated_at:string,
  user_id:number,
  views:number
  actions: string
  photo: Photo[]
}
