document.addEventListener("DOMContentLoaded", () => {
  // Manejador para el cambio de pestañas
  const loginTab = document.getElementById("login-tab");
  const registerTab = document.getElementById("register-tab");

  loginTab.addEventListener("click", () => {
    showSection("login");
  });

  registerTab.addEventListener("click", () => {
    showSection("register");
  });

  // Función para mostrar la sección correspondiente
  function showSection(section) {
    if (section === "login") {
      document.getElementById("login").classList.add("show", "active");
      document.getElementById("register").classList.remove("show", "active");
    } else {
      document.getElementById("register").classList.add("show", "active");
      document.getElementById("login").classList.remove("show", "active");
    }
  }

  // Validación de formularios
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateLogin()) {
      // Aquí puedes agregar el manejo de inicio de sesión
      alert("Inicio de sesión exitoso");
    }
  });

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateRegistration()) {
      const userData = {
        name: document.getElementById("name").value,
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        city: document.getElementById("city").value,
        password: document.getElementById("registerPassword").value,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      alert("Registro exitoso");
      registerForm.reset();
    }
  });

  // Función para validar el inicio de sesión
  function validateLogin() {
    const email = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!emailPattern.test(email)) {
      alert("Correo electrónico no válido");
      return false;
    }
    if (!passwordPattern.test(password)) {
      alert(
        "La contraseña debe tener al menos una letra mayúscula, un número, un símbolo y 8 caracteres"
      );
      return false;
    }
    return true;
  }

  // Función para validar el registro
  function validateRegistration() {
    const name = document.getElementById("name").value;
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const city = document.getElementById("city").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const textPattern = /^[A-Za-z\sáéíóúñÁÉÍÓÚ]+$/;
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (name.length > 50 || !textPattern.test(name)) {
      alert("Nombre no válido o demasiado largo");
      return false;
    }
    if (fullName.length > 50 || !textPattern.test(fullName)) {
      alert("Apellidos no válidos o demasiado largos");
      return false;
    }
    if (!emailPattern.test(email)) {
      alert("Correo electrónico no válido");
      return false;
    }
    if (age < 1 || age > 120) {
      alert("Edad no válida");
      return false;
    }
    if (city.length > 50 || !textPattern.test(city)) {
      alert("Ciudad no válida o demasiado larga");
      return false;
    }
    if (!passwordPattern.test(password)) {
      alert(
        "La contraseña debe tener al menos una letra mayúscula, un número, un símbolo y 8 caracteres"
      );
      return false;
    }
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return false;
    }
    return true;
  }
});
