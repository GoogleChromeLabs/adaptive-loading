
const CheckboxWithLabel = ({ label, toggle, ...rest }) => {
  const toggleHandler = event => {
    toggle(event.target.checked);
  };

  return (
    <div className='checkbox'>
      <label>
        <input type='checkbox' onChange={toggleHandler} {...rest} />
        {label}
      </label>
      <style jsx global>{`
        div.checkbox {
          margin-left: 20px;
          padding: 8px;
          border: 1px solid #1890ff;
          border-radius: 20px;
        }
      `}</style>
    </div>
  )
};

export default CheckboxWithLabel;
