import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setupURLPolyfill } from 'react-native-url-polyfill'

setupURLPolyfill()

const supabaseUrl = "https://qpwcfanmokyonlfbmecb.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwd2NmYW5tb2t5b25sZmJtZWNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzODAzMjAsImV4cCI6MTk4Njk1NjMyMH0.uEKz9C36VikoyRQpYYMhrnMdQJDCpAacJoQI5dcJX2U"

export const supa = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})