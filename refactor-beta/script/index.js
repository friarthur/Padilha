document.addEventListener("DOMContentLoaded", () => {
  const cookiePopup = document.getElementById("cookie-popup");
  const acceptButton = document.getElementById("accept-cookies");
  const rejectButton = document.getElementById("reject-cookies");

  // Verifica se o consentimento já foi dado
  if (getCookie("cookie_consent") !== null) {
    cookiePopup.style.display = "none"; // Esconde o pop-up se já houver consentimento
  }

  // Aceitar cookies
  acceptButton.addEventListener("click", () => {
    setCookie("cookie_consent", "accepted", 365); // Define o consentimento por 1 ano
    cookiePopup.style.display = "none"; // Esconde o pop-up
  });

  // Rejeitar cookies
  rejectButton.addEventListener("click", () => {
    setCookie("cookie_consent", "rejected", 365); // Define rejeição por 1 ano
    cookiePopup.style.display = "none"; // Esconde o pop-up
  });

  // Função para definir um cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  }

  // Função para obter um cookie
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const [key, value] = cookies[i].split("=");
      if (key === name) {
        return value;
      }
    }
    return null;
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(".hero-box, .presentation-container, .service-card, .cookie-popup");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Para observar apenas uma vez
        }
      });
    },
    { threshold: 0.2 } // Quando 10% do elemento estiver visível
  );

  elementsToAnimate.forEach((element) => {
    element.classList.add("hidden"); // Adiciona o estado inicial
    observer.observe(element); // Começa a observar
  });
});
