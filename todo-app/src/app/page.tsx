'use client';
import { Component } from "react";

function FirstComponent() {
  return <div>First Component</div>;
}

function SecondComponent() {
  return <div>Second Component</div>;
}

class ThirdComponent extends Component {
  render() {
    return <div>Third Component</div>;
  }
}

class FourthComponent extends Component {
  render() {
    return <div>Fourth Component</div>;
  }
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-24 gap-3">
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
    </main>
  );
}
