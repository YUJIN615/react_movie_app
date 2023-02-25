import { useState, useEffect } from "react";
import Button from "./Button"
import styles from "./App.module.css"

function Hello() {
  function createdFn() {
    console.log("created");
    // Cleanup function : 컴포넌트가 사라질 때 실행하는 함수
    return destroyedFn;
  }
  function destroyedFn() {
    console.log("destroyed")
  }
  useEffect(createdFn,[])
  return (
    <p>Hello</p>
  )
}

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);

  // state값이 바뀔때마다 함수 안의 모든 코드가 재실행된다.
  // 불필요한 렌더링이 발생한다.
  // console.log("I run all time")

  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {
    setKeyword(event.target.value)
  }

  // useEffect는 불필요한 렌더링을 방지해준다.
  // useEffect(함수, [state 변수...])
  // 두번째 인자에 state 값이 없을 때 -> 함수는 최초에 한번만 실행된다.
  useEffect(() => {
    console.log("I run only once...")
  }, []);
  // 두번째 인자에 state 값이 있을 때 -> state 값이 변경될 때만 함수를 실행한다.
  useEffect(() => {
    if (keyword !== "") {
      console.log("I run when keyword changes")
    }
  }, [keyword])
  useEffect(() => {
    console.log("I run when counter changes")
  }, [counter])
  useEffect(() => {
    console.log("I run when counter and keyword changes")
  }, [counter, keyword])

  const [showing, setShowing] = useState(false);
  const onClickShowBtn = () => setShowing((current) => !current);

  return (
    <div>
      {/* import 해온 styles에 정의되어있는 스타일을 바인딩한다. */}
      <h1 className={styles.title}>Welcome</h1>
      <div>
        <span style={{ display: "inline-block", padding: "10px" }}>{counter}</span>
        <Button text={"click me"} onClick={onClick} />
      </div>
      <br />
      <div>
        <input
          type="text"
          placeholder="Search here..."
          onChange={onChange}
          value={keyword}
        />
      </div>
      <br />
      <div>
        <button onClick={onClickShowBtn}>{showing ? 'Hide' : 'Show'}</button>
        { showing ? <Hello /> : null }
      </div>
    </div>
  );
}

export default App;
