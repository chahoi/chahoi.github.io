document.addEventListener("DOMContentLoaded", () => {
  // Typing Effect
  const typeEffect = (element, speed) => {
    const text = element.innerHTML;
    element.innerHTML = "";
    let i = 0;

    const type = () => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    };

    type();
  };

  const heroTitle = document.querySelector(".hero h1");
  typeEffect(heroTitle, 100);

  // Scroll Reveal
  const scrollElements = document.querySelectorAll(".scroll-reveal");

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("in-view");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", handleScrollAnimation);

  // Custom Cursor
  const cursor = document.querySelector(".custom-cursor");

  document.addEventListener("mousemove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });
});
