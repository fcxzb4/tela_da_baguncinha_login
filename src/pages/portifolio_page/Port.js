
import Main from '../../components/ui/portifolio_main/Main';
import Footer from '../../components/ui/portifolio_footer/Footer';



function Port() {
  return (
    <div className="Port">
      <Main />
      <Footer />
      <div >
        <iframe id="Video_Try"
          width="500"
          height="315"
          src="https://www.youtube.com/embed/VE03Lqm3nbI?si=SdbFyNb6piEz2xDA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
      </div>
    </div>
  );
}

export default Port

