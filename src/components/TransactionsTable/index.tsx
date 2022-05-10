import { Container } from "./styles";

export function TransectionsTable() {
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>10/05/2022</td>
          </tr>
          <tr>
            <td>Hamburguer</td>
            <td className="withdraw">- R$100</td>
            <td>Alimentação</td>
            <td>01/05/2022</td>
          </tr>
          <tr>
            <td>Aluguel do Apartamento</td>
            <td className="withdraw">- R$1.100</td>
            <td>Casa</td>
            <td>10/04/2022</td>
          </tr>
          <tr>
            <td>Computador</td>
            <td className="deposit">R$5.400</td>
            <td>Casa</td>
            <td>10/03/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}