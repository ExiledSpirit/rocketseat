import { useContext } from 'react'
import { HistoryCointainer, HistoryList, Status } from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'
import { formatDistanceToNow } from 'date-fns/esm';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';

export function History() {
  const { cycles } = useContext(CyclesContext);

  function formatDate(date: Date) {
    return formatDistanceToNow(date, {
      addSuffix: true,
      locale: ptBR,
    })
  }

  return (
    <HistoryCointainer>
      <h1>Meu histórico</h1>

      <pre>{JSON.stringify(cycles, null, 2)}</pre>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              cycles.map(cycle => {
                return (
                  <tr>
                    <td>{cycle.task}</td>
                    <td>{cycle.minutesAmount}</td>
                    <td>{formatDate(cycle.startDate)}</td>
                    <td>
                      {cycle.finishedDate && (
                        <Status statusColor="green">Concluído</Status>
                      )}

                      {cycle.interruptedDate && (
                        <Status statusColor="red">Interrompido</Status>
                      )}

                      {!cycle.finishedDate && !cycle.interruptedDate && (
                        <Status statusColor="yellow">Em andamento</Status>
                      )}
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </HistoryList>
    </HistoryCointainer>
  )
}
