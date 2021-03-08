/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
export default function ChartTest({ data }) {
  const [gender, setGender] = useState([]);
  const [colorEye, setColorEye] = useState([]);
  const [colorHair, setColorHair] = useState([]);
  const [dataGender, setDataGender] = useState([]);
  const [dataColoreye, setDataColoreye] = useState([]);
  const [dataColorHair, setDataColorHair] = useState([]);

  useEffect(() => {
    let gender = [];
    let colorEye = [];
    let colorHair = [];

    data.forEach((e) => {
      gender = [...new Set(gender.concat(e.gender))];
      colorEye = [...new Set(colorEye.concat(e.eye_color.split(', ')))];
      colorHair = [...new Set(colorHair.concat(e.hair_color.split(', ')))];
    });

    setGender(gender);
    setColorEye(colorEye);
    setColorHair(colorHair);
  }, [data]);

  useEffect(() => {
    setDataGender(getQuantity(gender, 'gender'));
    setDataColoreye(getQuantity(colorEye, 'eyes'));
    setDataColorHair(getQuantity(colorHair, 'hair'));
  }, [gender, colorEye]);

  function getQuantity(tag, route) {
    let quantity = [];

    if (tag.length !== 0) {
      for (let i = 0; i < tag.length; i++) {
        switch (route) {
          case 'gender':
            quantity.push(data.filter((e) => e.gender === tag[i]).length);
            break;

          case 'eyes':
            quantity.push(
              data.filter((e) => e.eye_color.includes(tag[i])).length
            );
            break;

          case 'hair':
            quantity.push(
              data.filter((e) => e.hair_color.includes(tag[i])).length
            );
            break;

          default:
            break;
        }
      }
    }
    return quantity;
  }

  var chartDatagender = {
    labels: gender,
    datasets: [
      {
        data: dataGender,
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)',
        ],
        borderWidth: 0.5,
      },
    ],
  };

  var chartDataColorEyes = {
    labels: colorEye,
    datasets: [
      {
        data: dataColoreye,
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)',

          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)',

          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
        ],
        borderWidth: 0.5,
      },
    ],
  };

  var chartDataColorHair = {
    labels: colorHair,
    datasets: [
      {
        data: dataColorHair,
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)',

          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)',

          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
        ],
        borderWidth: 0.5,
      },
    ],
  };

  const chartoptions = {
    legend: {
      display: false,
    },
    responsive: false,
    circumference: Math.PI,
    rotation: Math.PI,
    maintainAspectRatio: false,
  };

  return (
    <div className="content-grafic">
      <div className="gender-grafic">
        <h2>Gender</h2>
        <Doughnut data={chartDatagender} options={chartoptions} />
      </div>
      <div className="color-eyes-grafic">
        <h2>Eyes color</h2>
        <Doughnut data={chartDataColorEyes} options={chartoptions} />
      </div>
      <div className="color-hair-grafic">
        <h2>Hair color</h2>
        <Doughnut data={chartDataColorHair} options={chartoptions} />
      </div>
    </div>
  );
}
