import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://loznenfbjfekudnwwbli.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxvem5lbmZiamZla3Vkbnd3YmxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2Mjk0MjUsImV4cCI6MjAxMjIwNTQyNX0.yjss66CqmnTKTrXq-qeSjUA9xkRTIf_NPwiNxS1Lbw4',
);
