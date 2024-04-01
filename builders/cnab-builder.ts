export class Position {
	constructor(public start: number, public end: number) {}
}

export class CNABBuilder {
	private row: string

	constructor(length: number) {
		this.row = ' '.repeat(length)
	}

	private normalize(input: string) {
		const caracteresAdmitidos = new Set([
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
			'G',
			'H',
			'I',
			'J',
			'K',
			'L',
			'M',
			'N',
			'O',
			'P',
			'Q',
			'R',
			'S',
			'T',
			'U',
			'V',
			'X',
			'Y',
			'Z',
			'W',
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
			'g',
			'h',
			'i',
			'j',
			'k',
			'l',
			'm',
			'n',
			'o',
			'p',
			'q',
			'r',
			's',
			't',
			'u',
			'v',
			'x',
			'y',
			'z',
			'w',
			'0',
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			',',
			'/',
			'(',
			')',
			'*',
			'&',
			'%',
			'"',
			'=',
			'-',
			'+',
			'!',
			':',
			'?',
			'<',
			'>',
			'#',
			'@',
			'.',
			"'",
			'$',
			';',
			'_',
		])

		const acentos = {
			á: 'A',
			é: 'E',
			í: 'I',
			ó: 'O',
			ú: 'U',
			à: 'A',
			è: 'E',
			ì: 'I',
			ò: 'O',
			ù: 'U',
			â: 'A',
			ê: 'E',
			î: 'I',
			ô: 'O',
			û: 'U',
			ã: 'A',
			õ: 'O',
			ç: 'C',
		}

		return input
			.split('')
			.map((char) => (caracteresAdmitidos.has(char) ? char.toUpperCase() : acentos[char.toLowerCase()] || ' '))
			.join('')
	}

	public replace(input: string, position: Position, picture: 'X' | '9') {
		input = this.normalize(input)

		const before = this.row.slice(0, position.start)
		const after = this.row.slice(position.end)

		const length = position.end - position.start
		const diff = length - input.length

		// se o input for menor que o tamanho do campo, preencher com espaços para caber no espaço
		if (diff > 0) {
			switch (picture) {
				case '9':
					input = '0'.repeat(diff) + input
					break
				default:
					input = input + ' '.repeat(diff)
			}
		}

		// se o input for maior que o tamanho do campo, cortar para caber no espaço
		if (input.length > length) {
			input = input.slice(0, length)
		}

		this.row = before + input + after
	}

	build() {
		return this.row
	}
}

