import meal from  "../models/meal.js";

//#region  get all
export const ExibirTodasMeals = async (req, res) =>{
    try {
        
        const meals = await meal.find({})
        res.status(200).json(meals)

    } catch (error) {
        res.status(500).json({message: error.message} )
    }
};
//#endregion


//#region  criar meals

export const criarMeal = async (req, res) => {
try {
    
    const resposta = await meal.create({...req.body, user: req.userId});
    res.status(200).json(resposta)

} catch (error) {
    res.status(500).json({message: error.message});
}
};
//#endregion

 
//#region  exebir meals por id
export const exibirMealId = async (req, res) => {
    try {
        const {id} = req.params;

        const mealId = await meal.findById(id);       
       return res.status(200).json(mealId)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
//#endregion

//#region  atualiza meals por id
export const atualizarMeal = async (req, res) => {
    try {
        const {id} = req.params;

        const refeicaoAtualizada = await meal.findByIdAndUpdate(id, req.body,{
            new: true,
        });  

        if(!refeicaoAtualizada){
            return res.status(404).json({message:"Id da refeição não encontrada"})
        }

     
      res.status(200).json(refeicaoAtualizada)


    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
//#endregion

//#region  deletar meals por id
export const DeletarMeal = async (req, res) => {
    try {
        const {id} = req.params;

        const mealId = await meal.findByIdAndDelete(id);  

        if(!mealId){
            return res.status(404).json({message:"Id da Refeição não encontrado"})
        }

        return res.status(200).json({message: "Refeição deletada com sucesso"})



    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
//#endregion