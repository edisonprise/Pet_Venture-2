import { NextResponse } from "next/server";
import { getAllProducts } from "@/app/Firebase/firebaseConfig";
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const name = searchParams.get("name");

    const products = [];
    const result = [];

    const querySnampshot = await getAllProducts();
    querySnampshot.forEach((doc) => {
      products.push(doc.data());
    });

    products.forEach((obj) => {
      if (name === obj.name) {
        result.push(obj);
      }
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse(error);
  }
}
