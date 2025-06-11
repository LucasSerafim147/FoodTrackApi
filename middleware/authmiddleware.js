import jwt from "jsonwebtoken";

export const proteger = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Verifica se tem token
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token não fornecido." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id; // Armazena o ID do usuário logado
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido ou expirado." });
  }
};
