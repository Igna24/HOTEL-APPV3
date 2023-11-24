import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://svabkiiddnnzikvsewcu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2YWJraWlkZG5uemlrdnNld2N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3MDgwODAsImV4cCI6MjAxNjI4NDA4MH0.ZBqPX2kPrNAPfDieULLCqxbg5zhSkPiAAs1yaV2sS8k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
