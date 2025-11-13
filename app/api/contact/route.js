import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req) {
  await connectDB();
  const { name, email, message } = await req.json();
  const newMessage = new Contact({ name, email, message });
  await newMessage.save();
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
