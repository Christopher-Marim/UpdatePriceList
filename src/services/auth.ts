import api from "./api";

interface Response {
  token: string;
  user: {
    nome: string,
    login: string,
    senha: string,
    admin:boolean,
  };
}
interface RequestSignIn {
  login: string,
  senha: string
}

export async function signIn({ login, senha }: RequestSignIn): Promise<Response|void> {
  try {
    const { data, status } = await api.get(`/Acessoappcoleta?method=loadAll&usuarioApp=${login}&senhaApp=${senha}`)
    const user = data?.data[0]
    if(user){
      return new Promise((resolve) => {
        resolve({
          token: `${user?.chave}`,
          user: {
            nome: `${user?.nome}`,
            login: `${login}`,
            senha: `${senha}`,
            admin: user?.admin=='1'?true:false
          }
        });
      });   
    } 
    alert('Usuário ou senha inválidos');
  } catch (error) {
    alert('Usuário ou senha inválidos');
    console.error(error)
  }
}