'use client'

import { use, useState } from "react";

function Login() {

    const [usuario, alterausuario] = useState ({})

    const [senha, alterasenha] = useState ("")
    const [email, alteraemail] = useState ("")


    const [ admin, alteraAdmin ] = useState(false)


    function logar(){

        const usuario = {
            id: 3,
            email: "conradito",
            senha: "123"
        }
        
        if(email == usuario.email && senha == usuario.senha)
            console.log("Usuário encontrado!")
            usuario.senha = ""
            localStorage.setItem("usuario", JSON.stringify(usuario))
    }



    function manipulaAdmin(){
        if( admin == true){
            alteraAdmin(false)
        }else{
            alteraAdmin(true)
        }
        
    }
     

    return ( 
        <div className="p-5">

            <p> Digite o ususário </p>
            <inpup />

            <p>Digite a senha</p>
            <inpup onChange={(e)=> alterasenha(e.target.value)}/>

            <p>Digite seu email</p>
            <inpup onChange={(e)=> alteraemail(e.target.value)} />

            <button onClick={()=> logar ()} >Logar</button>

            <h1 className="text-lg text-blue-500 mb-2"> Página de Login </h1>
            <p> Você está logado <strong> { admin == true ? <span> Administrador</span> : <span> Usuário </span>} </strong></p>
            <button onClick={()=>manipulaAdmin()} className={`mt-3 ${admin == true ? `bg-sky-500` : `bg-red-500`} text-white p-2`} > { admin == true ? <span> Você logou como Administrador</span> : <span> Voltar para Usuário </span>} </button>
          
            {/* <button onClick={()=>manipulaAdmin()} className={"mt-3 "+ (admin == true ? "bg-sky-500" : "bg-red-500") +" text-white p-2"} > { admin == true ? <span> Você logou como Administrador</span> : <span> Voltar para Usuário </span>} </button> */}
        
            { 
                admin == true ? 
                    <div>
                        <h2 className="text-lg text-lime-800 mt-10" > Olá Administrador </h2>
                        <p> Seja bem-vindos </p>

                        <button className="bg-black text-white p-3 mt-5">  Cadastrar usuário </button>
                        <p> Digite o nome:</p>
                        <input className="border-2"/>
                        
                    </div>
                :
                    <div> </div>
            }        
        
        </div>
     );
}

export default Login;
