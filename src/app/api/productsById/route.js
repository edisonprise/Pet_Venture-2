import { NextResponse } from "next/server";
import { getAllProducts } from "@/app/Firebase/firebaseConfig";
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");

    const products = [];
    const result = [];

    const querySnampshot = await getAllProducts();
    querySnampshot.forEach((doc) => {
      products.push(doc);
    });

    products.forEach((obj) => {
      if (id === obj.id) {
        result.push(obj);
      }
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse(error);
  }
}
