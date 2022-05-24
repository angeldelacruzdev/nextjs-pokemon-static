import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";

const PakemonPage = () => {
  let router = useRouter();
  console.log(router.query.id);
  return (
    <Layout title="algun pokémon">
      <h1>Hola mundo</h1>
    </Layout>
  );
};

export default PakemonPage;
