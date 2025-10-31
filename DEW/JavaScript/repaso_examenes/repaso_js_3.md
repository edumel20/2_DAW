# Ejercicio propuesto: continuación del registro y autenticación
#### Implementaremos las acciones con Javascript:
- Al pulsar uno u otro tab se actualizará la <section> correspondiente: registro o inicio de sesión.
- El campo usuario será un correo. Limitarlo en longitud y validarlo con expresiones regulares.
- El campo contraseña contendrá como mínimo:al menos una letra mayúscula, un número,
un símbolo y una longitud mínima de 8 caracteres. Validarlo con expresiones regulares.
- Al pulsar el botón “Registrarse” los datos se almacenamos en localStore().
- Para el Registro usa los campos que se ven en la captura de imagen de abajo.
- En el Registro limita la longitud de los campos, valida el correo con expresiones regulares.
Y si el campo es texto o número según proceda.

```javascript

// scripts.js

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    // --- Expresiones regulares ---
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    // Limitar longitud de campos
    const maxLengths = {
        name: 30,
        fullName: 50,
        email: 50,
        city: 40
    };

    for (const id in maxLengths) {
        const input = document.getElementById(id);
        input.setAttribute("maxlength", maxLengths[id]);
    }

    // --- Cambiar entre pestañas ---
    const tabs = document.querySelectorAll("#myTab button");
    const sections = document.querySelectorAll(".tab-pane");

    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            tabs.forEach(t => t.classList.remove("active"));
            sections.forEach(s => s.classList.remove("show", "active"));

            tab.classList.add("active");
            const target = document.querySelector(tab.dataset.bsTarget);
            target.classList.add("show", "active");
        });
    });

    // --- Validar LOGIN ---
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginUsername").value.trim();
        const password = document.getElementById("loginPassword").value;

        if (!emailRegex.test(email)) {
            alert("Por favor, introduce un correo válido.");
            return;
        }
        if (!passwordRegex.test(password)) {
            alert("Contraseña inválida. Debe tener al menos una mayúscula, un número, un símbolo y 8 caracteres.");
            return;
        }

        // Buscar usuario en localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            alert(`Bienvenido, ${user.name}!`);
        } else {
            alert("Correo o contraseña incorrectos.");
        }
    });

    // --- Validar y registrar ---
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const age = parseInt(document.getElementById("age").value.trim());
        const city = document.getElementById("city").value.trim();
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (!emailRegex.test(email)) {
            alert("Correo electrónico no válido.");
            return;
        }
        if (!passwordRegex.test(password)) {
            alert("La contraseña debe tener una mayúscula, un número, un símbolo y al menos 8 caracteres.");
            return;
        }
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }
        if (isNaN(age) || age <= 0) {
            alert("Introduce una edad válida.");
            return;
        }

        // Guardar usuario en localStorage
        const newUser = { name, fullName, email, age, city, password };
        const users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.some(u => u.email === email)) {
            alert("Ya existe un usuario con ese correo.");
            return;
        }

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registro exitoso. Ahora puedes iniciar sesión.");

        registerForm.reset();
        // Cambiar a tab de login
        document.getElementById("login-tab").click();
    });
});

```
