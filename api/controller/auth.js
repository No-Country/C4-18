const { matchedData } = require("express-validator");
const { usersModel } = require("../models");
const { handleErrorResponse, handleHttpError } = require("../utils/handleError");
const { tokenSign } = require("../utils/handleJwt");
const { compare, encrypt } = require("../utils/handlePassword");
const jwt = require("jsonwebtoken");

const loginController = async (req, res) => {
    try {
      console.log(req.body)
      const body = matchedData(req);
      const user = await usersModel.findOne({ correo: body.correo });
      if (!user) {
        handleErrorResponse(res, "USER_NOT_EXISTS", 404);
        return;
      }
      const checkPassword = await compare(body.password, user.password);
  
      if (!checkPassword) {
        handleErrorResponse(res, "PASSWORD_INVALID", 402);
        return;
      }      
  
      const data = {
        token: await tokenSign(user),
        user: user,
      };
  
      res.send({ data });
    } catch (e) {
      handleHttpError(res, e);
    }
  };

  const signUpController = async (req, res) => {
    try {
      const body = matchedData(req);
      
      const checkIsExist = await usersModel.findOne({ correo: body.correo });
      if (checkIsExist) {
        handleErrorResponse(res, "USER_EXISTS", 401);
        return;
      }
      const password = await encrypt(body.password);
      const bodyInsert = { ...body, password };
      const user = await usersModel.create(bodyInsert);
      const data = {
        token: await tokenSign(user),
        user: user,
      };
  
      res.send({ data });
    } catch (e) {
      handleHttpError(res, e);
    }
  };

  const logoutController = async (req, res) => {
    const authHeader = req.headers["authorization"];
  
    jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
      res.status(200).send({ message: "YOU_DISCONNECTED" });
    });
  };
  

  module.exports = {loginController, signUpController, logoutController};