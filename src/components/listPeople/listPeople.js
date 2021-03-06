import React from 'react';

export default function ListPeople({ data }) {
  return (
    <div className="container-List">
      <table className="table">
        <thead className="table-head">
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Eye color</th>
            <th>Hair color</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Skin color</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {data &&
            data.map((people, index) => (
              <tr key={index}>
                <td>{people.name}</td>
                <td>{people.gender === 'n/a' ? 'no gender' : people.gender}</td>
                <td>{people.eye_color}</td>
                <td>
                  {people.hair_color === 'n/a' ? 'no hair' : people.hair_color}
                </td>
                <td>
                  {people.height !== 'unknown'
                    ? people.height + ' cm'
                    : people.height}{' '}
                </td>
                <td>
                  {people.mass !== 'unknown'
                    ? people.mass + ' kg'
                    : people.mass}
                </td>
                <td>{people.skin_color}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
