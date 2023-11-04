import { Outlet, useNavigate } from 'react-router-dom';
import smouWordImg from '../../smou-imgs/smou-login-word.webp';
import './smou-login-page.css';

const SmouLoginPage = () => {
  const navigate = useNavigate();
  return (
    <section className="smou-login-page">
      <Outlet />

      <article className="side-left">
        <div className="login-content" onClick={()=>{navigate('/')}}>
          <h4 className="smou-login-title">مرحبا بك من جديد في سمو</h4>
          <p className="smou-login-info">
            احصل علي مؤثر ليساعدك في التسويق لعلامتك التجاريه <br /> من خلال
            موقعنا
          </p>
        </div>
      </article>
    </section>
  );
};
export default SmouLoginPage;
