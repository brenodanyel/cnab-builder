import { CNABBuilder } from '../../cnab-builder';
import { Position } from '../../helper';

export class CNAB400TrailerBuilder extends CNABBuilder {
	constructor() {
		super(400);
	}

	// Preencher com ‘9’
	setCodigoRegistro(input: string) {
		const position = new Position(0, 1);
		return this.replace(input, position, '9');
	}

	// Preencher com ‘2’
	setCodigoRetorno(input: string) {
		const position = new Position(1, 2);
		return this.replace(input, position, '9');
	}

	// Preencher com ‘01’
	setCodigoDoServico(input: string) {
		const position = new Position(2, 4);
		return this.replace(input, position, '9');
	}

	// Preencher com 104
	setCodigoDoBanco(input: string) {
		const position = new Position(4, 7);
		return this.replace(input, position, '9');
	}

	// Preencher com o numero da linha atual
	setNumeroSequencial(input: string) {
		const position = new Position(394, 400);
		return this.replace(input, position, '9');
	}
}
