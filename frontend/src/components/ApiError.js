
/**
 * ApiError is a custom error class, designed to provide a structured way to capture and propagate detailed error information related to failed API requests
 * @typedef {Object} ApiError
 *   @property {string} url - The URL of the request.
 *   @property {number} status - The HTTP status code. e.g. 404, 500 
 *   @property {string} statusText - The status text of the response. e.g., "Not Found"
 *   @property {any} body - The response body, often containing error details.
 *   @property {ApiRequestOptions} request - The options or configuration of the API request (e.g., headers, method, etc.).
 */
export class ApiError extends Error {
    // request: ApiRequestOptions
    // response: ApiResult
    // message: string
    constructor(request, response, message) {
        super(message);

        this.name = "ApiError";
        this.url = response.url;
        this.status = response.status;
        this.statusText = response.statusText;
        this.body = response.body;
        this.request = request;
    }

}
