import React from 'react';
import './App.css';
import { AppRouter } from './components/routing/AppRouter';

function App() {
  return (
    <>
      <AppRouter></AppRouter>
    </>
  );
}

export default App;

//
// interface IAppProps {
//   message: string;
// }
//
// type MyProps = {
//   // using `interface` is also ok
//   message: string;
// };
// type MyState = {
//   count: number; // like this
// };
//
// class CP extends Component<MyProps, MyState> {
//   constructor(props: MyProps) {
//     super(props);
//   }
//
//   componentDidMount() {}
//
//   gg() {
//     this.setState({
//       count: 11,
//     });
//     // this.props.message = '11';
//   }
//
//   render() {
//     return <div>{this.state.count}</div>;
//   }
// }
//
// const App2 = ({ message }: IAppProps) => <div>{message}</div>;
//
// const CM: React.FunctionComponent = (): JSX.Element => {
//   return <div>name</div>;
// };
//
// const CMu: React.FunctionComponent<{ msg: string }> = ({ msg }): JSX.Element => {
//   return <div>{msg}</div>;
// };
