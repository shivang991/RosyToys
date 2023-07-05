export const NotificationTypes = {
    PRODUCT_CREATED: {
        type: "success",
        message: "Producto creado con éxito",
    },
    PRODUCT_UPDATED: {
        type: "success",
        message: "¡Actualizó con éxito los datos del producto!",
    },
    PRODUCT_DELETED: {
        type: "success",
        message: "¡Eliminado el producto con éxito!",
    },
    STAFF_CREATED: {
        type: "success",
        message: "¡Personal creado con éxito!",
    },
    STAFF_UPDATED: {
        type: "success",
        message: "¡El personal se actualizó con éxito!",
    },
    STAFF_DELETED: {
        type: "success",
        message: "¡Personal eliminado con éxito!",
    },
    LOGIN_SUCCESS: {
        type: "success",
        message: "¡Ingresó exitosamente!",
    },
    ADMIN_REGISTERED: {
        type: "success",
        message: "¡Administrador registrado con éxito!",
    },
    ADMIN_UPDATED: {
        type: "success",
        message: "¡Administrador actualizado con éxito!",
    },
    GENERAL_ERROR: {
        type: "error",
        message: "¡Ocurrió un error inesperado!",
    },
    INVALID_CREDENTIALS: {
        type: "error",
        message: "Verifique sus credenciales y vuelva a intentarlo.",
    },
    USER_EXISTS: {
        type: "error",
        message: "Este correo electrónico ha sido tomado.",
    },
    CONTACT_MESSAGE_ADDED: {
        type: "compact",
        message: "¡El mensaje nos llegó! Responderemos pronto.",
    },
};

const EVENT_NAME = "notificationreq";

function fire(type) {
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: type }));
}
export function useNotification() {
    return { fire };
}

export const fireNotification = fire;
