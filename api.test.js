// api.test.js
const handler = require('./api/index.js');

test('API returns successful status and correct message', () => {
  // 1. Mock the request and response objects
  const req = {};
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  };

  // 2. Call the function
  handler(req, res);

  // 3. Assert the expected results
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ 
    message: "Hello from the automated Serverless Pipeline!",
    student: "Ready for full marks!" 
  });
});