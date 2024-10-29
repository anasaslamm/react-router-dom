import React from 'react'
import { useRouteError } from 'react-router-dom'


function ErrorPage() {
    const error = useRouteError();
    console.log(error);
  return (
    <React.Fragment>
        <div id="error-page">
        <h1>Oops!</h1>
        <p>Something went wrong</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        </div>
    </React.Fragment>
  )
}

export default ErrorPage