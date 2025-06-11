import meal from  "../models/meal.js";

//#region  get all
export const ExibirTodasMeals = async (req, res) =>{
    try {
        
        const meals = await meals.find({})
        res.status(200).json(meals)

    } catch (error) {
        res.status(500).json({message: error.message} )
    }
};
//#endregion


//#region  criar usuario



export const criarMeal = async (req, res) => {
try {
    
    const resposta = await meal.create(req.body)
    res.status(200).json(resposta)

} catch (error) {
    res.status(500).json({message: error.message});
}
};
//#endregion

 
//#region  exebir usuario por id
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

//#region  atualiza usuario por id
export const atualizarMeal = async (req, res) => {
    try {
        const {id} = req.params;

        const mealId = await meal.findByIdAndUpdate(id, req.body);  

        if(!mealId){
            return res.status(404).json({message:"Id do usuário não encontrado"})
        }

      const mealAtualizado = await user.findById(id);
      res.status(200).json(mealAtualizado)


    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
//#endregion

//#region  deletar usuario por id
export const DeletarMeal = async (req, res) => {
    try {
        const {id} = req.params;

        const userId = await user.findByIdAndDelete(id);  

        if(!userId){
            return res.status(404).json({message:"Id da Refeição não encontrado"})
        }

        return res.status(200).json({message: "Refeição deletada com sucesso"})



    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
//#endregion