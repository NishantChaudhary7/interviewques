// Simulating a database with JSON
const database = {
    
    "Google": [
        "Explain the difference between deep learning and machine learning.",
        "How does a convolutional neural network (CNN) work?",
        "What are the key features of TensorFlow?",
        "Explain the concept of overfitting in machine learning.",
        "What is a recurrent neural network (RNN)?",
        "How does Google search ranking work?",
        "Explain PageRank algorithm.",
        "Describe a time you solved a challenging technical problem.",
        "What is transfer learning?",
        "How do you handle imbalanced datasets?",
        "Explain the difference between supervised and unsupervised learning.",
        "What is the purpose of regularization in machine learning?",
        "Describe a project where you used machine learning.",
        "What is AutoML?",
        "How do you improve the performance of a machine learning model?"
    ],
    "Microsoft": [
        "What is the purpose of the gradient in machine learning?",
        "How would you optimize a neural network?",
        "Explain Microsoft's approach to cloud computing.",
        "What is Azure Machine Learning?",
        "How does Microsoft Teams handle real-time communication?",
        "Describe a scenario where you used Azure for a project.",
        "What is Microsoft's HoloLens, and how does it work?",
        "How do you manage large-scale data on Azure?",
        "What is the difference between batch and stream processing?",
        "Explain the concept of DevOps.",
        "What are the key features of C#?",
        "How does Microsoft handle security in its products?",
        "What is the role of AI in Microsoft Office 365?",
        "How do you deploy machine learning models on Azure?",
        "What is the purpose of Microsoft's Cognitive Services?"
    ],
    "Amazon": [
        "What is AWS, and why is it important?",
        "How does Amazon use machine learning in its recommendation system?",
        "Explain the concept of S3 in AWS.",
        "How do you ensure scalability in cloud-based applications?",
        "Describe a time you worked on a high-availability system.",
        "What is Amazon's DynamoDB, and how does it work?",
        "How do you optimize costs in AWS?",
        "Explain the difference between EC2 and Lambda.",
        "What is the importance of microservices in AWS architecture?",
        "How do you implement security in AWS?",
        "What is Amazon Redshift?",
        "Explain the purpose of AWS Lambda.",
        "What are the key features of Amazon RDS?",
        "How does Amazon handle big data?",
        "What is the significance of the shared responsibility model in AWS?"
    ],
    "Facebook": [
        "How does Facebook's news feed algorithm work?",
        "What is the purpose of GraphQL?",
        "Explain the concept of social network analysis.",
        "How does Facebook use machine learning for content moderation?",
        "Describe a scenario where you used React for a project.",
        "What is Facebook's approach to data privacy?",
        "How does Facebook handle large-scale image processing?",
        "What is the significance of Facebook's open-source projects?",
        "How do you manage user authentication in a social media platform?",
        "Explain the concept of the social graph.",
        "What are the key features of Facebook's Messenger?",
        "How does Facebook implement real-time chat functionality?",
        "What is the role of AI in Facebook's advertising system?",
        "How does Facebook handle distributed systems?",
        "Explain the concept of deep learning as used in Facebook's AI models."
    ],
    "Apple": [
        "What is Apple's approach to user experience design?",
        "Explain the importance of Swift in iOS development.",
        "How does Apple handle security in its products?",
        "Describe a scenario where you optimized an app for performance.",
        "What is the role of AI in Siri?",
        "How does Apple manage data privacy?",
        "What are the key features of macOS?",
        "How do you design a seamless user experience for mobile apps?",
        "What is Apple's approach to cloud services?",
        "How does Apple handle app distribution on the App Store?",
        "Explain the concept of ARKit.",
        "What is Core ML, and how is it used?",
        "How does Apple implement accessibility in its products?",
        "What is the significance of Apple's hardware-software integration?",
        "How do you ensure cross-device compatibility in Apple's ecosystem?"
    ],
    "Tesla": [
        "What is Tesla's approach to autonomous driving?",
        "How does Tesla use machine learning in its vehicles?",
        "Explain the concept of over-the-air updates.",
        "What is the significance of Tesla's battery technology?",
        "Describe a scenario where you worked on a real-time system.",
        "How does Tesla handle data collection and analysis from its vehicles?",
        "What is the role of AI in Tesla's autopilot system?",
        "How does Tesla ensure safety in autonomous driving?",
        "What are the key features of Tesla's energy products?",
        "Explain Tesla's approach to sustainable energy.",
        "What is the significance of Tesla's Gigafactories?",
        "How does Tesla manage software development for its vehicles?",
        "What is the role of AI in Tesla's manufacturing process?",
        "How does Tesla implement vehicle-to-grid technology?",
        "What is the future of autonomous driving according to Tesla?"
    ],
    "Netflix": [
        "How does Netflix use machine learning in its recommendation system?",
        "What is the significance of Netflix's content delivery network (CDN)?",
        "Explain Netflix's approach to A/B testing.",
        "How does Netflix handle large-scale video streaming?",
        "Describe a scenario where you optimized a streaming service for performance.",
        "What is the role of AI in Netflix's content creation?",
        "How does Netflix manage global content distribution?",
        "What are the key features of Netflix's microservices architecture?",
        "How does Netflix ensure high availability of its service?",
        "Explain the concept of chaos engineering.",
        "What is the significance of Netflix's open-source projects?",
        "How does Netflix handle user authentication?",
        "What is the role of data analytics in Netflix's business model?",
        "How does Netflix manage content recommendations across different regions?",
        "Explain Netflix's approach to cloud computing."
    ],
    "IBM": [
        "What is IBM's approach to quantum computing?",
        "How does IBM Watson work?",
        "Explain the significance of IBM's mainframe systems.",
        "How does IBM manage large-scale data processing?",
        "Describe a scenario where you used IBM Cloud for a project.",
        "What is the role of AI in IBM's enterprise solutions?",
        "How does IBM handle cybersecurity in its products?",
        "What are the key features of IBM's blockchain technology?",
        "How does IBM implement AI in healthcare?",
        "Explain the concept of hybrid cloud as used by IBM.",
        "What is IBM's approach to AI ethics?",
        "How does IBM manage open-source contributions?",
        "What is the significance of IBM's research in AI?",
        "How does IBM handle AI model training at scale?",
        "Explain the concept of explainable AI as implemented by IBM."
    ],
    "Adobe": [
        "How does Adobe use AI in its Creative Cloud products?",
        "What is the significance of Adobe's PDF format?",
        "Explain the concept of vector graphics as used in Adobe Illustrator.",
        "How does Adobe manage color accuracy in its software?",
        "Describe a scenario where you used Adobe Photoshop for a project.",
        "What is the role of AI in Adobe's marketing solutions?",
        "How does Adobe handle large-scale digital content management?",
        "What are the key features of Adobe XD?",
        "How does Adobe implement cloud-based collaboration?",
        "Explain the concept of motion graphics as used in Adobe After Effects.",
        "What is the significance of Adobe's open-source projects?",
        "How does Adobe manage user experience design in its products?",
        "What is the role of AI in Adobe's video editing tools?",
        "How does Adobe handle cross-platform compatibility?",
        "Explain Adobe's approach to digital media optimization."
    ],
    "Intel": [
        "What is Intel's approach to semiconductor manufacturing?",
        "How does Intel handle CPU architecture design?",
        "Explain the significance of Intel's process nodes.",
        "How does Intel manage large-scale chip production?",
        "Describe a scenario where you optimized software for Intel processors.",
        "What is the role of AI in Intel's products?",
        "How does Intel implement security in its processors?",
        "What are the key features of Intel's FPGA technology?",
        "How does Intel handle data center optimization?",
        "Explain the concept of parallel processing as used by Intel.",
        "What is the significance of Intel's work in autonomous driving?",
        "How does Intel manage energy efficiency in its chips?",
        "What is the role of Intel's software development tools?",
        "How does Intel handle cross-platform compatibility?",
        "Explain the future of computing according to Intel."
    ],
    // Add more companies and their questions here
};

function searchQuestions() {
    const companyName = document.getElementById('companyName').value;
    const resultsDiv = document.getElementById('results');
    
    // Clear previous results
    resultsDiv.innerHTML = '';

    // Search in the database
    if (database[companyName]) {
        database[companyName].forEach((question) => {
            const p = document.createElement('p');
            p.textContent = question;
            resultsDiv.appendChild(p);
        });
    } else {
        resultsDiv.textContent = 'No interview questions found for this company.';
    }
}
