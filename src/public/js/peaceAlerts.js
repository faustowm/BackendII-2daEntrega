const peaceAlert = {
    success: (message) => {
        return Swal.fire({
            title: '¡Excelente!',
            text: message,
            icon: 'success',
            confirmButtonText: 'Continuar',
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
            title: 'Oops...',
            text: message,
            icon: 'error',
            confirmButtonText: 'Entendido',
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
            title: '¿Estás seguro?',
            text: message,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, continuar',
            cancelButtonText: 'Cancelar',
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