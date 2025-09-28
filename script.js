// FILE: script.js
// Interatividade básica: CTA e FAQ accordion

document.addEventListener('DOMContentLoaded', function () {
  // Botões de CTA
  const buyBtn = document.getElementById('buyBtn');
  const sampleBtn = document.getElementById('sampleBtn');

  if (buyBtn) {
    buyBtn.addEventListener('click', () => {
        alert('Obrigado pelo seu interesse! Você será redirecionado para um de nossos consultores no WhatsApp para continuar o atendimento. clique em OK para continuar.');
         const numero = "553598586996"; // coloque seu número aqui
            const mensagem = "Olá! Tenho interesse na ração Goodnut Premium Especial para gatos castrados. Pode me passar mais informações?";
            const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
            window.open(url, "_blank");
});

      
  }

  if (sampleBtn) {
    sampleBtn.addEventListener('click', () => {
      alert('Amostra grátis adicionada ao carrinho. Insira seus dados na página de checkout (exemplo).');
      // abrir modal de captura de email ou formulário
    });
  } else {
    console.warn('Botão sampleBtn não encontrado.');
  }

  // FAQ accordion
  const qaItems = document.querySelectorAll('.qa');
  console.log('Elementos .qa encontrados:', qaItems.length);
  qaItems.forEach(item => {
    const q = item.querySelector('.q');
    const a = item.querySelector('.a');
    if (q && a) {
      q.addEventListener('click', () => {
        console.log('Clicou em:', q.textContent);
        const opened = a.classList.contains('active');
        // Fechar todas as respostas
        qaItems.forEach(el => {
          const otherA = el.querySelector('.a');
          if (otherA) otherA.classList.remove('active');
        });
        // Abrir ou fechar a resposta clicada
        if (!opened) a.classList.add('active');
      });
    } else {
      console.warn('Elementos .q ou .a não encontrados em:', item);
    }
  });
});



