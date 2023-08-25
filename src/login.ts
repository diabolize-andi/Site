import { Form } from "./global/form/Form.js";
import { EmailInput } from "./components/inputs/EmailInput.js";
import { Popup } from "./global/Popup.js"
import { PasswordInput } from "./components/inputs/PasswordInput.js";
import { API } from "./API/API.js";

const loginButton = document.getElementById("login-btn");
 if(loginButton) {
    loginButton.onclick = () => {
        const loginForm = new Form([
            {name: "email", input: new EmailInput(true, "your Email")},
            {name: "password", input: new PasswordInput("Your password", true)}
        ], "Connexion");
        loginForm.setSendFunction(() => {
            const email = loginForm.getInput("email");
            const password = loginForm.getInput("password");
            console.log(password);
            if(email && password) {
                const emailValue = email.getValue();
                const passwordValue = password.getValue();
                if(typeof emailValue === "string" && typeof passwordValue === "string") {
                    API.login(emailValue, passwordValue);
                }
            }
        })
        new Popup(loginForm.getForm(), "Connexion").generate();
        
    }
 }
