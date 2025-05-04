import { NextResponse } from 'next/server';



export async function GET() {
  return NextResponse.json({ data: "say Hello"});
}


export async function POST(req: Request) {
    try {
        const body = await req.json();
    
        return NextResponse.json({ message: 'Data received', data: body });
      } catch (error) {
        return NextResponse.json(
          { error: 'Invalid request body' }
        );
    }
}
