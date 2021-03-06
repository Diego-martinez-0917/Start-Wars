/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

export default function Filters({ data, onFilterData }) {
  const [filters, setFilters] = useState({
    name: '',
    gender: '',
    colorEye: '',
    colorHair: '',
    colorSkin: '',
  });
  const [gender, setGender] = useState([]);
  const [colorEye, setColorEye] = useState([]);
  const [colorHiar, setColorHair] = useState([]);
  const [colorSkin, setColorSkin] = useState([]);

  useEffect(() => {
    let colorHair = [];
    let colorEye = [];
    let gender = [];
    let skin = [];

    data.forEach((element) => {
      colorHair = [
        ...new Set(colorHair.concat(element.hair_color.split(', '))),
      ];
      colorEye = [...new Set(colorEye.concat(element.eye_color.split(', ')))];
      skin = [...new Set(skin.concat(element.skin_color.split(', ')))];
      gender = [...new Set(gender.concat(element.gender))];
    });

    setGender(gender);
    setColorEye(colorEye);
    setColorHair(colorHair);
    setColorSkin(skin);
  }, [data]);

  useEffect(() => {
    filterData();
  }, [filters]);

  function filterData() {
    let datafilter = data;
    if (filters.name) {
      datafilter = datafilter.filter((e) => e.name.includes(filters.name));
    }

    if (filters.gender) {
      datafilter = datafilter.filter((e) => e.gender === filters.gender);
    }

    if (filters.colorEye) {
      datafilter = datafilter.filter((e) =>
        e.eye_color.includes(filters.colorEye)
      );
    }
    if (filters.colorHair) {
      datafilter = datafilter.filter((e) =>
        e.hair_color.includes(filters.colorHair)
      );
    }

    if (filters.colorSkin) {
      datafilter = datafilter.filter((element) =>
        element.skin_color.includes(filters.colorSkin)
      );
    }

    onFilterData(datafilter);
  }

  function changeName(event) {
    let capital = event.target.value.replace(/\b\w/g, function (c) {
      return c.toUpperCase();
    });
    setFilters({ ...filters, name: capital });
  }

  function changeGender(event) {
    setFilters({ ...filters, gender: event.target.value });
  }

  function changeColorEye(event) {
    setFilters({ ...filters, colorEye: event.target.value });
  }

  function changeColorHair(event) {
    setFilters({ ...filters, colorHair: event.target.value });
  }

  function changeColorSkin(event) {
    setFilters({ ...filters, colorSkin: event.target.value });
  }

  return (
    <div className="content-filter">
      <input
        type="name"
        className="shared-name"
        placeholder="Shared name"
        value={filters.name}
        onChange={changeName}
      />

      <select
        name="gender"
        className="op-gender"
        id="gender"
        onChange={changeGender}
      >
        <option value="">Gender</option>
        {gender.length !== 0 &&
          gender.map((item, index) => (
            <option key={index} value={item}>
              {item === 'n/a' ? 'no gender' : item}
            </option>
          ))}
      </select>

      <select
        name="colorEyes"
        className="op-color-eyes"
        id="colorEyes"
        onChange={changeColorEye}
      >
        <option value="">Color eyes</option>
        {colorEye.length !== 0 &&
          colorEye.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
      </select>

      <select
        name="colorHair"
        className="op-color-hair"
        id="colorHair"
        onChange={changeColorHair}
      >
        <option value="">Color hair</option>
        {colorHiar.length !== 0 &&
          colorHiar.map((hair, index) => (
            <option key={index} value={hair}>
              {hair === 'n/a' ? 'no hair' : hair}
            </option>
          ))}
      </select>

      <select
        name="colorSkin"
        className="op-color-skin"
        id="colorSkin"
        onChange={changeColorSkin}
      >
        <option value="">Color Skin</option>
        {colorSkin.length !== 0 &&
          colorSkin.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
      </select>
    </div>
  );
}
