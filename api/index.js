// api/index.js
module.exports = (req, res) => {
  res.status(200).json({ 
    message: "Hello from the automated Serverless Pipeline!",
    student: "Ready for full marks!" 
  });
};