"use client"

import { useSession } from "next-auth/react"

export default function Profile() {
  const { data: session, status } = useSession()

  if (status === "loading") return <p>Loading...</p>
  if (!session) return <p>Not signed in</p>

  return (
    <div>
      <p>{session.user?.name}</p>
      {session.user?.image && (
        <img src={session.user.image} alt="avatar" width={48} height={48} />
      )}
    </div>
  )
}