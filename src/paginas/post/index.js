import { useParams } from "react-router-dom";

export default function Post() {
  const parametros = useParams();
  console.log(parametros);

  return <h1>{`O Id digitado é ${parametros.id}`}</h1>;
}
