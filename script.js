// Interatividade básica: CTA e FAQ accordion


document.addEventListener('DOMContentLoaded',function(){
const buyBtn = document.getElementById('buyBtn');
const sampleBtn = document.getElementById('sampleBtn');


buyBtn.addEventListener('click',()=>{
alert('Obrigado! Você será redirecionado para a página de compra do nosso fornecedor.');
location.href = 'https://s.shopee.com.br/4VTlEzUTsW'; // substituir pelo link real
});


sampleBtn.addEventListener('click',()=>{
alert('Amostra grátis adicionada ao carrinho. Insira seus dados na página de checkout (exemplo).');
// abrir modal de captura de email ou formulário
});


// FAQ accordion
document.querySelectorAll('.qa').forEach(item=>{
const q = item.querySelector('.q');
const a = item.querySelector('.a');
q.addEventListener('click',()=>{
const opened = a.style.display === 'block';
// fechar todos
document.querySelectorAll('.qa .a').forEach(el=>el.style.display='none');
if(!opened) a.style.display = 'block';
});
});
});