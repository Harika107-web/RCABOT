import React, { useState } from 'react';

const RcaBot = () => {
    const [apiUrl, setApiUrl] = useState('');
    const [jsonBody, setJsonBody] = useState('');
    const [apiResponse, setApiResponse] = useState(null);
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Send a POST request to the API endpoint
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: jsonBody
            });

            if (!response.ok) {
                throw new Error('Response was not ok');
            }

            // If the response was ok, get the result
            const result = await response.json();

            setApiResponse(JSON.stringify(result));

        } catch (error) {
            console.error('Something went wrong!', error);
            setApiResponse(`Error: ${error}`);
        }
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input style={{ width: "100%",
  padding: "12px 20px",
  margin: "8px 0",
  "box-sizing": "border-box",
  "border": "2px solid green",
  "border-radius": "4px",
  resize: "vertical",
  "font-size": "1rem"}}
                    type="text" 
                    value={apiUrl} 
                    onChange={(event) => setApiUrl(event.target.value)}
                    placeholder="API URL" 
                />
                <textarea  style={{ width: "100%",
  padding: "12px 20px",
  margin: "8px 0",
  "box-sizing": "border-box",
  "border": "2px solid green",
  "border-radius": "4px",
  resize: "vertical",
  "font-size": "1rem"}}
                    value={jsonBody}
                    onChange={(event) => setJsonBody(event.target.value)}
                    placeholder="JSON Body" 
                />
                <button 
                style={{
                    "fontSize": "1em", /* relative unit, will change according to the screen size */
                    "display": "inline-block",
                    "padding": "10px 20px",
                    "margin": "10px 0",
                    "cursor": "pointer",
                    "backgroundColor": "#008CBA", /* blue */
                    "color": "white", /* white text */
                    "border": "none",
                    "borderRadius": "15px",
                    "textAlign": "center",
                    "textDecoration": "none",
                    "transitionDuration": "0.4s"
                  }}
                
                type="submit">Submit</button>
            </form>
            <div>
                <h2>API Response:</h2>
                <pre>{apiResponse}</pre>
            </div>
        </div>
    );
}

export default RcaBot;