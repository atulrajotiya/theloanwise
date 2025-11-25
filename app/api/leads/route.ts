import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import UserLead from '../../../models/UserLead';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();

    // Check for existing lead with same email or phone
    const existingLead = await UserLead.findOne({
      $or: [{ email: body.email }, { phone: body.phone }],
    });

    if (existingLead) {
      return NextResponse.json(
        { error: 'Lead with this email or phone already exists' },
        { status: 400 }
      );
    }

    const lead = await UserLead.create(body);
    return NextResponse.json({ success: true, data: lead }, { status: 201 });
  } catch (error: any) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to submit lead' },
      { status: 400 }
    );
  }
}
