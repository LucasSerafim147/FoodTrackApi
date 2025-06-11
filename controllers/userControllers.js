import user from "../models/user.js";


//#region  get all
export const ExibirTodosUsuarios = async (req, res) =>{
    try {
        
        const users = await user.find({})
        res.status(200).json(users)

    } catch (error) {
        res.status(500).json({message: error.message} )
    }
};
//#endregion


//#region  criar usuario



export const CriarUsuario = async (req, res) => {
try {
    
    const resposta = await user.create(req.body)
    res.status(200).json(resposta)

} catch (error) {
    res.status(500).json({message: error.message});
}
};
//#endregion

 
//#region  exebir usuario por id
export const ExibirUsuarioId = async (req, res) => {
    try {
        const {id} = req.params;

        const userId = await user.findById(id);       
       return res.status(200).json(userId)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
//#endregion

//#region  atualiza usuario por id
export const AtualizarUsuario = async (req, res) => {
    try {
        const {id} = req.params;

        const userId = await user.findByIdAndUpdate(id, req.body);  

        if(!userId){
            return res.status(404).json({message:"Id do usuário não encontrado"})
        }

      const userAtualizado = await user.findById(id);
      res.status(200).json(userAtualizado)


    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
//#endregion

//#region  deletar usuario por id
export const DeletarUsuario = async (req, res) => {
    try {
        const {id} = req.params;

        const userId = await user.findByIdAndDelete(id);  

        if(!userId){
            return res.status(404).json({message:"Id do usuário não encontrado"})
        }

        return res.status(200).json({message: "usuário deletado com sucesso"})



    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
//#endregion