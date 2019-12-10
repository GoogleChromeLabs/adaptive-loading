
const CheckboxWithLabel = ({ label, onChange, ...rest }) => {
  const onChangeHandler = event => {
    onChange(event.target.checked);
  };

  return (
    <>
      <div className='checkbox'>
        <input type='checkbox' onChange={onChangeHandler} {...rest} />
        <label>{label}</label>
      </div>
      <style jsx>{`
        .checkbox {
          display: flex;
          align-items: center;
          padding: 8px;
        }
      `}</style>
    </>
  );
};

export default CheckboxWithLabel;
