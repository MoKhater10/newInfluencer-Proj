import "./about-smou.css";

import img1 from "../../smou-imgs/about-smou-img-1.webp";
import img2 from "../../smou-imgs/about-smou-img-2.webp";

import SmouSectionTitle from "../../smou-main-title/SmouSectionTitle";

const AboutSmou = () => {
  return (
    <section className="about-smou" id="who-us-smou">
      <div className="about-content">
        <div className="container">
          <SmouSectionTitle title="سمو" />
          <p className="about-info">
            خبراء في التسويق الإلكتروني، نقدم لكم مجموعة من خدمات التسويق عبر
            المشاهير، لدينا نخبة من أهم المشاهير في المملكة العربية السعودية،
            مُختارين بعناية على أسس قوية ودراسة شاملة لتأثيرهم على كل المنصات
            التي تهمك، يستطيعون تقديمك للجمهور وجعل اسم علامتك التجارية مشهور
            بين فئات مختلفة من العملاء. اختر المؤثر المُفضل لديك وكن ضمنَ
            عملائنا المميزين وشراكئنا في النجاح
          </p>
        </div>
      </div>

      <div className="about-smou-images container">
        <div className="about-smou-img">
          <img src={img1} alt="" />
        </div>
        <div className="about-smou-img">
          <img src={img2} alt="" />
        </div>
      </div>
    </section>
  );
};
export default AboutSmou;
