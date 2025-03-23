class Aluno extends Pessoa {


    constructor(nome, idade, matricula) {
        super(nome, idade);
        this.matricula = matricula;
    }

    fala() {
        console.log(this.nome + " está estudando...");
    }
}

