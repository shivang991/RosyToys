export const formatPrice = (price) =>
    new Intl.NumberFormat("es-mx", {
        style: "currency",
        currency: "USD",
    }).format(price);

export const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("es", {
        day: "numeric",
        year: "2-digit",
        month: "short",
        time: "full",
    });
