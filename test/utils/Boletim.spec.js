import { Boletim } from "../../src/utils/Boletim";

describe('Boletim.js', ()=>{

    let boletim;

    beforeEach(()=>{
        boletim= new Boletim();
    });

    describe('adicionarNota(nota)', () =>{
        test('deve falhar quando parametro a invalido - null',()=>{
            const nota = null;
            expect(() => boletim.adicionarNota(nota)).toThrow(TypeError);
            expect(() => boletim.adicionarNota(nota)).toThrow(/^O valor "null" não é um número válido$/);
        });
        test('deve falhar quando parametro a invalido - string',()=>{
            const nota = 'sla';
            expect(() => boletim.adicionarNota(nota)).toThrow(TypeError);
            expect(() => boletim.adicionarNota(nota)).toThrow(/^O valor "sla" não é um número válido$/);
        });
        test('deve falhar quando parametro a invalido - array',()=>{
            const nota = ['sla',10];
            expect(() => boletim.adicionarNota(nota)).toThrow(TypeError);
            expect(() => boletim.adicionarNota(nota)).toThrow(/^O valor "sla,10" não é um número válido$/);
        });
        test('deve falhar quando parametro a invalido - booleano',()=>{
            const nota = true;
            expect(() => boletim.adicionarNota(nota)).toThrow(TypeError);
            expect(() => boletim.adicionarNota(nota)).toThrow(/^O valor "true" não é um número válido$/);
        });
        test('deve falhar quando o parametro for invalido - nota < 0',()=>{
            const nota = -2;
            expect(() => boletim.adicionarNota(nota)).toThrow(Error);
            expect(() => boletim.adicionarNota(nota)).toThrow(/^Nota deve estar entre 0 e 10$/);
        });
        test('deve falhar quando o parametro for invalido - nota > 10',()=>{
            const nota = 100;
            expect(() => boletim.adicionarNota(nota)).toThrow(Error);
            expect(() => boletim.adicionarNota(nota)).toThrow(/^Nota deve estar entre 0 e 10$/);
        });
    });
    describe('calcularMedia()', () =>{
        test('deve calcular a media',()=>{
            nota1= 10; 
            nota2= 2;
            nota3= 3;
            boletim.adicionarNota(nota1);
            boletim.adicionarNota(nota2);
            boletim.adicionarNota(nota3);

            const media = boletim.calcularMedia();

            expect(media).toBe(5);
        });

        test('verificar se o tamanho da lista é válido',()=>{
            boletim.adicionarNota(10);
            boletim.adicionarNota(2);
            boletim.adicionarNota(3);

            const notas = boletim.notas;
            const tamanho = notas.length;

            expect(tamanho).toBe(3);
        });
    });
    
    describe('verificarAprovacao()', () =>{
        test('deve calcular a media',()=>{
            nota1= 10;
            nota2= 9;
            nota3= 5;
            boletim.adicionarNota(nota1);
            boletim.adicionarNota(nota2);
            boletim.adicionarNota(nota3);

            const media = boletim.calcularMedia();

            const resultado = boletim.verificarAprovacao();

            expect(resultado).toBe(true);
        });

        test('verificar se o tamanho da lista é válido',()=>{
            boletim.adicionarNota(10);
            boletim.adicionarNota(2);
            boletim.adicionarNota(3);

            const notas = boletim.notas;
            const tamanho = notas.length;

            expect(tamanho).toBe(3);
        });
    });
});