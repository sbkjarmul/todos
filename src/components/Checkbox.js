import React, { useState } from 'react';
import styled from 'styled-components';

const Box = styled.span`
  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] + span {
    display: inline-block;
    position: relative;
    width: 24px;
    height: 24px;
    margin: 12px;
    border: 2px solid #000000;
    vertical-align: middle;
    cursor: pointer;

    svg {
      position: absolute;
      top: -20%;
      right: -30%;
      display: none;
    }
  }

  input[type='checkbox']:checked + span {
    border-color: #00ff0a;

    svg {
      display: block;
    }
  }

  input[type='checkbox'] + span {
    margin-right: 12px;
  }
`;

const CheckMark = () => {
  return (
    <svg
      width='23'
      height='21'
      viewBox='0 0 23 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M21.9956 0.497056C20.9577 -0.0618004 19.8001 1.01599 19.1215 1.65469C17.5647 3.17158 16.2474 4.92799 14.7704 6.52472C13.1337 8.28113 11.6168 10.0375 9.94028 11.7541C8.98224 12.7121 7.94436 13.75 7.30567 14.9476C5.86861 13.5503 4.63114 12.0335 3.03441 10.7961C1.87678 9.91785 -0.0393044 9.27915 0.00061391 11.3948C0.0804506 14.1493 2.51547 17.1032 4.31179 18.9793C5.07024 19.7777 6.0682 20.616 7.22583 20.6559C8.62297 20.7357 10.06 19.0591 10.8983 18.141C12.3754 16.5443 13.5729 14.7479 14.9301 13.1113C16.6865 10.9557 18.4828 8.83999 20.1993 6.64448C21.2771 5.28726 24.6701 1.93405 21.9956 0.497056ZM1.75695 11.2352C1.71704 11.2352 1.67712 11.2352 1.59728 11.275C1.43761 11.2352 1.31785 11.1952 1.15818 11.1153C1.27794 11.0355 1.47753 11.0754 1.75695 11.2352Z'
        fill='#00FF0A'
      />
    </svg>
  );
};

export const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onClickHandler = () => {
    setIsChecked((isChecked) => !isChecked);
  };

  return (
    <Box onClick={onClickHandler}>
      <input type='checkbox' checked={isChecked} onChange={onClickHandler} />
      <span>
        <CheckMark />
      </span>
    </Box>
  );
};
