import './App.css';
import UseCallbackHook from './components/useCallbackHook/useCallbackHook';
import UseContextHook from './components/useContextHook/useContextHook';
import UseEffectHook from './components/useEffectHook/useEffectHook';
import UseImperativeHandleHook from './components/useImperativeHandle/useImperativeHandleHook';
import UseLayoutEffectHook from './components/useLayoutEffectHook/useLayoutEffectHook';
import UseMemoHook from './components/useMemoHook/useMemoHook';
import UseReducerHook from './components/useReducerHook/useReducerHook';
import UseRefHook from './components/useRefHook/useRefHook';
import UseStateHook from './components/useStateHook/useStateHook';


function App() {
  return (
    <div className="App">
      {/* <UseStateHook />      */}
      {/* <UseReducerHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseLayoutEffectHook /> */}
      {/* <UseImperativeHandleHook /> */}
      {/* <UseContextHook /> */}
      {/* <UseMemoHook /> */}
      <UseCallbackHook />
    </div>
  );
}

export default App;
