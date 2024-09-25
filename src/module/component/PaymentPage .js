import React from "react";

const PaymentPage = () => {
  const backendUrl = "your-backend-url"; // Replace with your backend API URL

  const handlePayment = async () => {
    try {
      // 1. Create a new order on the backend (Razorpay order)
      const response = await fetch(`${backendUrl}/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 50000, // Example amount in paise (INR 500)
          currency: "INR",
        }),
      });

      const orderData = await response.json();

      if (orderData.id) {
        // 2. Open Razorpay payment dialog
        const options = {
          key: "XnUtWjBETX9xW15sS4g5n0NK", // Enter the Key ID generated from the Dashboard
          amount: orderData.amount, // Amount in currency subunits (paise for INR)
          currency: "INR",
          name: "shubham ecom",
          description: "Test Transaction",
          image: "https://your-logo-url.com/logo.png", // Logo URL
          order_id: orderData.id, // Order ID created on Razorpay backend
          handler: async function (response) {
            // 3. Payment successful - send the payment details and order data to your backend
            await fetch(`${backendUrl}/orders`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
                // Add your order details here
                cartItems: yourCartItems,
                customerDetails: yourCustomerDetails,
                totalAmount: orderData.amount,
              }),
            });

            alert("Payment Successful! Your order has been placed.");
          },
          prefill: {
            name: "Customer Name",
            email: "customer@example.com",
            contact: "9999999999",
          },
          notes: {
            address: "Customer Address",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        console.error("Failed to create order on Razorpay");
      }
    } catch (error) {
      console.error("Payment error", error);
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;
