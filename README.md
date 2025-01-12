# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: the lack of proper error handling in HTTP servers.  Without handling potential errors, the server can crash unexpectedly, leading to downtime and instability.

## Bug

The `bug.js` file shows a basic HTTP server that lacks error handling. If an error occurs during request processing, the server will crash without logging any useful information.

## Solution

The `bugSolution.js` file provides a corrected version of the server. It includes comprehensive error handling to gracefully manage potential issues, preventing crashes and providing informative error logs.