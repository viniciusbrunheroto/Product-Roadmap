import { clientEnv } from '@/env'
import {createAuthClient} from 'better-auth/react'


console.log("NEXT_PUBLIC_API_URL:", clientEnv.NEXT_PUBLIC_API_URL);


export const authClient = createAuthClient()