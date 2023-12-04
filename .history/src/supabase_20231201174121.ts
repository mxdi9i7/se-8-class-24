import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://zmoudnlgmukcfztryqrs.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inptb3VkbmxnbXVrY2Z6dHJ5cXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0NzAzNzUsImV4cCI6MjAxNzA0NjM3NX0.QoIZnm-iSo0RrEtIuczsqMnvFNkNOxxIbiO-_pwHdgM',
);
