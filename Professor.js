class Professor extends Pessoa {

    constructor(nome, idade, matricula, disciplina) {
        super(nome, idade, matricula);
        this.disciplina = disciplina;
    }

    fala() {
        console.log(this.nome + " está falando sobre " + this.disciplina);
    }
}