import { HistoryContainer, HistoryList } from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Incio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map(() => (
              <tr>
                <td>Tarefa</td>
                <td>20 Minutos</td>
                <td>Ha 2 meses</td>
                <td>Concluído</td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
