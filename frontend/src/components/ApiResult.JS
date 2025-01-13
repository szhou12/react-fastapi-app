/**
 * @typedef {Object} ApiResult
 *  @property {any} body - The response body.
 *  @property {boolean} ok - Whether the response status is in the 2xx range.
 *  @property {number} status - The HTTP status code.
 *  @property {string} statusText - The status text of the response.
 *  @property {string} url - The URL of the request.
 */

/**
 * Example:
 * const result = {
 *    body: { data: "example" },
 *    ok: true,
 *    status: 200,
 *    statusText: "OK",
 *    url: "https://api.example.com/data"
 * }
 * 
 * const result = {
 *     body: { id: 1, name: "John Doe" },
 *     ok: true,
 *     status: 200,
 *     statusText: "OK",
 *     url: "https://api.example.com/users/1",
 * }
 */