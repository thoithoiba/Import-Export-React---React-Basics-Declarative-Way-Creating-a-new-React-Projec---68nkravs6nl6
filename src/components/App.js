import React, { Component, useState } from "react";
import '../styles/App.css';
import InputQuery from './InputQuery';
import Heading from './Heading';
import SubHeading from './SubHeading';
import SubmitButton from './SubmitButton';

const App = () => {
  return (
    <div id="main">
      <Heading />
      <SubHeading />
      <InputQuery />
      <SubmitButton />
    </div>
  )
}


