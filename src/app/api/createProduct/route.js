import { NextResponse } from "next/server";
import { addProduct } from "@/app/firebase/firebaseConfig";

export async function POST(request) {
  const data = await request.json();
  const { category, image, brand, name, subCategory, price } = data;

  if (!name || !category || !image || !brand || !subCategory || !price) {
    return NextResponse.json({ error: "Faltan datos" });
  } else {
    const ref = await addProduct(data);

    return NextResponse.json({ id: ref.id, ...data });
  }
}
