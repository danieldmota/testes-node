import { CarrinhoDeCompras } from "../../src/utils/CarrinhoCompras";

describe('CarrinhoCompras.js', ()=>{

    let carrinhoCompras;

    beforeEach(()=>{
        carrinhoCompras= new CarrinhoDeCompras();
    });

    describe('adicionarItem(nome,preco,quantidade=1)', () =>{
        test('deve falhar quando parametro nome invalido - null',()=>{
            const nome = null;
            const preco = 10;
            const quantidade = 1;
            expect(() => carrinhoCompras.adicionarItem(nome,preco,quantidade)).toThrow(Error);
            expect(() => carrinhoCompras.adicionarItem(nome,preco,quantidade)).toThrow(/^Dados do item inválidos$/);
        });

        test('deve falhar quando parametro nome invalido - number',()=>{
            const nome = 2;
            const preco = -10;
            const quantidade = 1;
            expect(() => carrinhoCompras.adicionarItem(nome,preco,quantidade)).toThrow(Error);
            expect(() => carrinhoCompras.adicionarItem(nome,preco,quantidade)).toThrow(/^Dados do item inválidos$/);
        });
        test('deve falhar quando parametro nome invalido - booleano',()=>{
            const nome = true;
            const preco = -10;
            const quantidade = 1;
            expect(() => carrinhoCompras.adicionarItem(nome,preco,quantidade)).toThrow(Error);
            expect(() => carrinhoCompras.adicionarItem(nome,preco,quantidade)).toThrow(/^Dados do item inválidos$/);
        });
        test('deve falhar quando parametro preco invalido - null',()=>{
            const nome = "Daniel";
            const preco = null;
            const quantidade = 1;
            expect(() => carrinhoCompras.adicionarItem(nome,preco,quantidade)).toThrow(Error);
            expect(() => carrinhoCompras.adicionarItem(nome,preco,quantidade)).toThrow(/^Dados do item inválidos$/);
        });

        test('deve falhar quando parametro quantidade invalido - null',()=>{
            const nome = "Daniel";
            const preco = -10;
            const quantidade = null;
            expect(() => carrinhoCompras.adicionarItem(nome,preco,quantidade)).toThrow(Error);
            expect(() => carrinhoCompras.adicionarItem(nome,preco,quantidade)).toThrow(/^Dados do item inválidos$/);
        });

        test('deve falhar quando parametro quantidade invalido - string',()=>{
            const nome = "Daniel";
            const preco = -10;
            const quantidade = "aaaaa";
            expect(() => carrinhoCompras.adicionarItem(nome,preco,quantidade)).toThrow(Error);
            expect(() => carrinhoCompras.adicionarItem(nome,preco,quantidade)).toThrow(/^Dados do item inválidos$/);
        });
        test('deve falhar quando parametro quantidade invalido - booleano',()=>{
            const nome = "Daniel";
            const preco = -10;
            const quantidade = true;
            expect(() => carrinhoCompras.adicionarItem(nome,preco,quantidade)).toThrow(Error);
            expect(() => carrinhoCompras.adicionarItem(nome,preco,quantidade)).toThrow(/^Dados do item inválidos$/);
        });
    });

    describe('removerItem(nome)', () =>{
        test('deve falhar quando parametro nome invalido - null',()=>{
            const nome = null;
            expect(() => carrinhoCompras.removerItem(nome)).toThrow(Error);
            expect(() => carrinhoCompras.removerItem(nome)).toThrow(/^Item não encontrado$/);
        });

        test('deve falhar quando parametro nome invalido - array',()=>{
            const nome = ['sla',10];
            expect(() => carrinhoCompras.removerItem(nome)).toThrow(Error);
            expect(() => carrinhoCompras.removerItem(nome)).toThrow(/^Item não encontrado$/);
        });

        test('deve falhar quando parametro nome invalido - number',()=>{
            const nome = 2;
            expect(() => carrinhoCompras.removerItem(nome)).toThrow(Error);
            expect(() => carrinhoCompras.removerItem(nome)).toThrow(/^Item não encontrado$/);
        });
        test('deve falhar quando parametro nome invalido - booleano',()=>{
            const nome = true;
            expect(() => carrinhoCompras.removerItem(nome)).toThrow(Error);
            expect(() => carrinhoCompras.removerItem(nome)).toThrow(/^Item não encontrado$/);
        });
    });

    describe('calcularTotal()', () =>{
        test('calcular itens do carrinho',()=>{
            carrinhoCompras.adicionarItem("Batata",12,1);
            carrinhoCompras.adicionarItem("Pão", 0.5, 10);
            carrinhoCompras.removerItem("Batata");

            const resultado = carrinhoCompras.calcularTotal();

            expect(resultado).toBe(5);
        });
    });
});