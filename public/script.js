 document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formPedido");
  const resumo = document.getElementById("resumo");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let total = 0;
      let descricao = [];

      // Pizza (radio)
      const pizza = form.querySelector("input[name='pizza']:checked");
      if (pizza) {
        total += parseFloat(pizza.value);
        descricao.push(`Pizza escolhida: R$${pizza.value}`);
      }

      // Extras (checkbox)
      const extras = form.querySelectorAll("input[name='extra']:checked");
      extras.forEach(extra => {
        total += parseFloat(extra.value);
        descricao.push(`Adicional: R$${extra.value}`);
      });

      // Mostrar resumo
      resumo.innerHTML = descricao.join("<br>") + `<br><strong>Total: R$${total}</strong>`;
    });
  }
});
