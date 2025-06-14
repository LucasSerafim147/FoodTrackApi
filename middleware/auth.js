import jwt from "jsonwebtoken";

export const proteger = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  try {
    const decodificado = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodificado.id;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token inválido ou expirado" });
  }
};
