<template>
    <div v-if="isPaid" class="py-8 my-12">
        <BaseImage src="/logo.png" class="w-80 mb-8 mx-auto"></BaseImage>
        <h1 class="text-slate-900 text-4xl font-semibold mb-8 text-center">
            Thanks for your purchase, your order has been placed!
        </h1>
        <p class="text-slate-900 text-center">
            We will keep you updated about the delivery via your email.
        </p>
    </div>
    <div class="max-w-lg mx-auto py-12" v-else>
        <form v-show="isReady" @submit.prevent="handleSubmit">
            <h4 class="text-2xl font-semibold text-gray-500">
                Paying a total of: ${{ totalPrice }} only
            </h4>
            <p class="mb-8 text-gray-500">
                Complete los siguientes detalles de la tarjeta y presione
                "pagar" para pagar.
            </p>
            <BaseTextField
                v-model="nameOnCard"
                label="Name on card"
                class="w-full mb-4"
            ></BaseTextField>
            <div ref="cardEl"></div>
            <p
                class="mt-4 py-1 px-4 bg-red-50 text-red-500 rounded-md"
                v-if="isCardError"
            >
                Your card got declined
            </p>
            <button
                class="bg-amber-500 px-8 py-2 text-white rounded-md mt-8"
                type="submit"
                :disabled="isSubmitting"
            >
                <span
                    class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                    v-if="isSubmitting"
                >
                </span>
                <span v-else> Pagar </span>
            </button>
        </form>
        <div class="flex justify-center py-8" v-show="!isReady">
            <div
                class="w-10 h-10 border-4 border-amber-500 border-b-transparent rounded-full animate-spin"
            ></div>
        </div>
    </div>
</template>

<script setup>
import BaseImage from "@/components/global/BaseImage.vue";
import BaseTextField from "@/components/global/BaseTextField.vue";
import useAxios from "@/plugins/Axios";
import { loadStripe } from "@stripe/stripe-js/pure";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const cardEl = ref();

const nameOnCard = ref("");
const totalPrice = ref();
const isReady = ref(false);
const isSubmitting = ref(false);
const isCardError = ref(false);
const isPaid = ref(false);

/** @type import('@stripe/stripe-js').Stripe */
let stripe;

/** @type import('@stripe/stripe-js').StripeCardElement */
let stripeCard;
/** @type string */
let clientSecret;

loadStripe.setLoadParameters({ advancedFraudSignals: false });

const axios = useAxios();
const route = useRoute();

onMounted(async () => {
    const orderId = route.query.id;
    if (!orderId) return;
    const { data } = await axios.get(`/api/order/${orderId}`);
    if (data.is_paid) return (isPaid.value = true);
    clientSecret = data.secret;
    totalPrice.value = data.total_price;
    const loadResult = await loadStripe(process.env.MIX_STRIPE_PK);
    stripe = loadResult;
    const elements = stripe.elements();
    const card = elements.create("card");
    card.mount(cardEl.value);
    stripeCard = card;
    isReady.value = true;
});

function handleSubmit() {
    if (stripe && clientSecret && nameOnCard.value.length > 4) {
        isSubmitting.value = true;
        stripe
            .confirmCardSetup(clientSecret, {
                payment_method: {
                    card: stripeCard,
                    billing_details: { name: nameOnCard.value },
                },
            })
            .then((result) => {
                if (result.error && result.error.code === "card_declined") {
                    isSubmitting.value = false;
                    isCardError.value = true;
                } else if (result.setupIntent)
                    axios
                        .post("/api/checkout/pay", {
                            secret: clientSecret,
                            payment_method: result.setupIntent.payment_method,
                        })
                        .then((response) => {
                            if (response.data.message === "success")
                                isPaid.value = true;
                        });
            });
    }
}
</script>
