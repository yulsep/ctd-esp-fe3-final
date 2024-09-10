import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [dentist, setDentist] = useState([]);
  const { id } = useParams();

  const URL = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    axios(URL).then((response) => {
      setDentist(response.data);
    });
  }, []);

  return (
    <>
      <div className="detail-container">
        <h1>Detail Dentist {id} </h1>
        <table className="detail-table">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{dentist.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{dentist.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{dentist.phone}</td>
            </tr>
            <tr>
              <th>Website</th>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Detail;
