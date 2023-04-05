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
        <title>Workflow | App</title>
      </Head>
      <div className={styles.containerCenter}>
        <h1>Workflow</h1>
        {/* <Image
          className={styles.logo}
          src={logoImg}
          alt="Logo Cadeado"
          width={600}
          height={400}
        /> */}
        <div className={styles.login}>
          <form>
            <Input type="text" placeholder="email@exemplo.com.br" />
            <Input type="password" placeholder="sua senha" />
            <Button type="submit" loading={false}>
              <span className={styles.textButton}>Acessar</span>
            </Button>
          </form>
          <Link className={styles.text} href="/signup">
            <span>Não possui uma conta? Cadastre-se</span>
          </Link>
        </div>
      </div>
    </>
  );
}
