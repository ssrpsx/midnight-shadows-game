import { NextResponse } from 'next/server';
import { product } from '@/public/product/product';


export async function GET() {
  return NextResponse.json(
    { data: product }
  );
}