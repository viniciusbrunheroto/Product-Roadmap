import {IssueSchema} from '@/api/routes/get-issue'
import { clientEnv } from '@/env'

interface GetIssueParams {
    id: string
}


export async function getIssue({id}: GetIssueParams) {
    "use cache"
    
    const url = new URL(`/api/issues/${id}`, clientEnv.VERCEL_URL)

    const response = await fetch(url)

    const data = await response.json()

    return IssueSchema.parse(data)
}