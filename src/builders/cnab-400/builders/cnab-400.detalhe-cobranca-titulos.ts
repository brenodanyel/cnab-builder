import { CNABBuilder } from '../../cnab-builder';
import { Position } from '../../helper';

export class CNAB400DetalheCobrancaTitulosBuilder extends CNABBuilder {
	constructor() {
		super(400);
	}

	// Preencher com ‘1’
	setCodigoRegistro(input: string) {
		const position = new Position(0, 1);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE011
	setTipoInscricao(input: string) {
		const position = new Position(1, 3);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE012
	setNumeroInscricao(input: string) {
		const position = new Position(3, 17);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE004
	setCodigoDoBeneficiario(input: string) {
		const position = new Position(20, 27);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE027
	setIdEmissao(input: string) {
		const position = new Position(27, 28);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE028
	setIdPostagem(input: string) {
		const position = new Position(28, 29);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE014
	setUsoDaEmpresa(input: string) {
		const position = new Position(31, 56);
		return this.replace(input, position, 'X');
	}

	// Ver Nota Explicativa NE015
	setNossoNumeroModalidadeIdentificacao(input: string) {
		const position = new Position(56, 58);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE015
	setNossoNumeroIdentificacaoDoTituloNaCaixa(input: string) {
		const position = new Position(58, 73);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE032
	setCodigoRejeicao(input: string) {
		const position = new Position(79, 82);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE016
	setCarteira(input: string) {
		const position = new Position(106, 108);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE033
	setCodigoOcorrencia(input: string) {
		const position = new Position(108, 110);
		return this.replace(input, position, '9');
	}

	setDataOcorrencia(input: string) {
		const position = new Position(110, 116);
		return this.replace(input, position, '9');
	}

	// Nota Explicativa NE018
	setNumeroDocumento(input: string) {
		const position = new Position(116, 126);
		return this.replace(input, position, 'X');
	}

	// Nota Explicativa NE019
	setDataVencimento(input: string) {
		const position = new Position(146, 152);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE020
	setValorTitulo(input: string) {
		const position = new Position(152, 165);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE006
	setCodigoBanco(input: string) {
		const position = new Position(165, 168);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE021
	setAgenciaCobradora(input: string) {
		const position = new Position(168, 173);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE022
	setEspecie(input: string) {
		const position = new Position(173, 175);
		return this.replace(input, position, '9');
	}

	setDadosLiquidacaoValorTarifa(input: string) {
		const position = new Position(175, 188);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE035
	setDadosLiquidacaoCodigoCanalLiquidacao(input: string) {
		const position = new Position(188, 191);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE036
	setDadosLiquidacaoCodigoFormaPagamento(input: string) {
		const position = new Position(191, 192);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE034
	setDadosLiquidacaoInformacaoFloatNegociado(input: string) {
		const position = new Position(192, 194);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE034
	setDadosLiquidacaoDataDebito(input: string) {
		const position = new Position(194, 200);
		return this.replace(input, position, '9');
	}

	setValorIOF(input: string) {
		const position = new Position(215, 227);
		return this.replace(input, position, '9');
	}

	setAbatimento(input: string) {
		const position = new Position(227, 240);
		return this.replace(input, position, '9');
	}

	setDescontos(input: string) {
		const position = new Position(240, 253);
		return this.replace(input, position, '9');
	}

	setValorPrincipal(input: string) {
		const position = new Position(253, 266);
		return this.replace(input, position, '9');
	}

	setValorDosJuros(input: string) {
		const position = new Position(266, 279);
		return this.replace(input, position, '9');
	}

	setValorDaMulta(input: string) {
		const position = new Position(279, 292);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE026
	setCodigoMoeda(input: string) {
		const position = new Position(292, 293);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE037
	setDataCredito(input: string) {
		const position = new Position(293, 299);
		return this.replace(input, position, '9');
	}

	// Ver Nota Explicativa NE012
	setPortadorTipoInscricao(input: string) {
		const position = new Position(299, 300);
		return this.replace(input, position, '9');
	}

	setPortadorNumeroInscricao(input: string) {
		const position = new Position(300, 314);
		return this.replace(input, position, '9');
	}

	setNumeroSequencial(input: string) {
		const position = new Position(394, 400);
		return this.replace(input, position, '9');
	}
}
