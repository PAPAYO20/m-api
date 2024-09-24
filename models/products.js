import { Schema, model } from 'mongoose';

const productSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
  },
);

export default model('Product', productSchema);