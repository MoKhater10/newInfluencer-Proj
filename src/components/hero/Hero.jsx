import React, { useRef } from "react";
import { BsArrowDown } from "react-icons/bs";
import Title from "../title/Title";
import NavBar from "../NabBar/NavBar";
import "./hero.css";
import azzrkHeroBack from "../../assets/images/azzrk-hero-back.webp";
import mardodHeroBack from "../../assets/images/mardod-hero-back.webp";
import darbHeroBack from "../../assets/images/darb-hero-back.webp";
import waraqaHeroBack from "../../assets/images/waraqa-hero-back.webp";
import atharHeroBack from "../../assets/images/athar-hero-back.webp";
import azzrkHeroImg from "../../assets/images/azzrk-hero-img.webp";
import mardodHeroImg from "../../assets/images/mardod-hero-img.webp";
import darbHeroImg from "../../assets/images/darb-hero-img.webp";
import warqaHeroImg from "../../assets/images/warqa-hero-img.webp";
import atharHeroImg from "../../assets/images/athar-hero-img.webp";
import azzrkSubHeroBack from "../../assets/images/azzrk-subhero-back.webp";
import mardodSubHeroBack from "../../assets/images/mardod-subhero-back.webp";
import darbSubHeroBack from "../../assets/images/darb-subhero-back.webp";
import warqaSubHeroBack from "../../assets/images/warqa-subhero-back.webp";
import atharSubHeroBack from "../../assets/images/athar-subhero-back.webp";

const Hero = () => {
  const scrollDivRef = useRef();

  function handleScroll() {
    if (scrollDivRef.current)
      scrollDivRef.current.scrollIntoView({ behavior: "smooth" });
  }

  var subdomain = window.location.origin;
  const DOMAINS = {
    AZZRK: "https://influencer.azzrk.com",
    ATHAR: "https://influencer.atherr.com",
    MARDOD: "https://influencer.marrdoud.com",
    WARAQA: "https://influencer.warrqa.com",
    DARB: "https://influencer.darbplatform.com",
    SMOUE: "https://influencer.sumoue.com",
  };

  var heroBackground;
  var heroImg;
  var subHeroBack;
  var whoUs;
  var heroTitle;
  var heroContent;
  var btnContent;
  var warqaPg;
  switch (subdomain) {
    case DOMAINS.AZZRK:
      heroBackground = azzrkHeroBack;
      heroImg = azzrkHeroImg;
      subHeroBack = azzrkSubHeroBack;
      heroTitle = "كن مستعد";
      heroContent =
        " جميع الأضواء عليك الآن نسلط عليك الأضواء لتلمع في سماء المشاهير وتصبح نجم ساطع في عالم الأعمال";
      whoUs =
        "خدمة الإنفلونسر هى خدمة جديدة ومميزة مُقدمة لك من منصة أزرق لتسهل عليك التواصـل مع المشاهير واختيارهم بناءً على تقييمات وترشيحات تساعدك لتتمكن من الوصول لأكبر عدد من المتابعين المهتمين بما تقدمه لتحقق أوسع إنتشار وتزيد الوعي بعلامتك التجارية وتحصل على المزيد من التفاعل على المنصات المختلفة .";
      btnContent = "استكشف خدمتنا ";
      warqaPg = false;
      break;

    case DOMAINS.MARDOD:
      heroBackground = mardodHeroBack;
      heroImg = mardodHeroImg;
      subHeroBack = mardodSubHeroBack;
      heroTitle = "كن مستعد";
      heroContent = " جميع الأضواء عليك الآن نسلط عليك الأضواء لتلمع في سماء المشاهير وتصبح نجم ساطع في عالم الأعمال";
      whoUs =`مردود منصة متخصصة في التسويق الإلكترونية و استشارات المتاجر الالكترونية داخل المملكة العربية السعودية تقدم خدماتها بالاعتماد على فريق العمل المتخصص في مجال التسويق الرقمي، ويمتلك فريق العمل خبرة أكثر من 10 أعوام وهذا ما يجعلهم يعملون بإبداع ويساعدونك في سباق التطور التكنولوجي السريع تعد خدمة المشاهير من أحدث الاتجاهات في مجال التسويق الإلكتروني، وهي تقنية حديثة تعتمد على استخدام شخصيات مشهورة ومؤثرة لتعزيز وتسويق المنتجات والخدمات. إن استخدام المشاهير كجزء من استراتيجيتك التسويقية يكون له تأثير كبير على نجاح عملك ونموه بصورة مذهلة. نحن ندرك أهمية خدمة المشاهير وكيفية استغلالها بشكل فعال. نقوم بتحليل احتياجات عملك واهدافك التسويقية لتحديد المشاهير المناسبين لشركتك`;
      btnContent = "استكشف خدمتنا ";
      warqaPg = false;
      break;

    case DOMAINS.DARB:
      heroBackground = darbHeroBack;
      heroImg = darbHeroImg;
      subHeroBack = darbSubHeroBack;
      heroTitle = "أهلا بك في درب ";
      heroContent =
        "وجهتك لدخول عالم التجارة الإلكترونية والتسويق الرقمي والتسويق بالمؤثرين";
      whoUs =
        " درب هي منصة رقمية سعودية متكاملة الخدمات في مجال التسويق الالكتروني ووجهتك لدخول عالم التجارة الالكترونية والتسويق بواسطة المؤثرين ولأننا نسعى دائمًا لتحسين أساليبنا وتجربة استراتيجيات تسويقية جديدة لتواكب التطورات الحالية في السوق وتحقيق نتائج إيجابية وملموسة لعملائنا،  نجمع لك أكبر المؤثرين في كل المجالات عبر منصات  التواصل الاجتماعي ونقدم لك الحلول التسويقية التي تساعدك على نمو علامتك التجارية و توليد مبيعات  عبر الإنترنت من خلال اختيار المبدعين والمؤثرين والمشاهير المناسبين لنشاطك التجاري وعلامتك  التجارية .";
      btnContent = "اعرف عنا";
      warqaPg = false;
      break;

    case DOMAINS.WARAQA:
      heroBackground = waraqaHeroBack;
      heroImg = warqaHeroImg;
      subHeroBack = warqaSubHeroBack;
      whoUs =
        "ورقة هي منصة متخصصة في الحلول التسويقية للمتاجر الإلكترونية في المملكة العربية السعودية.. خدمات التسويق عبر المؤثرين هي عبارة عن حلول شاملة للشركات لتحسين تسويق منتجاتهم وخدماتهم عن طريق استخدام المؤثرين في وسائل التواصل الاجتماعي و تتضمن خدمات التسويق عبر المؤثرين تحديد المؤثرين المناسبين وتصميم الحملات الإعلانية عن طريقهم وتتبع النتائج. تتيح خدمات التسويق عبر المؤثرين فوائد كثيرة للشركات حيث تساعد في زيادة الوعي بالعلامة  التجارية ومضاعفة الأرباح وتحسين تواجد العلامة التجارية في الأسواق المختلفة ";
      warqaPg = true;
      heroTitle = "حياك الله";
      heroContent = "نسعد برؤيتك في موقعنا";
      btnContent = "تعرف علينا";
      break;

    case DOMAINS.ATHAR:
      heroBackground = atharHeroBack;
      heroImg = atharHeroImg;
      subHeroBack = atharSubHeroBack;
      heroTitle = "حياك الله";
      heroContent = "نسعد برؤيتك في موقعنا";
      whoUs =
        "مسوقون محترفون، نعلَم أن الأثر هو الباقِ، ولهذا جئنا بالمؤثرين من كل أنحاء المملكة ليقوموا بترويج نشاطك التجاري، ليظهر للجميع في كل مكان، لأن دور المؤثر هو جذب أكبر جمهور ممكن، فلهذا اخترنا أفضل المؤثرين بناءًا على عدد متابعيهم ومدى ثقة الجمهور فيهم. انضم لنا الآن وشاهد تجارتك تزدهر.";
      btnContent = "تعرف علينا";
      warqaPg = false;
      break;

    default:
      heroBackground = azzrkHeroBack;
      heroImg = azzrkHeroImg;
      subHeroBack = azzrkSubHeroBack;
      heroTitle = "كن مستعد";
      heroContent =
        " جميع الأضواء عليك الآن نسلط عليك الأضواء لتلمع في سماء المشاهير وتصبح نجم ساطع في عالم الأعمال";
      whoUs =
        "خدمة الإنفلونسر هى خدمة جديدة ومميزة مُقدمة لك من منصة أزرق لتسهل عليك التواصـل مع المشاهير واختيارهم بناءً على تقييمات وترشيحات تساعدك لتتمكن من الوصول لأكبر عدد من المتابعين المهتمين بما تقدمه لتحقق أوسع إنتشار وتزيد الوعي بعلامتك التجارية وتحصل على المزيد من التفاعل على المنصات المختلفة .";
      btnContent = "استكشف خدمتنا ";
      warqaPg = false;
  }

  return (
    <div className="hero">
      <NavBar />
      <div
        className="top"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="container">
          <div className="text">
            <h1 className="hero-title">{heroTitle}</h1>
            <h1>{heroContent}</h1>
          </div>
          <div className="scroll" onClick={handleScroll}>
            <p>{btnContent}</p>
            <div className="icon">
              <BsArrowDown />
            </div>
          </div>
        </div>
      </div>
      <div
        className="bottom"
        ref={scrollDivRef}
        id="who-us"
        style={
          warqaPg
            ? {
                backgroundImage: `url(${warqaSubHeroBack})`,
                backgroundPosition: "bottom",
              }
            : { backgroundImage: `url(${subHeroBack})` }
        }
      >
        <Title color="white" text="من نحن" />
        <div className="container who-we-are">
          <div className={warqaPg ? "whoUsParentDiv row gap-5" : "row gap-5"}>
            <div className="col whoUsParent">
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "41px",
                  padding: "30px 30px 30px 20px",
                  borderRadius: "72px",
                  margin: "0",
                }}
              >
                {whoUs}
              </p>
            </div>
            <div className="col warqaDiv">
              <div className="image">
                <img src={heroImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;