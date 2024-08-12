import { createClient } from "@supabase/supabase-js";

const URL = "https://rkkxvberjvlqofijhtps.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJra3h2YmVyanZscW9maWpodHBzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMzQxNDc5MSwiZXhwIjoyMDM4OTkwNzkxfQ.6BY0eMIqaEMlaAsPHjehe62OcSVS0uov5a7jlB3mcNc";

export const supabase = createClient(URL, API_KEY);
