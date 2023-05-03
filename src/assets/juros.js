export default {
    calc(P, PMT, t, r, n = 12) {
        const rM = r / n; // taxa mensal
        const nMonths = t * n; // número total de pagamentos
        let FV = P; // valor futuro inicial é igual ao valor presente
        for (let i = 0; i < nMonths; i++) {
            FV *= 1 + rM; // adicionar juros
            FV += PMT; // adicionar pagamento mensal
        }
        return FV.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    },
};
