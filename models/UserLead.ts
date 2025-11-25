import mongoose from 'mongoose';

const UserLeadSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please provide a full name'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email',
    ],
  },
  phone: {
    type: String,
    required: [true, 'Please provide a phone number'],
    unique: true,
    maxlength: [15, 'Phone number cannot be more than 15 characters'],
  },
  loanType: {
    type: String,
    required: [true, 'Please specify a loan type'],
    enum: [
      'Personal Loans',
      'Home Loans',
      'Business Loans',
      'Education Loans',
      'Auto Loans',
      'Debt Consolidation',
    ],
  },
  loanAmount: {
    type: Number,
    required: [true, 'Please specify a loan amount'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.UserLead || mongoose.model('UserLead', UserLeadSchema);
