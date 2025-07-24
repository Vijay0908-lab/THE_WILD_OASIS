import { createClient } from "@supabase/supabase-js";

////ghudrttgpleqvyaxnxyu.supabase.co
export const supabaseUrl = "https://ghudrttgpleqvyaxnxyu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdodWRydHRncGxlcXZ5YXhueHl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4MDM1MzYsImV4cCI6MjA2NjM3OTUzNn0.m2rzrOfwKQtz-7MehdF8HAf3KQRLTE1ID9967OKGWqE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
