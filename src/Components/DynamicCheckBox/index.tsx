import React, { useCallback, useEffect, useState } from "react";

interface element {
  id: number;
  content: string;
}

interface props {
  list: element[];
}

const DynamicCheckBox = ({ list }) => {
  const [checked, setChecked] = useState({});

  useEffect(() => {
    setChecked(
      list.map((elem) => {
        return { [elem.id]: false };
      })
    );
  }, []);

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  const onChange = function () {
    setChecked({ ...checked, [this.id]: true });
  };

  return (
    <>
      <button>전체 체크</button>
      {list.map((item) => {
        return (
          <label key={item.id}>
            <input type="checkbox" onChange={onChange.bind({ id: item.id })} />
            {item.content}
          </label>
        );
      })}
    </>
  );
};

export default DynamicCheckBox;
