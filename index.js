async function askAI() {
    try {
      const response = await fetch("http://localhost:5000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Hello, OpenAI!" }),
      });
  
      const data = await response.json();
      console.log("AI Response:", data);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  }
  
  // Run the function when the page loads
  askAI();
  