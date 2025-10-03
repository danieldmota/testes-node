import { Calculadora } from "../../src/utils/Calculadora";

describe('Calculadora.js', ()=>{

    let calculadora;

    beforeEach(()=>{
        calculadora= new Calculadora();
    });

    describe('somar()', () =>{
        test('deve falhar quando parametro a invalido - null',()=>{
            const a = null;
            const b = 10;
            expect(() => calculadora.somar(a,b)).toThrow(TypeError);
            expect(() => calculadora.somar(a,b)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const a = 'sla';
            const b = 10;
            expect(() => calculadora.somar(a,b)).toThrow(TypeError);
            expect(() => calculadora.somar(a,b)).toThrow(/^O valor "sla" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - array',()=>{
            const a = ['sla', 12];
            const b = 10;
            expect(() => calculadora.somar(a,b)).toThrow(TypeError);
            expect(() => calculadora.somar(a,b)).toThrow(/^O valor "sla,12" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - booleano',()=>{
            const a = true;
            const b = 10;
            expect(() => calculadora.somar(a,b)).toThrow(TypeError);
            expect(() => calculadora.somar(a,b)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - null',()=>{
            const a = 10;
            const b = null;
            expect(() => calculadora.somar(a,b)).toThrow(TypeError);
            expect(() => calculadora.somar(a,b)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const a = 10;
            const b = 'sla';
            expect(() => calculadora.somar(a,b)).toThrow(TypeError);
            expect(() => calculadora.somar(a,b)).toThrow(/^O valor "sla" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - array',()=>{
            const a = 10;
            const b = ['sla', 12];
            expect(() => calculadora.somar(a,b)).toThrow(TypeError);
            expect(() => calculadora.somar(a,b)).toThrow(/^O valor "sla,12" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - booleano',()=>{
            const a = 10;
            const b = true;
            expect(() => calculadora.somar(a,b)).toThrow(TypeError);
            expect(() => calculadora.somar(a,b)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('deve ser somado dois valores positivos',()=>{
            const resultado = calculadora.somar(1,6);

            expect(resultado).toBe(7);
        });

        test('deve ser somado dois valores negativos',()=>{
            const resultado = calculadora.somar(-1,-6);

            expect(resultado).toBe(-7);
        });
    });
    describe('subtrair()', () =>{
        test('deve falhar quando parametro a invalido - null',()=>{
            const a = null;
            const b = 10;
            expect(() => calculadora.subtrair(a,b)).toThrow(TypeError);
            expect(() => calculadora.subtrair(a,b)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const a = 'sla';
            const b = 10;
            expect(() => calculadora.subtrair(a,b)).toThrow(TypeError);
            expect(() => calculadora.subtrair(a,b)).toThrow(/^O valor "sla" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - array',()=>{
            const a = ['sla', 12];
            const b = 10;
            expect(() => calculadora.subtrair(a,b)).toThrow(TypeError);
            expect(() => calculadora.subtrair(a,b)).toThrow(/^O valor "sla,12" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - booleano',()=>{
            const a = true;
            const b = 10;
            expect(() => calculadora.subtrair(a,b)).toThrow(TypeError);
            expect(() => calculadora.subtrair(a,b)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - null',()=>{
            const a = 10;
            const b = null;
            expect(() => calculadora.subtrair(a,b)).toThrow(TypeError);
            expect(() => calculadora.subtrair(a,b)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const a = 10;
            const b = 'sla';
            expect(() => calculadora.subtrair(a,b)).toThrow(TypeError);
            expect(() => calculadora.subtrair(a,b)).toThrow(/^O valor "sla" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - array',()=>{
            const a = 10;
            const b = ['sla', 12];
            expect(() => calculadora.subtrair(a,b)).toThrow(TypeError);
            expect(() => calculadora.subtrair(a,b)).toThrow(/^O valor "sla,12" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - booleano',()=>{
            const a = 10;
            const b = true;
            expect(() => calculadora.subtrair(a,b)).toThrow(TypeError);
            expect(() => calculadora.subtrair(a,b)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('deve ser subtraido dois valores positivos',()=>{
            const resultado = calculadora.subtrair(1,6);

            expect(resultado).toBe(-5);
        });

        test('deve ser subtraido dois valores negativos',()=>{
            const resultado = calculadora.subtrair(-1,-6);

            expect(resultado).toBe(5);
        });
    });

    describe('multiplicar()', () =>{
        test('deve falhar quando parametro a invalido - null',()=>{
            const a = null;
            const b = 10;
            expect(() => calculadora.multiplicar(a,b)).toThrow(TypeError);
            expect(() => calculadora.multiplicar(a,b)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const a = 'sla';
            const b = 10;
            expect(() => calculadora.multiplicar(a,b)).toThrow(TypeError);
            expect(() => calculadora.multiplicar(a,b)).toThrow(/^O valor "sla" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - array',()=>{
            const a = ['sla', 12];
            const b = 10;
            expect(() => calculadora.multiplicar(a,b)).toThrow(TypeError);
            expect(() => calculadora.multiplicar(a,b)).toThrow(/^O valor "sla,12" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - booleano',()=>{
            const a = true;
            const b = 10;
            expect(() => calculadora.multiplicar(a,b)).toThrow(TypeError);
            expect(() => calculadora.multiplicar(a,b)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - null',()=>{
            const a = 10;
            const b = null;
            expect(() => calculadora.multiplicar(a,b)).toThrow(TypeError);
            expect(() => calculadora.multiplicar(a,b)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const a = 10;
            const b = 'sla';
            expect(() => calculadora.multiplicar(a,b)).toThrow(TypeError);
            expect(() => calculadora.multiplicar(a,b)).toThrow(/^O valor "sla" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - array',()=>{
            const a = 10;
            const b = ['sla', 12];
            expect(() => calculadora.multiplicar(a,b)).toThrow(TypeError);
            expect(() => calculadora.multiplicar(a,b)).toThrow(/^O valor "sla,12" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - booleano',()=>{
            const a = 10;
            const b = true;
            expect(() => calculadora.multiplicar(a,b)).toThrow(TypeError);
            expect(() => calculadora.multiplicar(a,b)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('deve ser multiplicado dois valores positivos',()=>{
            const resultado = calculadora.multiplicar(1,6);

            expect(resultado).toBe(6);
        });

        test('deve ser multiplicado dois valores negativos',()=>{
            const resultado = calculadora.multiplicar(-1,-6);

            expect(resultado).toBe(6);
        });
    });
    describe('dividir()', () =>{
        test('deve falhar quando parametro a invalido - null',()=>{
            const a = null;
            const b = 10;
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const a = 'sla';
            const b = 10;
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor "sla" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - array',()=>{
            const a = ['sla', 12];
            const b = 10;
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor "sla,12" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - booleano',()=>{
            const a = true;
            const b = 10;
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - null',()=>{
            const a = 10;
            const b = null;
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const a = 10;
            const b = 'sla';
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor "sla" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - array',()=>{
            const a = 10;
            const b = ['sla', 12];
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor "sla,12" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - booleano',()=>{
            const a = 10;
            const b = true;
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('deve ser multiplicado dois valores positivos',()=>{
            const resultado = calculadora.dividir(10,2);

            expect(resultado).toBe(5);
        });

        test('deve ser multiplicado dois valores negativos',()=>{
            const resultado = calculadora.dividir(-10,-2);

            expect(resultado).toBe(5);
        });
    });
    describe('jurosSimples()', () =>{
        test('deve falhar quando parametro a invalido - null',()=>{
            const a = null;
            const b = 10;
            const tempo = 2;
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const a = 'sla';
            const b = 10;
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor "sla" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - array',()=>{
            const a = ['sla', 12];
            const b = 10;
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor "sla,12" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - booleano',()=>{
            const a = true;
            const b = 10;
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - null',()=>{
            const a = 10;
            const b = null;
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const a = 10;
            const b = 'sla';
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor "sla" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - array',()=>{
            const a = 10;
            const b = ['sla', 12];
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor "sla,12" não é um número válido$/);
        });

        test('deve falhar quando parametro a invalido - booleano',()=>{
            const a = 10;
            const b = true;
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('deve ser multiplicado dois valores positivos',()=>{
            const resultado = calculadora.dividir(10,2);

            expect(resultado).toBe(5);
        });

        test('deve ser multiplicado dois valores negativos',()=>{
            const resultado = calculadora.dividir(-10,-2);

            expect(resultado).toBe(5);
        });
    });
});