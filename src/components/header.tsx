import React, {useState} from 'react';
import {GithubPicker} from 'react-color';

interface HeaderProps {
  onSetBgColor: (hex: string) => void;
}

export default function Header({onSetBgColor}: HeaderProps) {
  const [bgColor, setBgColor] = useState<string>('#fff');
  const [pickerVisible, setPickerVisible] = useState<boolean>(false);

  const availableColors: string[] = ['#FFFFFF', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EEEEEE',
    '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'];

  const handleChangeComplete = (hex: string) => setBgColor(hex);
  const handlePickerVisible = (visible: boolean) => setPickerVisible(!visible);

  return (
    <>
      <h1 className="col-span-2 border-b border-slate-200 pb-5 items-center text-5xl font-extrabold">Balldontlie API
        <span
          className="relative bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded ml-2 -top-2">V1</span>
      </h1>
      <div className="col-span-2 relative mb-2">
        <button onClick={() => handlePickerVisible(pickerVisible)}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Pick color
        </button>
        <div className={'absolute -top-3 left-28 ' + (pickerVisible ? 'show' : 'hidden')}>
          <GithubPicker
            triangle="hide"
            width="212px"
            colors={availableColors}
            color={bgColor}
            onChangeComplete={({hex}) => {
              handlePickerVisible(pickerVisible);
              handleChangeComplete(hex);
              onSetBgColor(hex);
            }}
          />
        </div>
      </div>
    </>
  );
}
