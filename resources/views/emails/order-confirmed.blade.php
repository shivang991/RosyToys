<section style="max-width: 72ch; margin: 0 auto; padding: 0.5rem;">
    <h1>
        Order cofirmed
    </h1>
    <h4>Thanks for your purchase. here is a list of ordered items.</h4>
    <table cellspacing="0" cellpadding="8 16" border="1">
        <tr style="background-color: black; color:white;">
            <th>Title</th>
            <th>Brand</th>
            <th>Quantity</th>
            <th>Price</th>
        </tr>
        @foreach ($order->order_items as $item)
            <tr>
                <td>{{ $item->product->title }}</td>
                <td>{{ $item->product->brand }}</td>
                <td>{{ $item->quantity }}</td>
                <td>${{ $item->product->price }}</td>
            </tr>
        @endforeach
        <tr>
            <td colspan="3">Total price:</td>
            <td>${{ $order->total_price }}</td>
        </tr>
    </table>
    <p>We will deliver you your articles soon!</p>
</section>
