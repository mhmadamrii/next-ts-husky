import { UserButton } from "@clerk/nextjs";

export default function RootPage() {
  return (
    <main>
      <div className="bg-red-600">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, dolore. Quidem, id? Quo a dolore culpa distinctio mollitia, ad perspiciatis debitis voluptatum nobis hic quasi iure minus nulla facere molestias?</p>
      </div>
      <UserButton afterSignOutUrl="/"/>
    </main>
  )
}
