import { clientEnv } from '@/env'
import {createAuthClient} from 'better-auth/react'


console.log("VERCEL_URL:", process.env.NEXT_PUBLIC_API_URL_VERCEL);


export const authClient = createAuthClient()