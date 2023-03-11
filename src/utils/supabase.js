import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tkrrqsfkjwnnmjaculcn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrcnJxc2Zrandubm1qYWN1bGNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU3Mzk4MjEsImV4cCI6MTk5MTMxNTgyMX0.lic34KDbnFv6REw6snLxtrtN4BTMv0aizBxOyCUElHM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
