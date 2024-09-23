// Questão 1: Verificar se um número pertence à sequência de Fibonacci
function pertenceFibonacci(numero) {
    let a = 0, b = 1;
    while (b < numero)  {
        let temp = b;
        b = a + b;
        a = temp;
    }
    if (b === numero)  {
        return `${numero} pertence à sequência de Fibonacci.` ;
    } else {
        return `${numero} não pertence à sequência de Fibonacci.` ;
     }
}

// Questão 2: Contar a ocorrência da letra 'a' em uma string
function contarLetraA(string) {
    const regex = /a/gi; // case insensitive
    const ocorrencias = string.match(regex);
    return {
        quantidade: ocorrencias ? ocorrencias.length : 0,
        mensagem: `A letra 'a' aparece ${ocorrencias ? ocorrencias.length : 0} vez(es) na string.`
    };
}

//  Questão 3: Cálculo da soma
function calcularSoma() {
    let INDICE = 12, SOMA = 0, K = 1;
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA +  K ;
    }
    return `O valor da variável SOMA é ${SOMA}.`;
}

//  Questão 4: completar a sequência
function completarSequencias() {
    const sequencias = {
        a: 9, // 1, 3, 5, 7, ___
        b: 128, // 2, 4, 8, 16, 32, 64, ____
        c: 49, // 0, 1, 4, 9, 16, 25, 36, ____
        d: 100, // 4, 16, 36, 64, ____
        e: 13, // 1, 1, 2, 3, 5, 8, ____
        f: 20 // 2, 10, 12, 16, 17, 18, 19, ____
    };
    return sequencias;
}

// questão 5: Descobrir qual interruptor controla qual lâmpada
function descobrirInterruptores() {
    return `1. Ligue o primeiro interruptor e deixe-o ligado por 10 minutos.`
        + `\n2. Desligue o primeiro interruptor e ligue o segundo.`
        + `\n3. Vá até as lâmpadas:`
        + `\n- A lâmpada que está acesa é do segundo interruptor.`
        + `\n- A lâmpada que está desligada e quente é do primeiro interruptor.`
        + `\n- A lâmpada que está desligada e fria é do terceiro interruptor.`;
}

//  execução das funções
const numero = 21; // Exemplo de número para a questão 1
console.log(pertenceFibonacci(numero));

const string = "Vaga de estagio na Target Ribeirao Preto."; // Exemplo de string para a questão 2
console.log(contarLetraA(string));// se acaso colocar acentos na string as letras (a) não serão incluidas
console.log(calcularSoma());

const sequencias = completarSequencias();
console.log('Próximos elementos das sequências:', sequencias);

console.log(descobrirInterruptores());