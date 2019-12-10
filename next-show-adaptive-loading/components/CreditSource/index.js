
import ContainedButton from '../ContainedButton';

const CreditSource = () => (
  <>
    <a
      className='github-link'
      href='https://www.github.com/timneutkens/next-episode'>
      <ContainedButton>
        Github.com
      </ContainedButton>
    </a>
    <style jsx>{`
      .github-link {
        display: block;
        margin-top: 48px;
      }
    `}</style>
  </>
);

export default CreditSource;
