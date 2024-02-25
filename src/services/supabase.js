import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://reashixnwoknxrorazfz.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlYXNoaXhud29rbnhyb3JhemZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3ODA3MDUsImV4cCI6MjAyNDM1NjcwNX0.YFHYlOqG-1IBAiXWgL2x2-jWj5Z-RnyeeHht9du7BWc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
