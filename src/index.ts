class Utils {
  static validarCpf(str: string) {
    if (!str) return false;
    let soma = 0;
    let resto;

    const cpf = str.replace(/[\s.-]*/gim, '');

    if (
      !cpf ||
      cpf.length !== 11 ||
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999'
    ) {
      return false;
    }

    for (let i = 1; i <= 9; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
  }

  static formatarCpf(value: string) {
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  static formatarCnpj(value: string) {
    return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }

  static formatarTelefone(value: string) {
    return value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }

  static formatarCelular(value: string) {
    return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  static somenteNumero(value: string) {
    return value.replace(/\D/g, '');
  }

  static formatarSeparadorMilhar(value: string | number) {
    return Number(value).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  static formatarMoeda(value: string | number) {
    return Number(value).toLocaleString("pt-BR")
  }
}

export default Utils;