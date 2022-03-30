// número e a geração atrelada a ele para os gêneros masculino e feminino
const gens = {
	 "-3": ["great grandfather", "great grandmother"],
	 "-2": ["grandfather", "grandmother"], 
	 "-1": ["father", "mother"],
	 "0": ["me!", "me!"],
	 "1": ["son", "daughter"],
	 "2": ["grandson", "granddaughter"],
	 "3": ["great grandson", "great granddaughter"]
}

function generation(x, y) {
// operação ternária que checa o gênero e retorna a geração baseada no número

	return y==="m"?gens[x][0]:gens[x][1]
