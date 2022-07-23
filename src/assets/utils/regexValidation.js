export const regExName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
export const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/;
export const regExTelefone = /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$/;

// Regex do nome aceita apenas letras e caracteres especiais utilizados em nomes

// /^
//   (?=.*\d)              deve conter ao menos um dígito
//   (?=.*[a-z])           deve conter ao menos uma letra minúscula
//   (?=.*[A-Z])           deve conter ao menos uma letra maiúscula
//   (?=.*[$*&@#])         deve conter ao menos um caractere especial
//   [0-9a-zA-Z$*&@#]{6,}  deve conter ao menos 6 dos caracteres mencionados
// $/