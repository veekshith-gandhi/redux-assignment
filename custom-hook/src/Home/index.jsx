import useTimeout from "../hooks/useTimeout";

const Home = () => {
  const { ready } = useTimeout(5000);
  console.log(ready);

  return <div></div>;
};
export default Home;
