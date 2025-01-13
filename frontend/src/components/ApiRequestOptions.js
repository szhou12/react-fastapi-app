/**
 * @typedef {Object} ApiRequestOptions
 *  @property {any} [body] - The request body (JSON, FormData, etc.).
 *  @property {Object} [cookies] - A map of cookies for the request.
 *  @property {Object} [errors] - A map of status codes to error messages.
 *  @property {Object|Array|Blob|File} [formData] - Form data for the request.
 *  @property {Object} [headers] - Headers for the request.
 *  @property {string} [mediaType] - The media type of the request (e.g., application/json).
 *  @property {"DELETE"|"GET"|"HEAD"|"OPTIONS"|"PATCH"|"POST"|"PUT"} method - HTTP method.
 *  @property {Object} [path] - Path parameters for the URL.
 *  @property {Object} [query] - Query parameters for the URL.
 *  @property {string} [responseHeader] - Specific response header to extract.
 *  @property {(data: any) => Promise<any>} [responseTransformer] - Function to transform response data.
 *  @property {string} url - The request URL.
 */

/**
 * Example:
 *  const options = {
 *    url: "https://api.example.com/data",
 *    method: "GET",
 *    headers: { "Content-Type": "application/json" },
 *    body: JSON.stringify({ username: "example" }),
 *    responseTransformer: (data) => data.json()
 *  }
 * 
 *  const requestOptions = {
 *    url: "https://api.example.com/users",
 *    method: "POST",
 *    headers: { "Content-Type": "application/json" },
 *    body: JSON.stringify({ username: "example" }),
 *  }
 */



