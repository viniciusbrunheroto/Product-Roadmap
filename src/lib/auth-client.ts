import { clientEnv } from '@/env'
import {createAuthClient} from 'better-auth/react'


console.log("VERCEL_URL:", clientEnv.VERCEL_URL);


export const authClient = createAuthClient(
    {
        baseURL: clientEnv.VERCEL_URL,
    }
)