export default function HomePage() {
  return <p>Redirecting to your to-do list...</p>;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/todo",
      permanent: false, 
    },
  };
}
