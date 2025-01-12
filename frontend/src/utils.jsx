export const emailPattern = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Invalid email address",
}

export const namePattern = {
    value: /^[A-Za-z\s\u00C0-\u017F]{1,30}$/,
    message: "Invalid name",
}

export const usernamePattern = {
    value: /^[a-zA-Z0-9][a-zA-Z0-9._-]{2,19}$/,
    message: "Username must be 3-20 characters and can contain letters, numbers, dots, underscores, and hyphens. Must start with a letter or number."
}


// err: ApiError - an error object that contains error details
// showToast: a function to display error messages to the user
export const handleError = (err, showToast) => {
    // Tries to access the 'detail' property from err.body
    // The ?. (optional chaining) prevents errors if err.body is undefined
    const errDetail = (err.body)?.detail

    // Sets a default error message
    // If errDetail exists, use that; otherwise, use "Something went wrong."
    let errorMessage = errDetail || "Something went wrong."

    // This handles cases where the API returns an array of error messages
    if (Array.isArray(errDetail) && errDetail.length > 0) {
        // take the first error message
        errorMessage = errDetail[0].msg
    }

    // Calls the showToast function to display the error to the user
    // Params:
    // - "Error": the title of the toast
    // - errorMessage: the actual error message to display
    // - "error": the type of toast (usually affects styling)
    showToast("Error", errorMessage, "error")
}