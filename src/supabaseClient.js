import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kkguvpnvaaggsxbrphmw.supabase.co'
const supabaseKey = 'sb_publishable_4LWAy9vXmsq39Q7BfrJckg_-qyhnWju'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)