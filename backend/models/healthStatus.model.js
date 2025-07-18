import mongoose from 'mongoose';

const SickleCellFormSchema = new mongoose.Schema({
  crisisTriggers: {
    type: String,
    required: true
  },
  sickleCellType: {
    type: String,
    enum: ['SS', 'SC'],
    required: true
  },
  crisisFrequency: {
    type: String,
    enum: ['Often (within 2-4 months)', 'Sometimes (within 5-12 months)', 'Rarely (once a year)'],
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

const SickleCellForm = mongoose.model('SickleCellForm', SickleCellFormSchema);
export default SickleCellForm;
