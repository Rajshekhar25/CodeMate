const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ 
    
    model: "gemini-2.0-flash",
    systemInstruction:'You are a code revieer, who has an expertise in development. You look at the code and find the problems and suggest the solution to the developer. You always try to make the code most efficient and clean'
    
   

    

});

async function main() {
    const prompt = "Explain how AI works";

    // This is where we use await inside an async function
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
}

main();  // Call the async function

async function generateContent(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = generateContent;
