import {createRoot } from "react-dom/client";

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>Ayush</td>
    </tr>
    <tr>
      <td>Kumar</td>
    </tr>
    <tr>
      <td>Vishwakarma</td>
    </tr>
  </table>
)
createRoot(document.getElementById("root")).render(
  myelement
)