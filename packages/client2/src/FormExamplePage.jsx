import React from "react";
import { Form, FastField } from "formik";

import createForm from "@lskjs/general/Form2/createForm";
import FormDebug from "@lskjs/general/Form2/FormDebug";

import Input from "@lskjs/general/Form2/controls/Input";
import Select from "@lskjs/general/Form2/controls/Select";
import Checkbox from "@lskjs/general/Form2/controls/Checkbox";
import Tags from "@lskjs/general/Form2/controls/Tags";

const FormExample1View = props => {
  return (
    <Form>
      <FastField {...props.controls.input} />
      <FastField {...props.controls.select} />
      <FastField {...props.controls.checkbox} />
      <FastField {...props.controls.tags} />
      <FormDebug {...props} />
    </Form>
  );
};

export const FormExample1 = createForm({
  view: FormExample1View,
  controls: {
    input: {
      title: "input",
      component: Input,
      placeholder: "input"
    },
    select: {
      title: "The Select",
      component: Select,
      options: [
        {
          value: "corporation",
          title: "first"
        },
        {
          value: "individual",
          title: "second"
        }
      ],
      placeholder: "placeholder"
    },
    checkbox: {
      title: "The Checkbox",
      component: Checkbox,
      label: "Checkbox label",
      placeholder: "Checkbox placeholder"
    },
    tags: {
      title: "tags",
      component: Tags,
      triggerTitle: "Выбрать теги",
      flat: true,
      options: [
        {
          value: "one",
          title: "Один"
        },
        {
          value: "two",
          title: "Два"
        },
        {
          value: "three",
          title: "Три"
        },
        {
          value: "four",
          title: "Четыре"
        }
      ]
    }
  }
});

export default FormExample1;
