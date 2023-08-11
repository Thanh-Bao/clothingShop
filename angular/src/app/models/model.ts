export interface Pagination {
  top: number;
  skip?: number;
  orderBy?: string
}
export interface Filter{
    pagination: Pagination
    categoryId?: string,
    search?: string,
    priceRanges?: number[]
}