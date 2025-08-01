// // server.js or index.js

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ✅ MongoDB connect
// mongoose.connect('mongodb://localhost:27017/formdb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.once('open', () => console.log('✅ MongoDB Connected'));

// // ✅ Define schema
// const submissionSchema = new mongoose.Schema({
//   fullName: String,
//   email: String,
//   inquiryType: String,
//   message: String,
//   submittedAt: {
//     type: Date,
//     default: Date.now,
//   }
// });
// const Submission = mongoose.model('Submission', submissionSchema);

// // ✅ Save form submission
// app.post('/submit', async (req, res) => {
//   try {
//     const newSubmission = new Submission(req.body);
//     await newSubmission.save();
//     res.status(200).json({ message: 'Submitted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to submit', error });
//   }
// });

// // ✅ Get all submissions (admin dashboard)
// // ✅ Get all submissions except admin@gmail.com
// app.get('/all-submissions', async (req, res) => {
//   try {
//     const all = await Submission.find({ email: { $ne: 'admin@gmail.com' } }).sort({ submittedAt: -1 });
//     res.status(200).json(all);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch data', error });
//   }
// });


// const PORT = 3000;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // ✅ Load .env

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once('open', () => console.log('✅ MongoDB Connected'));

// ✅ Schema
const submissionSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  inquiryType: String,
  message: String,
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});
const Submission = mongoose.model('Submission', submissionSchema);

// ✅ Submit form
app.post('/submit', async (req, res) => {
  try {
    const newSubmission = new Submission(req.body);
    await newSubmission.save();
    res.status(200).json({ message: 'Submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit', error });
  }
});

// ✅ Get all submissions
app.get('/all-submissions', async (req, res) => {
  try {
    const all = await Submission.find({ email: { $ne: 'admin@gmail.com' } }).sort({ submittedAt: -1 });
    res.status(200).json(all);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch data', error });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
