const peaceAlert = {
    success: (message) => {
        return Swal.fire({
            title: '¡Genial! 🎉',
            text: message,
            icon: 'success',
            confirmButtonText: '¡Vamos! 🚀',
            background: '#ECF0F1',
            color: '#2C3E50',
            iconColor: '#27AE60',
            confirmButtonColor: '#7FB3D5',
            customClass: {
                popup: 'animated fadeIn'
            }
        });
    },
    error: (message) => {
        return Swal.fire({
            title: '¡Ay no! 😱',
            text: message,
            icon: 'error',
            confirmButtonText: 'Entendido, lo intentaré de nuevo.',
            background: '#ECF0F1',
            color: '#2C3E50',
            iconColor: '#E74C3C',
            confirmButtonColor: '#7FB3D5',
            customClass: {
                popup: 'animated fadeIn'
            }
        });
    },
    confirm: (message) => {
        return Swal.fire({
            title: '¿Listo para la acción? 🤔',
            text: message,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: '¡Sí, claro! 🥳',
            cancelButtonText: 'Nah, mejor no...',
            background: '#ECF0F1',
            color: '#2C3E50',
            iconColor: '#F39C12',
            confirmButtonColor: '#7FB3D5',
            cancelButtonColor: '#95A5A6',
            customClass: {
                popup: 'animated fadeIn'
            }
        });
    }
};
