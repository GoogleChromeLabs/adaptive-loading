
const CircleNumber = ({ number }) => (
  <>
    <span>{number}</span>
    <style jsx>{`
      display: inline-block;
      width: 30px;
      height: 30px;
      padding: 5px;
      margin-right: 10px;
      border-radius: 50%;
      color: #333;
      background-color: #fff;
      text-align: center;
    `}</style>
  </>
);

export default CircleNumber;
