const jwt = require("jsonwebtoken");

exports.isTokenValid = (req, res, next) => {
  const token = req.headers?.authorization;

  if (token) {
    try {
      const payload = jwt.verify(token, "PALABRA_SECRETA");
      console.log({ payload });
      return next();
    } catch (error) {
      return res.status(403).json({ msg: "El token no es valido" });
    }
  }

  return res
    .status(403)
    .json({ msg: "Tienes que estar logeado para realizar esta petición" });
};
