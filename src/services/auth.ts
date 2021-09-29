import api from "./api";

interface Response {
  token: string;
  user: {
    nome: string,
    login: string,
    senha: string,
    admin:boolean
  };
}
interface RequestSignIn {
  login: string,
  senha: string
}

export async function signIn({ login, senha }: RequestSignIn): Promise<Response> {
  console.log(login, senha)

  const { data, status } = await api.get(`/acesso?method=loginApp&pLogin=${login}&pSenha=${senha}`)
  const user = data.data[0]
  if(!user){
    console.error('Status Response:' + status)
    alert('Usuário ou senha inválidos')
  }
  console.log(data.data[0])
  return new Promise((resolve) => {
    resolve({
      token: `${user?.chave}`,
      user: {
        nome: `${user?.nome}`,
        login: `${login}`,
        senha: `${senha}`,
        admin: user?.admin == "1"?true:false
      }

    });

  });
}