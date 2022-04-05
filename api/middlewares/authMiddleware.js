const { handleErrorResponse, handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
        handleErrorResponse(res, "NOT_ALLOW", 409);
      return;
    }
    const token = req.headers.authorization.split(" ").pop();
    const tokenData = await verifyToken(token);
    if (tokenData._id) {
      next();
    } else {
      handleErrorResponse(res, "NOT_ALLOW", 409);
    }
  } catch (e) {
    handleHttpError(res, e);
  }
};

module.exports = authMiddleware;