import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ahfglshexgeplzdlkrlf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoZmdsc2hleGdlcGx6ZGxrcmxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyOTE4NTAsImV4cCI6MjA0NDg2Nzg1MH0.zg576a1SxYBqBizO8IsuiSkngNHg9fQ1WAfM4Dxz7Jg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
