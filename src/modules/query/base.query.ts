interface IBaseQuery{
  pagination?:{
    skip?: number,
    page?: number
  }
}
export default IBaseQuery;