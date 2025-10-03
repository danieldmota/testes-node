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
            expect(() => calculadora.somar(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const a = 'sla';
            const b = 10;
            expect(() => calculadora.somar(a,b)).toThrow(TypeError);
            expect(() => calculadora.somar(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - array',()=>{
            const a = ['sla', 12];
            const b = 10;
            expect(() => calculadora.somar(a,b)).toThrow(TypeError);
            expect(() => calculadora.somar(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - booleano',()=>{
            const a = true;
            const b = 10;
            expect(() => calculadora.somar(a,b)).toThrow(TypeError);
            expect(() => calculadora.somar(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - null',()=>{
            const a = 10;
            const b = null;
            expect(() => calculadora.somar(a,b)).toThrow(TypeError);
            expect(() => calculadora.somar(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const a = 10;
            const b = 'sla';
            expect(() => calculadora.somar(a,b)).toThrow(TypeError);
            expect(() => calculadora.somar(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - array',()=>{
            const a = 10;
            const b = ['sla', 12];
            expect(() => calculadora.somar(a,b)).toThrow(TypeError);
            expect(() => calculadora.somar(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - booleano',()=>{
            const a = 10;
            const b = true;
            expect(() => calculadora.somar(a,b)).toThrow(TypeError);
            expect(() => calculadora.somar(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve ser somar dois valores positivos',()=>{
            const resultado = calculadora.somar(1,6);

            expect(resultado).toBe(7);
        });

        test('deve ser somar dois valores negativos',()=>{
            const resultado = calculadora.somar(-1,-6);

            expect(resultado).toBe(-7);
        });
    });

    describe('subtrair()', () =>{
        test('deve falhar quando parametro a invalido - null',()=>{
            const a = 6;
            const b = null;
            expect(() => calculadora.subtrair(a,b)).toThrow(TypeError);
            expect(() => calculadora.subtrair(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const a = 6;
            const b = 'sla';
            expect(() => calculadora.subtrair(a,b)).toThrow(TypeError);
            expect(() => calculadora.subtrair(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - array',()=>{
            const a = 6;
            const b = ['sla', 10];
            expect(() => calculadora.subtrair(a,b)).toThrow(TypeError);
            expect(() => calculadora.subtrair(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - bool',()=>{
            const a = 6;
            const b = true;
            expect(() => calculadora.subtrair(a,b)).toThrow(TypeError);
            expect(() => calculadora.subtrair(a,b)).toThrow(/^O valor sla não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - null',()=>{
            const a = null;
            const b = 6;
            expect(() => calculadora.subtrair(a,b)).toThrow(TypeError);
            expect(() => calculadora.subtrair(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const a = 'sla';
            const b = 6;
            expect(() => calculadora.subtrair(a,b)).toThrow(TypeError);
            expect(() => calculadora.subtrair(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - array',()=>{
            const a = ['sla', 10];
            const b = 6;
            expect(() => calculadora.subtrair(a,b)).toThrow(TypeError);
            expect(() => calculadora.subtrair(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - bool',()=>{
            const a = true;
            const b = 6;
            expect(() => calculadora.subtrair(a,b)).toThrow(TypeError);
            expect(() => calculadora.subtrair(a,b)).toThrow(/^O valor sla não é um numero valido$/);
        });

        test('deve ser subtrair dois valores positivos',()=>{
            const resultado = calculadora.subtrair(1,6);
            expect(resultado).toBe(-5);
        });

        test('deve ser subtrair dois valores negativos',()=>{
            const resultado = calculadora.subtrair(-1,-6);
            expect(resultado).toBe(5);
        });
    });

    describe('multiplicar()', ()=>{
        test('deve falhar quando parametro a invalido - null',()=>{
            const a = 6;
            const b = null;
            expect(() => calculadora.multiplicar(a,b)).toThrow(TypeError);
            expect(() => calculadora.multiplicar(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const a = 6;
            const b = 'sla';
            expect(() => calculadora.multiplicar(a,b)).toThrow(TypeError);
            expect(() => calculadora.multiplicar(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - array',()=>{
            const a = 6;
            const b = ['sla', 10];
            expect(() => calculadora.multiplicar(a,b)).toThrow(TypeError);
            expect(() => calculadora.multiplicar(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - bool',()=>{
            const a = 6;
            const b = true;
            expect(() => calculadora.multiplicar(a,b)).toThrow(TypeError);
            expect(() => calculadora.multiplicar(a,b)).toThrow(/^O valor sla não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - null',()=>{
            const a = null;
            const b = 6;
            expect(() => calculadora.multiplicar(a,b)).toThrow(TypeError);
            expect(() => calculadora.multiplicar(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const a = 'sla';
            const b = 6;
            expect(() => calculadora.multiplicar(a,b)).toThrow(TypeError);
            expect(() => calculadora.multiplicar(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - array',()=>{
            const a = ['sla', 10];
            const b = 6;
            expect(() => calculadora.multiplicar(a,b)).toThrow(TypeError);
            expect(() => calculadora.multiplicar(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - bool',()=>{
            const a = true;
            const b = 6;
            expect(() => calculadora.multiplicar(a,b)).toThrow(TypeError);
            expect(() => calculadora.multiplicar(a,b)).toThrow(/^O valor sla não é um numero valido$/);
        });

        test(('deve ser subtrair dois valores positivos'),()=>{
            const resultado = calculadora.multiplicar(2, 9);
            expect(resultado).toBe(18);
        });

        test(('deve ser subtrair dois valores negativos'),()=>{
            const resultado = calculadora.multiplicar(-2, -9);
            expect(resultado).toBe(18);
        });
    });

    describe('dividir()', ()=>{
        test('deve falhar quando parametro a invalido - null',()=>{
            const a = 6;
            const b = null;
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const a = 6;
            const b = 'sla';
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - array',()=>{
            const a = 6;
            const b = ['sla', 10];
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - bool',()=>{
            const a = 6;
            const b = true;
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor sla não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - null',()=>{
            const a = null;
            const b = 6;
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const a = 'sla';
            const b = 6;
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - array',()=>{
            const a = ['sla', 10];
            const b = 6;
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - bool',()=>{
            const a = true;
            const b = 6;
            expect(() => calculadora.dividir(a,b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a,b)).toThrow(/^O valor sla não é um numero valido$/);
        });

        test(('deve ser subtrair dois valores positivos'),()=>{
            const resultado = calculadora.dividir(2, 9);
            expect(resultado).toBe(18);
        });

        test(('deve ser subtrair dois valores negativos'),()=>{
            const resultado = calculadora.dividir(-2, -9);
            expect(resultado).toBe(18);
        });
    });

    describe('jurosSimples()', ()=>{
        test('deve falhar quando parametro a invalido - null',()=>{
            const capital = null;
            const taxa = 6;
            const tempo = 10;
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const capital = 'sla';
            const taxa = 6;
            const tempo = 10;
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro capital invalido - array',()=>{
            const capital = ['sla', 10];
            const taxa = 6;
            const tempo = 10;
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro capital invalido - bool',()=>{
            const capital = true;
            const taxa = 600;
            const tempo = 10;
            expect(() => calculadora.jurosSimples(capital,taxa)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa)).toThrow(/^O valor sla não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - null',()=>{
            const capital = 6;
            const taxa = null;
            const tempo = 10;
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const capital = 6;
            const taxa = 'sla';
            const tempo = 10;
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro capital invalido - array',()=>{
            const capital = 6;
            const taxa = ['sla', 10];
            const tempo = 10;
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro capital invalido - bool',()=>{
            const capital = 600;
            const taxa = true;
            const tempo = 10;
            expect(() => calculadora.jurosSimples(capital,taxa)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa)).toThrow(/^O valor sla não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - null',()=>{
            const capital = 6;
            const taxa = 10;
            const tempo = null;
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const capital = 6;
            const taxa = 10;
            const tempo = 'sla';
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro capital invalido - array',()=>{
            const capital = 6;
            const taxa = 10;
            const tempo = ['sla', 10];
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro capital invalido - bool',()=>{
            const capital = 600;
            const taxa = 10;
            const tempo = true;
            expect(() => calculadora.jurosSimples(capital,taxa)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa)).toThrow(/^O valor sla não é um numero valido$/);
        });

        test(('deve ser subtrair dois valores positivos'),()=>{
            const resultado = calculadora.jurosSimples(20, 9, 10);
            expect(resultado).toBe(1800);
        });

        test(('deve ser subtrair dois valores negativos'),()=>{
            const resultado = calculadora.jurosSimples(-2, -9, -2);
            expect(resultado).toBe(-36);
        });
    });

    describe('jurosSimples()', ()=>{
        test('deve falhar quando parametro a invalido - null',()=>{
            const capital = null;
            const taxa = 6;
            const tempo = 10;
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const capital = 'sla';
            const taxa = 6;
            const tempo = 10;
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro capital invalido - array',()=>{
            const capital = ['sla', 10];
            const taxa = 6;
            const tempo = 10;
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro capital invalido - bool',()=>{
            const capital = true;
            const taxa = 600;
            const tempo = 10;
            expect(() => calculadora.jurosSimples(capital,taxa,tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa,tempo)).toThrow(/^O valor sla não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - null',()=>{
            const capital = 6;
            const taxa = null;
            const tempo = 10;
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const capital = 6;
            const taxa = 'sla';
            const tempo = 10;
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro capital invalido - array',()=>{
            const capital = 6;
            const taxa = ['sla', 10];
            const tempo = 10;
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro capital invalido - bool',()=>{
            const capital = 600;
            const taxa = true;
            const tempo = 10;
            expect(() => calculadora.jurosSimples(capital,taxa)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa)).toThrow(/^O valor sla não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - null',()=>{
            const capital = 6;
            const taxa = 10;
            const tempo = null;
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro a invalido - string',()=>{
            const capital = 6;
            const taxa = 10;
            const tempo = 'sla';
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro capital invalido - array',()=>{
            const capital = 6;
            const taxa = 10;
            const tempo = ['sla', 10];
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(/^O valor não é um numero valido$/);
        });

        test('deve falhar quando parametro capital invalido - bool',()=>{
            const capital = 600;
            const taxa = 10;
            const tempo = true;
            expect(() => calculadora.jurosSimples(capital,taxa)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital,taxa, tempo)).toThrow(/^O valor sla não é um numero valido$/);
        });

        test(('deve ser subtrair dois valores positivos'),()=>{
            const resultado = calculadora.jurosSimples(20, 9, 10);
            expect(resultado).toBe(1800);
        });

        test(('deve ser subtrair dois valores negativos'),()=>{
            const resultado = calculadora.jurosSimples(-2, -9, -2);
            expect(resultado).toBe(-36);
        });
    });
});