import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (email === 'admin@gmail.com' && password === 'admin') {
      return NextResponse.json({
        message: 'Login berhasil',
        token: 'example-token',
      });
    } else {
      return NextResponse.json(
        { error: 'Email atau password salah' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}
