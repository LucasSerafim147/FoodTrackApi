import meal from  "../models/meal.js";
import cloudinary from "../config/cloudinary.js";

//#region  get all
 export const ExibirTodasMeals = async (req, res) => {
  try {
    const mealsList = await meal.find({ user: req.userId }); // ← busca só as do usuário logado
    res.json({ meals: mealsList });
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar refeições" });
  }
};
//#endregion


//#region  criar meals

export const criarMeal = async (req, res) => {
  try {
    console.log('Corpo da requisição:', req.body);
    console.log('Arquivo recebido:', req.file);

    const { titulo, descricao } = req.body;

    
    if (!titulo || !descricao) {
      return res.status(400).json({ message: 'Título e descrição são obrigatórios' });
    }

    let imageUrl = '';
    if (req.file) {
      const buffer = req.file.buffer;
      console.log('Enviando imagem ao Cloudinary, tamanho do buffer:', buffer.length);

      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'meals' },
          (error, result) => {
            if (error) {
              console.error('Erro no Cloudinary:', error);
              return reject(error);
            }
            resolve(result);
          }
        );
        stream.end(buffer);
      });

      imageUrl = result.secure_url;
      console.log('URL da imagem gerada:', imageUrl);
    } else {
      console.log('Nenhum arquivo de imagem recebido');
    }

   
    if (!req.userId) {
      return res.status(401).json({ message: 'Usuário não autenticado' });
    }

    const novaRefeicao = await meal.create({
      titulo,
      descricao,
      imagem: imageUrl,
      user: req.userId,
    });

    res.status(201).json(novaRefeicao); 
  } catch (error) {
    console.error('Erro ao criar refeição:', error);
    res.status(500).json({
      message: error.message || 'Erro interno ao criar refeição',
    });
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