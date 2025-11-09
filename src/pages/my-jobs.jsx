import { SignedIn, SignedOut } from "@clerk/clerk-react"

const MyJobs = () => {
  return (
    <div>
      <SignedIn>
        <p>You are signed in, welcome to onboarding!</p>
      </SignedIn>
      <SignedOut>
        <p>Please sign in to proceed.</p>
      </SignedOut>
    </div>
  )
}

export default MyJobs
