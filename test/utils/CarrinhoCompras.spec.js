import { CarrinhoDeCompras } from "../../src/utils/CarrinhoCompras";

describe('Boletim.js', ()=>{

    let carrinhoCompras;

    beforeEach(()=>{
        carrinhoCompras= new CarrinhoDeCompras();
    });

    describe('adicionarItem(nome,preco,quantidade=1)', () =>{
        test('deve falhar quando parametro a invalido - null',()=>{
            const nome = "Daniel";
            const preco = -10;
            expect(() => carrinhoCompras.adicionarItem(nome,preco)).toThrow(Error);
            expect(() => carrinhoCompras.adicionarItem(nome,preco)).toThrow(/^Dados do item inválidos$/);
        });
    });
});