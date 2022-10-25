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
    CAROUSEL_IMAGE_CREATED: {
        type: "success",
        message: "¡Artículo agregado!",
    },
    CAROUSEL_IMAGE_DELETED: {
        type: "success",
        message: "¡Artículo eliminado con éxito!",
    },
    CAROUSEL_IMAGE_UPDATED: {
        type: "success",
        message: "¡Artículo actualizado con éxito!",
    },
    STAFF_CREATED: {
        type: "success",
        message: "¡Personal creado con éxito!",
    },
    STAFF_DELETED: {
        type: "success",
        message: "¡Personal creado con éxito!",
    },
    LOGIN_SUCCESS: {
        type: "success",
        message: "¡Ingresó exitosamente!",
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
};

const EVENT_NAME = "notificationreq";

function fire(type) {
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: type }));
}
export function useNotification() {
    return { fire };
}

export const fireNotification = fire;
