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
    STAFF_UPDATED: {
        type: "success",
        message: "¡El personal se actualizó con éxito!",
    },
    STAFF_DELETED: {
        type: "success",
        message: "¡Personal creado con éxito!",
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
    CONTACT_MESSAGE_DELETED: {
        type: "success",
        message: "¡El mensaje fue eliminado con éxito!",
    },
    REVIEW_DELETED: {
        type: "success",
        message: "¡Eliminó la reseña con éxito!",
    },
    POST_CREATED: {
        type: "success",
        message: "¡La publicación se creó con éxito!",
    },
    POST_DELETED: {
        type: "success",
        message: "¡La publicación fue eliminada con éxito!",
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

    ITEM_ADDED: {
        type: "compact",
        message: "Artículo añadido a tu carrito!",
    },
    CONTACT_MESSAGE_ADDED: {
        type: "compact",
        message: "¡El mensaje nos llegó! Responderemos pronto.",
    },
    REVIEW_ADDED: {
        type: "compact",
        message: "¡Gracias por tu reseña!",
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
