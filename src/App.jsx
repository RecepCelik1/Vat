import React, { useState } from 'react';


const App = () => {
  const [inputValue, setInputValue] = useState('1000');
  const [inputVatValue, setVatValue] = useState('20');
  const [parsedValue, setParsedValue] = useState(1000);
  const [parsedVatValue, setParsedVatValue] = useState(20);
  const [selectedOption, setSelectedOption] = useState('includeVat');

  const handleInputChange = (event) => {
    const filteredValue = event.target.value.replace(/[^0-9,]/g, '');
    setInputValue(filteredValue);
    const parsedValue = parseFloat(filteredValue.replace(',', '.'));
    setParsedValue(parsedValue);
  };

  const handleVatChange = (event) => {
    const filteredValue = event.target.value.replace(/[^0-9,]/g, '');
    setVatValue(filteredValue);
    const parsedVatValue = parseFloat(filteredValue.replace(',', '.'));
    setParsedVatValue(parsedVatValue);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const calculateResult = () => {
    let amountOfVAT, netAmount;

    if (selectedOption === 'includeVat') {
      amountOfVAT = parsedValue * (parsedVatValue / 100);
      netAmount = parsedValue + amountOfVAT;
    } else if (selectedOption === 'excludeVat') {
      amountOfVAT = (parsedValue * parsedVatValue) / (100 + parsedVatValue);
      netAmount = (parsedValue * 100) / (100 + parsedVatValue);
    }

    return { amountOfVAT, netAmount };
  };

  const { amountOfVAT, netAmount } = calculateResult();

  console.log(`amount = ${parsedValue}, vat rate = ${parsedVatValue}`);
  console.log(`amountOfVAT = ${amountOfVAT}, netAmount = ${netAmount}`);

  return (
    <div className='relative w-[440px] h-[544px] flex flex-col items-center rounded-[30px] shadow-2xl'>
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-[31.5px] bg-sky-600"></div>


      <div className="relative w-full h-[525.8px] bg-white rounded-[30px] flex items-center justify-center">
        <div className='card-content w-[376px] h-[462.8px] flex flex-col items-center'>



        <div className='form-group w-[376px] h-[78.4px] mb-[24px] flex flex-col'>
  <label htmlFor="numericInput" className='w-[56.8px] h-[20px] mb-[10.4px]'>Amount</label>
  <div className="flex justify-center items-center h-screen">
    <div className="w-full">
      <input
        type="text"
        className="w-[376px] p-4 box-border border-[1px] border-black h-[48px] rounded-xl transition-all duration-300 focus:border-2 focus:border-black hover:border-2 hover:border-black"
        id="numericInput"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  </div>
</div>





          <div className='form-group w-[376px] h-[78.4px] mb-[24px] flex flex-col '>

            <label htmlFor="vatInput" className='w-[80.3px] h-[20px] mb-[10.4px]'>VAT rate %</label>

            <div className="flex justify-center items-center h-screen border-black border-[1px] rounded-xl">
              <div className="w-full flex justify-center rounded-lg relative">
                <input
                  type="text"
                  className="w-[376px] p-4 box-border h-[48px] rounded-xl"
                  id="vatInput"
                  value={inputVatValue}
                  onChange={handleVatChange}
                />
                <div className='absolute right-3 top-3'>%</div>
              </div>
            </div>
              
          </div>



          <div className='form-group w-[376px] h-[108px] mb-[24px] flex flex-col'>

  <div className='w-[376px] h-[48px] mb-[12px] flex items-center'>
    <label className="text-black flex items-center w-full h-full cursor-pointer border-[1px] border-black rounded-xl hover:border-[2px] transition-all duration-500">
      <input
        className='w-[24px] h-[48px] mr-4 ml-2 text-black cursor-pointer'
        type="radio"
        name="vat"
        value="includeVat"
        checked={selectedOption === 'includeVat'}
        onChange={handleOptionChange}
      />
      Include VAT
    </label>
  </div>

  <div className='w-[376px] h-[48px] border-[1px] border-black rounded-xl mb-[12px] flex items-center transition-all duration-300 hover:border-2 hover:border-black'>
    <label className="text-black flex items-center w-full h-full cursor-pointer">
      <input
        className='w-[24px] h-[48px] mr-4 ml-2 text-black cursor-pointer'
        type="radio"
        name="vat"
        value="excludeVat"
        checked={selectedOption === 'excludeVat'}
        onChange={handleOptionChange}
      />
      Exclude VAT
    </label>
  </div>

</div>




          <div className='result-section w-[376px] h-[126px] bg-[#16330014] rounded-xl'>
  <div className='grid grid-cols-2 grid-rows-2 h-full'>
    {/* Sol Üst */}
    <div className='flex flex-col items-start justify-center pl-7 pt-3'>
      <dt className="text-left">Amount of VAT:</dt>
    </div>

    {/* Sağ Üst */}
    <div className='flex flex-col items-end justify-center right-5 pr-7 pt-3 relative'>
      <dd className="text-right text-xl font-bold">{amountOfVAT.toFixed(2)}</dd> <div className='absolute right-3 text-2xl'>¤</div>
    </div>

    {/* Sol Alt */}
    <div className='flex flex-col items-start justify-center pl-7 pb-3'>
      <dt className="text-left">Net amount:</dt>
    </div>

    {/* Sağ Alt */}
    <div className='flex flex-col items-end justify-center right-5 pr-7 pb-3 relative'>
      <dd className="text-right text-xl font-bold">{netAmount.toFixed(2)}</dd> <div className='absolute right-3 text-2xl'>¤</div>
    </div>
  </div>
</div>



        </div>
      </div>
    </div>
  );
};

export default App;