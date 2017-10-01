export interface Book {
  //? means optional
  $key?: string,
  bookTitle: string;
  authors?: string;
  courseName?: string;
  courseCode?: string;
  price: string;
  seller: string;
  sellerPhone?: string;
  sellerEmail?: string;
  notes?: string;
}
