import Layout from "@/components/layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data:session} = useSession()

  return(
    <Layout>
      <div className="flex  justify-between" >
        Hello, {session?.user?.name}
        <div className="flex bg-gray-300 gap-1 pr-3">
          <img className="w-7"  src={session?.user?.image} alt="user image" />
          {session?.user?.name}
        </div>
      </div>
    </Layout>
  )
}
