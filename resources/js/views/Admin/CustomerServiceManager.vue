<template>
    <div class="mt-8 py-8 w-11/12 lg:w-3/4 mx-auto bg-white rounded-md shadow">
        <h4 class="font-semibold text-2xl mb-12 px-12">
            Customer Service Manager
        </h4>
        <OrdersTable
            :orders="orders"
            @refetch-requested="fetchOrders"
        ></OrdersTable>
        <div class="py-4"></div>
        <ContactMessagesTable
            :messages="messages"
            @refetch-requested="fetchMessages"
        ></ContactMessagesTable>
    </div>
</template>

<script setup>
import ContactMessagesTable from "@/components/admin/service/ContactMessagesTable.vue";
import OrdersTable from "@/components/admin/service/OrdersTable.vue";
import useAxios from "@/plugins/Axios";
import { ref } from "vue";

const orders = ref(null); // Paginated<{id,user_id,created_at,total_price,user:{email,id}}>
const messages = ref(null);

const axios = useAxios();

function fetchOrders(url) {
    axios.authGet(url ?? "/api/order/all").then((res) => {
        orders.value = res.data;
    });
}
fetchOrders();

function fetchMessages(url) {
    axios.authGet(url ?? "/api/contact/all").then((res) => {
        messages.value = res.data;
    });
}
fetchMessages();
</script>
