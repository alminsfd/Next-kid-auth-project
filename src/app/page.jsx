import Banner from "@/components/Home/Banner";
import Products from "@/components/Home/Products";
import Test from "@/components/Test";
import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth";


export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div className="space-y-20"  >
      <p>{JSON.stringify(session)}</p>
      <Test></Test>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Products></Products>
      </section>
    </div>
  );
}
