import {IssueSchema} from '@/api/routes/get-issue'


interface GetIssueParams {
    id: string
}


export async function getIssue({id}: GetIssueParams) {
    "use cache"
    
    const url = new URL(`/api/issues/${id}`, process.env.NEXT_PUBLIC_API_URL_VERCEL)

    const response = await fetch(url)

    const data = await response.json()

    return IssueSchema.parse(data)
}