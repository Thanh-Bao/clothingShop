export interface Pagination {
  top?: number;
  skip?: number;
  orderBy?: string
}
export interface Filter{
    pagination: Pagination
    categoryIds?: string[],
    search?: string,
    priceRanges?: number[]
    heightRanges?: number[][]
    weightRanges?: number[][]
    [key: string]: any;
}