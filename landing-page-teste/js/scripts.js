// Função para alternar FAQ
function toggleFaq(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Fecha todos os outros FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Se não estava ativo, abre este
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Inicialização quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", function() {
    console.log("Scripts carregados com sucesso");
    
    // Adiciona event listeners para os botões de FAQ
    const faqButtons = document.querySelectorAll('.faq-question');
    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            toggleFaq(this);
        });
    });
    
    // Adiciona event listeners para os botões de compra
    const buyButtons = document.querySelectorAll('.add-to-cart-btn, .order-now-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Aqui você pode adicionar a lógica de compra
            console.log('Botão de compra clicado');
            alert('Funcionalidade de compra seria implementada aqui');
        });
    });
    
    // Smooth scroll para links internos
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Função para detectar scroll e adicionar efeitos
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Efeito parallax no hero (opcional)
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Função para animar elementos quando entram na viewport
function animateOnScroll() {
    const elements = document.querySelectorAll('.kit-card, .faq-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Adiciona listener para animação no scroll
window.addEventListener('scroll', animateOnScroll);

// Executa uma vez no carregamento
document.addEventListener('DOMContentLoaded', animateOnScroll);

