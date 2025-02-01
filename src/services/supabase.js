import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://svabkiiddnnzikvsewcu.supabase.co";
const supabaseKey =
  "eeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nc29nYXRtaGhpeGtsaW5hbHhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzNzA2NTAsImV4cCI6MjA1Mzk0NjY1MH0.wE_a0VWC8ZiNSPJvJuYatWPDhwASjOOv65rKicgCP_U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
