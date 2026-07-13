// header
// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');

    if (menuBtn && mobileMenu && iconOpen && iconClose) {
        menuBtn.addEventListener('click', () => {
            const isMenuHidden = mobileMenu.classList.contains('hidden');
            
            if (isMenuHidden) {
                mobileMenu.classList.remove('hidden');
                menuBtn.setAttribute('aria-expanded', 'true');
                // Cambiar íconos
                iconOpen.classList.add('hidden');
                iconClose.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
                menuBtn.setAttribute('aria-expanded', 'false');
                // Cambiar íconos
                iconOpen.classList.remove('hidden');
                iconClose.classList.add('hidden');
            }
        });

        // Opcional: Cierra el menú automáticamente al pulsar un enlace en móviles
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuBtn.setAttribute('aria-expanded', 'false');
                iconOpen.classList.remove('hidden');
                iconClose.classList.add('hidden');
            });
        });
    }
});

// COTIZADOR no funiona
document.addEventListener('DOMContentLoaded', () => {
    const cotizadorForm = document.querySelector('#cotizador form');
    const totalPanel = document.getElementById('total-cotizacion');
    const montoTotalEl = document.getElementById('monto-total');
    const resumenPlanEl = document.getElementById('resumen-plan');
    const resumenExtrasEl = document.getElementById('resumen-extras');

    function formatearGuaranies(numero) {
        return new Intl.NumberFormat('es-PY', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(numero);
    }

    function calcularTotal() {
        const planSeleccionado = cotizadorForm.querySelector('input[name="plan_base"]:checked');
        
        if (!planSeleccionado) {
            if (montoTotalEl) montoTotalEl.textContent = "0";
            if (resumenPlanEl) resumenPlanEl.textContent = "Selecciona un plan para comenzar";
            if (resumenExtrasEl) resumenExtrasEl.textContent = "0";
            return;
        }

        let total = parseInt(planSeleccionado.getAttribute('data-precio')) || 0;
        
        const nombrePlan = planSeleccionado.closest('label').querySelector('span').textContent.trim();
        if (resumenPlanEl) resumenPlanEl.textContent = nombrePlan;

        const extrasMarcados = cotizadorForm.querySelectorAll('input[type="checkbox"]:checked');
        let contadorExtras = 0;

        extrasMarcados.forEach(checkbox => {
            const precioExtra = parseInt(checkbox.getAttribute('data-precio')) || 0;
            total += precioExtra;
            contadorExtras++;
        });

        if (resumenExtrasEl) resumenExtrasEl.textContent = contadorExtras;

        if (montoTotalEl) {
            montoTotalEl.textContent = formatearGuaranies(total);
        }
    }

    if (cotizadorForm) {
        cotizadorForm.addEventListener('change', calcularTotal);
        calcularTotal();
    }
});

// presupuesto
// Validación y Envío con JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-presupuesto');
    const mensajeEstado = document.getElementById('mensaje-estado');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const plan = document.getElementById('plan').value;

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!nombre || !correo || !telefono || !plan) {
                mostrarMensaje('Por favor, completa todos los campos obligatorios (*).', 'error');
                return;
            }

            if (!emailRegex.test(correo)) {
                mostrarMensaje('Por favor, ingresa un formato de correo válido.', 'error');
                return;
            }

            mostrarMensaje('¡Solicitud enviada con éxito! Nos comunicaremos contigo a la brevedad.', 'exito');
            form.reset();
        });
    }

    function mostrarMensaje(texto, tipo) {
        mensajeEstado.textContent = texto;
        mensajeEstado.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');

        if (tipo === 'error') {
            mensajeEstado.classList.add('bg-red-100', 'text-red-700');
        } else {
            mensajeEstado.classList.add('bg-green-100', 'text-green-700');
        }
    }
});