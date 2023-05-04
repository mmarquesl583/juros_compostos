export default {
    calc(P, PMT, t, r, n = 12) {
        const rM = r / n; // taxa mensal
        const nMonths = t * n; // número total de pagamentos
        let valor_final = P; // valor futuro inicial é igual ao valor presente
        for (let i = 0; i < nMonths; i++) {
            valor_final *= 1 + rM; // adicionar juros
            valor_final += PMT; // adicionar pagamento mensal
        }
        let investido = P + nMonths * PMT;
        let juros = valor_final - investido;

        let meses_container = [];
        let investido_container = [];
        let juros_container = [];
        let final_container = [];

        for (var i = 0; i <= nMonths; i++) {
            meses_container[i] = i;
            investido_container[i] = P + i * PMT;
            final_container[i] = P;
            for (let j = 0; j < i; j++) {
                final_container[i] *= 1 + rM; // adicionar juros
                final_container[i] += PMT; // adicionar pagamento mensal
            }
            juros_container[i] = final_container[i] - investido_container[i];
        }

        return [
            [valor_final, investido, juros],
            [meses_container, investido_container, juros_container],
        ];
    },
    format_real(FV) {
        return FV.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    },
};
