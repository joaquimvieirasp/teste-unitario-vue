// Impotações

import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';
import Aluno from  '../Aluno.vue';


// Inicializa os testes
describe('Aluno', () => {

        // Primeiro Veriificar o valor da variavel nome
    it('Verificando o valor da variável', () => {

        // Obter o componente Aluno
        const componente = mount(Aluno);

        // Chamar a função que altera o nome
        // componente.vm.alterarNome();

        // Realizar o teste
        expect(componente.vm.nome).toBe('Aline');

    });

});