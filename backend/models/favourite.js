import mongoose from "mongoose";

const favoriteSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
      },
      recipeId: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
  
      image: {
        type: String,
        required: true,
      },
})

export default mongoose.model('favorite',favoriteSchema);