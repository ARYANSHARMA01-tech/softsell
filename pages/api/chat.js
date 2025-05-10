export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Only POST method is allowed" });
    }
  
    const { message } = req.body;
    const messageLower = message.toLowerCase();
  
    // Hardcoded questions and responses
    const predefinedResponses = {
      "how do i sell my license?": "To sell your license, please visit the 'Sell License' page on our website and follow the instructions provided there.",
      "what are your payment methods?": "We accept payments via credit card, PayPal, and bank transfers. You can find more details on our payments page.",
      "how can i contact support?": "You can contact our support team by emailing support@yourcompany.com or using the live chat on our website.",
      "what is the return policy?": "We offer a 30-day return policy on all purchases. Please visit our returns page for more information.",
      "how do i track my order?": "To track your order, simply log into your account and go to the 'Order History' section, where you can track the status of your order.",
      "how can I reset my password?": "To reset your password, go to the 'Forgot Password' section on the login page, enter your registered email, and follow the instructions sent to your inbox."
    };
  
    // Check if the user's message matches any predefined questions
    for (let question in predefinedResponses) {
      if (messageLower.includes(question)) {
        return res.status(200).json({ reply: predefinedResponses[question] });
      }
    }
  
    // If no predefined response, return a generic response
    res.status(200).json({ reply: "Sorry, I don't have an answer for that. Please ask a specific question related to our services." });
  }
  