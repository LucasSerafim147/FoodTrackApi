import user from "../models/user.js";
import jwt from "jsonwebtoken"


export const login = async(req, res) =>{
    const {email, senha} = req.body;

    try {
        const usuario  = await user.findOne({email})


        if(!usuario){
            return res.status(400).json({message: "usuário não encontrado"})
        }


        const senhaCorreta =  await usuario.compararSenha(senha)

        if(!senhaCorreta){
            return res.status(401).json({message:"senha incorreta"});
        };

        const token = jwt.sign(
            {id: usuario._id},
            process.env.JWT_SECRET,
            {expiresIn:"1h"}
        );

         res.status(200).json({
      message: "Login realizado com sucesso",
      token,
      usuario: {
        id: usuario._id,
        nome: usuario.nome,
        email: usuario.email
      }
    });




    } catch (error) {
        res.status(500).json({message: error.message})
    }
}