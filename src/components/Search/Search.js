import React, { useState } from "react";
import "./style.css";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  const onSearch = (e) => {
    e.preventDefault();

    // 검색어가 공백인 경우 대화상자 출력
    if (search === "") {
      window.alert("검색어를 입력해 주세요.");
    }

    setResult(search);
  };

  return (
    <div className="container">
      <form onSubmit={onSearch}>
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <button>검색</button>
      </form>
      {result && (
        <div>
          '<b>{result}</b>'에 대한 검색결과
        </div>
      )}
    </div>
  );
};
