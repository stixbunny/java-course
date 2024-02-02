"use client";
import { Component } from "react";
import TestComponent from "@/components/TestComponent";

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
      <TestComponent increment={1}/>
      <TestComponent increment={2}/>
      <TestComponent increment={3}/>
    </main>
  );
}
