document.addEventListener("DOMContentLoaded", function() {
    // Get all buttons
    const signupBtn = document.getElementById("icon-signup");
    const loginBtn = document.getElementById("icon-login");
    const guestBtn = document.getElementById("icon-guest");
    
    const signupSection = document.getElementById("signup-section");
    const loginSection = document.getElementById("login-section");
    const appSection = document.getElementById("app-section");

    // Initially hide all forms
    signupSection.style.display = "none";
    loginSection.style.display = "none";
    appSection.style.display = "none";

    // Sign up button - show signup form
    signupBtn.onclick = function() {
        signupSection.style.display = "block";
        loginSection.style.display = "none";
        appSection.style.display = "none";
    };

    // Login button - show login form
    loginBtn.onclick = function() {
        loginSection.style.display = "block";
        signupSection.style.display = "none";
        appSection.style.display = "none";
    };

    // GUEST BUTTON - OPEN NEW POPUP WINDOW
    guestBtn.onclick = function() {
        // Open new popup window with guest content
        const guestWindow = window.open("", "guestWindow", "width=500,height=400,scrollbars=yes,resizable=yes");
        
        guestWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Main page (guest)</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; text-align: center; }
                    h1 { color: #4CAF50; }
                    button { padding: 10px 20px; background: #f44336; color: white; border: none; cursor: pointer; }
                </style>
            </head>
            <body>
                <h1>Main page (guest)</h1>
                <p>You are using the app as a guest!</p>
                <br>
                <button onclick="window.close()">Close Window</button>
            </body>
            </html>
        `);
        
        guestWindow.document.close();
        guestWindow.focus();
    };
});