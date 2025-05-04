import { NextResponse } from 'next/server';

import { product } from '@/public/product/product';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;


  const item = product.find((item) => item.Id === id);

  if (!item) {
    return NextResponse.json(
      { error: `Item with id ${id} not found` }
    );
  }

  return NextResponse.json({ data: item });
}