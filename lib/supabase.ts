import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export function hasSupabaseConfig() {
  return Boolean(url && anon && url.startsWith("https://"));
}

export const supabase: SupabaseClient = hasSupabaseConfig()
  ? createClient(url, anon)
  : createClient("https://placeholder.supabase.co", "placeholder-anon-key");
