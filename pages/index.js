import HomePage from "@/components/templates/HomePage";
import Customer from "@/model/customer";
import connectDB from "@/utils/connectDB";

export default function Home({ data }) {
  return (
    <>
      <HomePage data={data} />
    </>
  )
}

export async function getServerSideProps() {
  try {
    await connectDB();
    const customers = await Customer.find();
    console.log(customers);
    return {
      props: {
        data: JSON.parse(JSON.stringify(customers))
      }
    }
  } catch (err) {
    return {
      notFound: true
    }
  }
}
