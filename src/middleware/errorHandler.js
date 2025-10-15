// Centralized error handling middleware
const errorHandling = (err, req, res, next) => {
        console.error(err.stack);// Log the error
        res.status(500).json({ 
            status : 500,
            message : "Internal Server Error",
            error : err.message
         });
    };

export default errorHandling;