// ==================== DOM Elements ====================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const certificateImages = document.querySelectorAll('.certificate-image');
const certificateModal = document.getElementById('certificateModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const contactForms = document.querySelectorAll('.contact-form');

// ==================== NAVEGACIÓN MÓVIL ====================
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

if (navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        });
    });
}

// Cerrar menú al hacer scroll
window.addEventListener('scroll', () => {
    if (navMenu) navMenu.classList.remove('active');
    if (navToggle) navToggle.classList.remove('active');
});

// ==================== FILTRADO DE PROYECTOS ====================
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Actualizar botón activo
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Obtener categoría
        const filterValue = btn.getAttribute('data-filter');

        // Filtrar proyectos
        projectCards.forEach(card => {
            if (filterValue === 'todos') {
                card.classList.remove('hidden');
                card.style.animation = 'scaleIn 0.3s ease';
            } else {
                if (card.getAttribute('data-category') === filterValue) {
                    card.classList.remove('hidden');
                    card.style.animation = 'scaleIn 0.3s ease';
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});

// ==================== MODAL DE CERTIFICADOS ====================
if (certificateImages.length > 0 && certificateModal && modalImage) {
    const modalCloseBtn = certificateModal.querySelector('.close');

    function openCertModal(image) {
        modalImage.src = image.src;
        modalImage.alt = image.alt || 'Certificado profesional';
        if (modalCaption) {
            modalCaption.textContent = image.alt || 'Certificado profesional';
        }
        certificateModal.classList.add('show');
        certificateModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeCertModal() {
        certificateModal.classList.remove('show');
        certificateModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    certificateImages.forEach(image => {
        image.style.cursor = 'pointer';
        image.addEventListener('click', () => openCertModal(image));
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeCertModal);
    }

    // Cerrar al hacer clic fuera del contenido
    certificateModal.addEventListener('click', (e) => {
        if (e.target === certificateModal) {
            closeCertModal();
        }
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && certificateModal.classList.contains('show')) {
            closeCertModal();
        }
    });
}

// ==================== FORMULARIO DE CONTACTO ====================
const RECIPIENT_EMAIL = 'joseantoniolorenzotomas@gmail.com';

if (contactForms.length > 0) {
    contactForms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const feedback = form.querySelector('.form-feedback') || document.getElementById('formFeedback');

            const nameInput = form.querySelector('input[name="name"]');
            const emailInput = form.querySelector('input[name="email"]');
            const subjectInput = form.querySelector('input[name="subject"]');
            const messageInput = form.querySelector('textarea[name="message"]');

            const formData = {
                name: nameInput ? nameInput.value.trim() : '',
                email: emailInput ? emailInput.value.trim() : '',
                subject: subjectInput ? subjectInput.value.trim() : '',
                message: messageInput ? messageInput.value.trim() : ''
            };

            // Validación de campos vacíos
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                showFeedback(feedback, 'Por favor, completa todos los campos requeridos.', 'error');
                return;
            }

            // Validación de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showFeedback(feedback, 'Por favor, introduce un correo electrónico válido.', 'error');
                return;
            }

            // Deshabilitar botón y mostrar estado de carga
            const originalBtnText = submitBtn ? submitBtn.textContent : 'Enviar Mensaje';
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Enviando...';
            }

            try {
                // Envío directo a través del servicio de FormSubmit (en formato JSON)
                const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        _subject: `Portfolio Web: ${formData.subject} (de ${formData.name})`,
                        message: formData.message
                    })
                });

                const result = await response.json();

                if (response.ok && (result.success === 'true' || result.success === true || response.status === 200)) {
                    showFeedback(feedback, `¡Mensaje enviado con éxito a ${RECIPIENT_EMAIL}! Me pondré en contacto contigo lo antes posible.`, 'success');
                    form.reset();
                } else {
                    throw new Error(result.message || 'Error en el servicio de envío');
                }
            } catch (err) {
                console.warn('Fallo en envío directo, utilizando fallback de correo local:', err);

                // Fallback automático por cliente de correo (mailto)
                const mailtoSubject = encodeURIComponent(`[Portfolio Web] ${formData.subject}`);
                const mailtoBody = encodeURIComponent(
                    `Hola Jose Antonio,\n\n` +
                    `Nombre: ${formData.name}\n` +
                    `Email: ${formData.email}\n` +
                    `Asunto: ${formData.subject}\n\n` +
                    `Mensaje:\n${formData.message}\n`
                );

                window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;
                showFeedback(feedback, `Abriendo tu cliente de correo para enviar a ${RECIPIENT_EMAIL}...`, 'success');
                form.reset();
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                }
            }
        });
    });
}

function showFeedback(feedbackElement, message, type) {
    if (!feedbackElement) return;
    feedbackElement.textContent = message;
    feedbackElement.className = `form-feedback ${type}`;

    // Limpiar feedback después de 6 segundos
    setTimeout(() => {
        feedbackElement.textContent = '';
        feedbackElement.className = 'form-feedback';
    }, 6000);
}

// ==================== OBSERVADOR DE INTERSECCIÓN ====================
// Animar elementos cuando entran al viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos con clase animate-on-scroll (si los hay)
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ==================== DESPLAZAMIENTO SUAVE ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== SCROLL SUAVE PARA LA NAVBAR ====================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const floatingLogo = document.querySelector('.floating-logo');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-md)';
    }
    
    // Mostrar/ocultar logo flotante
    if (floatingLogo) {
        if (scrollTop > 300) {
            floatingLogo.classList.add('visible');
        } else {
            floatingLogo.classList.remove('visible');
        }
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ==================== CONTADOR DE ESTADÍSTICAS ====================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Animar contadores cuando se hacen visibles
const stats = document.querySelectorAll('.stat-number');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            stats.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ==================== UTILIDADES ====================
// Función para copiar al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copiado al portapapeles');
    });
}

// Detectar modo oscuro del sistema
function initializeDarkMode() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark && !localStorage.getItem('theme')) {
        // Opcional: aplicar tema oscuro
        console.log('Sistema en modo oscuro detectado');
    }
}

initializeDarkMode();

// ==================== INICIALIZACIÓN ====================
console.log('Portfolio de José A. Lorenzo - Cargado correctamente');