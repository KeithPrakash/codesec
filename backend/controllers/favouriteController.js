import favoriteSchema from "../models/favourite.js";


const addFavorite = async (req, res) => {
    const { recipeId, title, image } = req.body;
    const userId = req.user.id;
  

        
    try {


      const existingFavorite = await favoriteSchema.findOne({ user: userId, recipeId });

    if (existingFavorite) {
      return res.status(400).json({ error: 'Recipe is already in favorites' });
    }
      const favorite = new favoriteSchema({
        user: userId,
        recipeId,
        title,
        image,
      });
      await favorite.save();
      res.json(favorite);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add favorite' });
    }
  };
  
const getFavorites = async (req, res) => {
    try {
      const favorites = await favoriteSchema.find({ user: req.user.id });
      res.json(favorites);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch favorites' });
    }
  };
  
 const removeFavorite = async (req, res) => {
    const { id } = req.params;
  
    try {
      await favoriteSchema.findByIdAndDelete(id);
      res.json({ message: 'Favorite removed' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to remove favorite' });
    }
  };


  export {getFavorites ,removeFavorite,addFavorite}