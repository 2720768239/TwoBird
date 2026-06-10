import { NextResponse } from 'next/server.js';
import { clearAuthCookie } from '../../../../lib/auth.js';

export async function POST() {
  const response = new NextResponse(null, { status: 204 });
  clearAuthCookie(response);
  return response;
}
