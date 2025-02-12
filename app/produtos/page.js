'use client'

import { use, useState } from "react";

function Produtos() {

    const [produto, alteraProduto] = useState({});

    
    

    const [nome, alteraNome] = useState("");
    const [preco, alteraPreco] = useState("");
    const [quantidade, alteraQuantidade] = useState("");

    const [mostraListagem, alteraMostraListagem] = useState(false);
    const [mostraCadastro, alteraMostraCadastro] = useState(true);

    function alteraExibição(tela){

        if(tela == "cadastro" ){
            alteraMostraCadastro(true);
            alteraMostraListagem(false);
        }

        if(tela == "listagem" ){
            alteraMostraCadastro(false);
            alteraMostraListagem(true);
        }

    }

    function salvar(e){
        e.preventDefault();

        const objeto = {
            nome: nome,
            preco: preco,
            quantidade: quantidade,
            data: Date()

        } 

        alteraProduto(objeto)

        // console.log(nome)
        // console.log(preco)
        // console.log(quantidade)
    }

    return ( 
        <div className="p-10">
            <h1 className="text-lg mb-10"> Administração de produtos </h1>

            <div className="flex gap-5">

                {/* Menu lateral */}
                <div>
                    <button onClick={()=> alteraExibição("cadastro")} className="bg-gray-200 p-5 mb-5"> Cadastro </button>
                    <br/>
                    <button onClick={()=> alteraExibição("listagem")} className="bg-gray-200 p-5 mb-5"> Listagem </button>
                </div>

                {/* Painel principal */}
                <div>

                    {/* Cadastro */}
                    {
                        mostraCadastro == true &&
                    <div className="border p-5">
                        <h2 className="font-bold- mb-2"> Cadastrado de produtos</h2>

                        <form onSubmit={(e)=> salvar (e)}>

                            <label className="mb-4"> 
                                Digite o nome:
                                <br/>
                                <input onChange={(e)=> alteraNome(e.target.value) } className="outline"/>
                            </label>
                            <br/>
                            

                            <label className="mb-4"> 
                                Digite o preço:
                                <br/>
                                <input onChange={(e)=> alteraPreco(e.target.value) } className="outline"/>
                            </label>
                            <br/>
                            

                            <label className="mb-4"> 
                                Digite a quantidade:
                                <br/>
                                <input onChange={(e)=> alteraQuantidade(e.target.value) } className="outline"/>
                            </label>
                            <br/>
                            
                            <button className="bg-gray-300 mt-5 p-5"> Salvar </button>


                        </form>
                    </div>

                }

                    
                </div>

                    {/* Listagem */}
                    {
                        mostraListagem == true &&
                    <div className="border p-5">
                        <h2 className="font-bold mb-5"> Listagem de produtos </h2>

                        <ul>
                            <li> {produto.nome} - R$ {produto.preco} - {produto.quantidade} itens </li>
                            <li> {produto.nome} - R$ {produto.preco} - {produto.quantidade} itens </li>
                            <li> {produto.nome} - R$ {produto.preco} - {produto.quantidade} itens </li>
                        </ul>

                    </div>
                    }
            </div>

        </div>
     );
}

export default Produtos;