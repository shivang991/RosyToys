export const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("es", {
        day: "numeric",
        year: "2-digit",
        month: "short",
        time: "full",
    });
