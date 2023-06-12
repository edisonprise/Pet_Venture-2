import mercadopago from "mercadopago";
import { NextResponse } from "next/server";

mercadopago.configure({
  access_token: process.env.NEXT_ACCESS_TOKEN,
});

export async function POST(request) {
  const data = await request.json();
  console.log(data.carrito);

  const URL = "http://localhost:3000"; //ojo cambiar al url que me da el  serv

  try {
    const preference = {
      items: data.carrito.map((product) => ({
        title: product.name,
        unit_price: product.price,
        quantity: 1,
      })),
      auto_return: "approved",
      back_urls: {
        success: `${URL}`,
        failure: `${URL}`,
      },
      notification_url: `${URL}/api/notify`,
    };
    console.log(preference);
    const response = await mercadopago.preferences.create(preference);
    console.log(response.body.init_point);
    return NextResponse.json({ url: response.body.init_point });
  } catch (error) {
    NextResponse.error(error);
  }
}
