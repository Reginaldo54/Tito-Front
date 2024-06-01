import "./todasVisitas.css";
import React from "react";

function TodasVisitasComponente() {

const dadosExemplo = [
        {
          "id": 1,
          "date": "2023-06-01",
          "startTime": "10:00",
          "endTime": "11:00",
          "description": "Meeting with team"
        },
        {
          "id": 2,
          "date": "2023-06-02",
          "startTime": "14:00",
          "endTime": "15:30",
          "description": "Project presentation"
        },
        {
          "id": 3,
          "date": "2023-06-03",
          "startTime": "09:00",
          "endTime": "10:00",
          "description": "Client call"
        },
        {
          "id": 4,
          "date": "2023-06-04",
          "startTime": "13:00",
          "endTime": "14:00",
          "description": "Team lunch"
        },
        {
          "id": 5,
          "date": "2023-06-05",
          "startTime": "15:00",
          "endTime": "16:00",
          "description": "Workshop"
        },
        {
          "id": 6,
          "date": "2023-06-06",
          "startTime": "11:00",
          "endTime": "12:00",
          "description": "Webinar"
        },
        {
          "id": 7,
          "date": "2023-06-07",
          "startTime": "10:00",
          "endTime": "11:30",
          "description": "Team meeting"
        },
        {
          "id": 8,
          "date": "2023-06-08",
          "startTime": "09:30",
          "endTime": "10:30",
          "description": "Performance review"
        },
        {
          "id": 9,
          "date": "2023-06-09",
          "startTime": "16:00",
          "endTime": "17:00",
          "description": "Project planning"
        },
        {
          "id": 10,
          "date": "2023-06-10",
          "startTime": "13:00",
          "endTime": "14:30",
          "description": "Team building activity"
        }
      ]

    return(
        <div id="todasVisitasContainer">
            <div id="todasVisitas">
                <div id="tableTitle">
                    <span>TODAS AS VISITAS</span>
                </div>
                <table>
                    <thead>
                        <tr>
                        <th>Data</th>
                        <th>Hora Inicial</th>
                        <th>Hora Termínio</th>
                        <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dadosExemplo.map((event) => (
                        <tr key={event.id}>
                            <td>{event.date}</td>
                            <td>{event.startTime}</td>
                            <td>{event.endTime}</td>
                            <td>{event.description}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TodasVisitasComponente;