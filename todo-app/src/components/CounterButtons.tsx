import CounterButton from "./CounterButton";

type Props = {
  value: number;
};

export default function CounterButtons(props: Props) {
  return (
    <div className="mx-auto">
      <CounterButton changeByNumber={-props.value} />
      <CounterButton changeByNumber={props.value}/>
    </div>
  );
}
