//Функция выбора формы слова в зависимости от числа
export const normalizeCountForm = (count, forms) => {
    if (+count % 10 === 1) {
        return forms[0]
    } else return forms[1];
}