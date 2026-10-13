import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { SignInButton, SignOutButton } from "@/components/auth-buttons"

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main style={{ padding: "2rem" }}>
      {session ? (
        <>
          <p>Hello, {session.user?.name}</p>
          <p>{session.user?.email}</p>
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </main>
  )
}