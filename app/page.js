'use client'

import { useState } from "react";

export default function Home() {

  // Aqui entra o Javascript normal
  // let Carrinho = 0;
    const [ Carrinho, alteraCarrinho ] = useState(0);
    const [ precoProduto, alteraprecoProduto] = useState(25);
    const [ valorTotal, alteraValorTotal ] = useState(0);

    
    function manipulaCarrinho(){
        let novoCarrinho = Carrinho;  

        alteraCarrinho(Carrinho + 1)
        novoCarrinho++
        alteraValorTotal(novoCarrinho * precoProduto)
        novoCarrinho--
        
    } 

    function removeCarrinho(){
      alteraCarrinho(Carrinho - 1)
      
    }
      
    function limparCarrinho(){
      alteraCarrinho(0)
    }

    function aplicaCupom(){
      alteraprecoProduto(19)
    }
       

    // Ou 
   //   function manipulaCarrinho( adicionar ){
   //     alteraCarrinho( Carrinho + 1)
   //   }else{
   //     alteraCarrinho( Carrinho -1)
   //   }
   //  }

  return (
    <div className="p-5">

      <h1 className="bg-sky-500 text-white p-3">Lojinha do Next</h1>
      <p className="p-3 text-lg">
        Carrinho: <strong> {Carrinho} </strong> itens. 
      </p>

      <hr/>

      <h2> Produtos </h2>

      {
        Carrinho > 0 ?
        <button onClick={()=>limparCarrinho()} className="bg-yellow-400 text-black mt-5 p-3"> Limpar </button>
        :
        <div></div>
      }

      <button onClick={()=>aplicaCupom()} className="bg-black text-white mt-5 p-3 m-px"> Adicionar Cupom </button>

      <p className="p-3 text-lg text-red-900"> 
        Valor total: R$ <strong> {valorTotal} </strong>
      </p>
      
      <br/>

      <div className="border bg-sky-700 w-fit p-2 text-center text-white">
        <img src="https://placehold.co/200"/>
        <h3 className="text-lg text-lime-200 font-bold"> Produto Modelo </h3>
        <p> R$ {precoProduto},00 </p>
        <button onClick={()=>manipulaCarrinho()} className="bg-lime-400 text-black mt-5 p-3"> Adicionar ao Carrinho </button>
        <br/>
        

        {
          Carrinho > 0 ?
          <button onClick={()=>removeCarrinho()} className="bg-red-400 text-black mt-5 p-3"> Remover do Carrinho </button>
          :
          <div></div>
        }

        
      </div>

            
            

    </div>

  );
}
