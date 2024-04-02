// 3.6.7. Descrição de registro tipo ‘0’ (Obrigatório) – Header de Retorno

import { CNABBuilder } from '../../cnab-builder';
import { Position } from '../../helper';

export class CNAB400HeaderBuilder extends CNABBuilder {
	constructor() {
		super(400);
	}

	// Preencher com ‘0’
	setCodigoRegistro(input: string) {
		const position = new Position(0, 1);
		return this.replace(input, position, '9');
	}

	// Preencher com '2'
	setCodigoRetorno(input: string) {
		const position = new Position(1, 2);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE031
	setLiteralDoRetorno(input: string) {
		const position = new Position(2, 9);
		return this.replace(input, position, 'X');
	}

	// Preencher com ‘01’
	setCodigoDoServico(input: string) {
		const position = new Position(9, 11);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE002
	setLiteralDeServico(input: string) {
		const position = new Position(11, 26);
		return this.replace(input, position, 'X');
	}

	// Ver Nota Explicativa NE003
	setCodigoAgencia(input: string) {
		const position = new Position(26, 30);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE004
	setCodigoBeneficiario(input: string) {
		const position = new Position(30, 37);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE005
	setNomeDaEmpresa(input: string) {
		const position = new Position(46, 76);
		return this.replace(input, position, 'X');
	}

	// Ver Nota Explicativa NE006
	setCodigoDoBanco(input: string) {
		const position = new Position(76, 79);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE007
	setNomeDoBanco(input: string) {
		const position = new Position(79, 94);
		return this.replace(input, position, 'X');
	}

	// Ver Nota Explicativa NE008
	setDataDeGeracao(input: string) {
		const position = new Position(94, 100);
		return this.replace(input, position, '9');
	}

	setMensagemDeRetorno(input: string) {
		const position = new Position(100, 158);
		return this.replace(input, position, 'X');
	}

	// Ver Nota Explicativa NE065
	setVersaoDoLayout(input: string) {
		const position = new Position(158, 161);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE009
	setNumeroSequencialA(input: string) {
		const position = new Position(389, 394);
		return this.replace(input, position, '9');
	}

	// Preencher com o numero da linha atual
	setNumeroSequencialB(input: string) {
		const position = new Position(394, 400);
		return this.replace(input, position, '9');
	}
}
