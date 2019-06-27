interface IPaginationQuery{
    limit: number,
    page: number,
    lean?: boolean
}

export default IPaginationQuery;