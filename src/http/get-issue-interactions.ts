import { IssueInteractionsResponseSchema } from '@/api/routes/schemas/issue-interactions'


interface GetIssueInteractionsParams {
    issueIds: string[]
}


export async function getIssueInteractions({issueIds}: GetIssueInteractionsParams) {
    const url = new URL(`/api/issues/interactions`, process.env.NEXT_PUBLIC_API_URL_VERCEL)

    url.searchParams.set('issueIds', issueIds.join(",") )

    const response = await fetch(url, {
        credentials: 'include'
    })

    const data = await response.json()

    return IssueInteractionsResponseSchema.parse(data)
}