import { PaginationResult } from "../typings";

/**
 * @desc PaginateResult pagination information for database result
 * @param {Number} result object containing result from database
 * @param {Number} offset Number of result to skip
 * @param {Number} limit Number of result to return at a time
 * @returns {Object} the metadata of the result
 */
export const paginateResult = (result: number, offset: number, limit: number): PaginationResult => {
  return {
    currentPage: Math.floor(offset / limit) + 1,
    pageCount: Math.ceil(result / limit),
    pageSize: Number(limit),
    totalCount: Number(result),
  };
}
