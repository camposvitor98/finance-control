import { Container, FormContainer } from "./styles";

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { Input } from "components/Input";
import { Button } from "components/Button";

interface LoginPageProps {}

const LoginPage: NextPage<LoginPageProps> = (props) => {
  const {} = props;

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="Home" content="Hello world!" />
      </Head>

      <Container>
        <FormContainer>
          <h1>Login</h1>

          <form onSubmit={() => {}}>
            <Input
              label="Email"
              type="email"
              placeholder="example@example.com"
            />

            <Input label="Senha" type="password" placeholder="********" />

            <Button type="submit">Entrar</Button>
          </form>

          <span>
            Não tem uma conta?{" "}
            <Link href="/cadastro">
              <a>Cadastre-se aqui.</a>
            </Link>
          </span>
        </FormContainer>
      </Container>
    </>
  );
};

export default LoginPage;
