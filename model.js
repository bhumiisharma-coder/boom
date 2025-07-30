// models/Submission.js
const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  inquiryType: String,
  message: String,
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Submission', submissionSchema);
