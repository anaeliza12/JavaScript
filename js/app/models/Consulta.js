class Consulta {
    construcao(nome, data, peso,altura){
       this._nome = nome;
       this._data = data;
       this._peso = peso;
       this._altura = altura;
       Object.freeze(this);    
    }





calculaIMC() {
    return this._peso / (this.altura * this.altura)
}

}



