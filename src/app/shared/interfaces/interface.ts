export interface IpostRequest {
    img: string;
    author: string;
    title: string;
    text: string;
  }
  
  export interface IpostResponse extends IpostRequest {
    id: number;
  }