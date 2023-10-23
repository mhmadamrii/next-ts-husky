export async function GET() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
        next: {
            revalidate: 60
        }
    })

    const data = await res.json()
    return Response.json(data)
}