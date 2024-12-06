document.querySelectorAll(".marquee").forEach((marquee) => {
  const marqueeContent = marquee.querySelector(".marquee-content");

  if (marqueeContent) {
    // Clonar el contenido sin generar espacios adicionales
    const clone = marqueeContent.cloneNode(true);
    marquee.appendChild(clone);

    // Asegurar que el ancho del contenedor soporte ambas listas consecutivamente
    const totalWidth = marqueeContent.scrollWidth;

    // Configurar la animación infinita
    const animate = () => {
      let position = 0; // Inicializar posición

      const loop = () => {
        position -= 1; // Reducir posición para desplazarse hacia la izquierda

        // Reiniciar la posición al finalizar el ciclo
        if (Math.abs(position) >= totalWidth) {
          position = 0;
        }

        // Aplicar transformación para ambas copias
        marquee.querySelectorAll(".marquee-content").forEach((content) => {
          content.style.transform = `translateX(${position}px)`;
        });

        requestAnimationFrame(loop); // Continuar la animación
      };

      loop();
    };

    animate();
  }
});
