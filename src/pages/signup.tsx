import Head from "next/head";
//import Image from "next/image";
import styles from "../styles/home.module.scss";

import Link from "next/link";

//import logoImg from "../../public/logo.png";

import { Input } from "../components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cadastrar</title>
      </Head>
      <div className={styles.containerCenter}>
        <h1>Cadastre-se</h1>
        {/* <Image
          className={styles.logo}
          src={logoImg}
          alt="Logo Cadeado"
          width={600}
          height={400}
        /> */}
        <div className={styles.login}>
          <form>
            <Input type="text" placeholder=" Nome" />
            <Input type="text" placeholder="Sobrenome" />
            <Input type="text" placeholder="email@exemplo.com.br" />
            <Input type="password" placeholder="Senha" />
            <Input type="password" placeholder="Confirme a senha" />
            <Button type="submit" loading={false}>
              <span className={styles.textButton}>Cadastrar</span>
            </Button>
          </form>
          <Link className={styles.text} href="/">
            <span>Já possuí acesso? Faça login no aplicatibo</span>
          </Link>
        </div>
      </div>
    </>
  );
}
