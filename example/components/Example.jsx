import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';
import { InputOptionElement, FloatHeader } from '../../lib/components';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};

const steps = [
  {
    id: '1',
    message: 'What is your name?',
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    trigger: '3'
  },
  {
    id: '3',
    options: [
      { value: 'name', label: 'Name', trigger: '4' },
      { value: 'gender', label: 'Gender', trigger: '4' },
      { value: 'age', label: 'Age', trigger: '4' }
    ]
  },
  {
    id: '4',
    message: 'Hi {previousValue}, nice to meet you!',
    end: true
  }
];

const style = { width: '70px' };

const handleInputOption = value => {
  const event = new CustomEvent('secondInputOptionClicked', { detail: { value, trigger: 3 } });
  document.getElementsByClassName('rsc-change-button')[0].dispatchEvent(event);
};

const handleSecondInputOption = choice => {
  console.log('choice', choice);
  console.log('handleSecondInputOption');
  if (document.getElementsByClassName('rsc-footer')) {
    const secondInputOptionContainer = document.getElementsByClassName('rsc-footer')[0];
    const event = new CustomEvent('secondInputOptionClicked', {
      detail: { value: choice, trigger: '4', showUserInput: true }
    });
    secondInputOptionContainer.dispatchEvent(event);
  }
};

const choices = [
  <InputOptionElement
    id="test"
    key="property-info"
    style={style}
    onClick={() => handleInputOption('property_attribute')}
  >
    物件情報
  </InputOptionElement>,
  <InputOptionElement key="surrounding-info" style={style}>
    周辺情報
  </InputOptionElement>,
  <InputOptionElement key="land-info" style={style}>
    土地情報
  </InputOptionElement>
];

const secondInputOptionElements = [
  <InputOptionElement
    id="test"
    key="property-info"
    style={style}
    onClick={() => handleSecondInputOption('値段')}
  >
    値段
  </InputOptionElement>,
  <InputOptionElement key="surrounding-info" style={style}>
    広さ
  </InputOptionElement>,
  <InputOptionElement key="land-info" style={style}>
    敷地面積
  </InputOptionElement>
];

const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <React.StrictMode>
      <FloatHeader headerTitle="test"></FloatHeader>
      <ChatBot
        steps={steps}
        changable={true}
        inputOptionElements={choices}
        hideSecondInputOption={false}
        secondInputOptionElements={secondInputOptionElements}
      />
    </React.StrictMode>
  </ThemeProvider>
);

export default ThemedExample;
